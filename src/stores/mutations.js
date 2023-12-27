export default {
  // do nó chuyển từ audio object -> local storage -> empty object
  // chuyển lại vuex -> empty object -> src= undefined
  // log ra object với attr là undefined
  initialStorage(state) {
    if (localStorage.getItem("store")) {
      const storedState = JSON.parse(localStorage.getItem("store"));
      storedState.isPlaying = false;
      storedState.timeProgress = 0;
      Object.assign(state, storedState);
      const playerData = {
        src: state.songs[state.currentIndex].src,
        loop: state.isRepeat,
        volume: state.volume,
      };

      state.player = new Audio();
      Object.assign(state.player, playerData);
    } else {
      state.player = new Audio();
    }
  },
  play(state, index) {
    let audio = state.player;
    const song = state.songs[index];
    audio.volume = state.volume;
    if (typeof song.src !== "undefined") {
      audio.src = song.src;
      audio.load();
    }

    // audio.play();
    // Fix DOM error by play() interrupt -> create a setTimout to load
    setTimeout(function () {
      audio.play();
    }, 15);
    audio.addEventListener("ended", () => {
      if (state.isRepeat) {
        this.commit("play", state.currentIndex);
      } else if (state.isRandom) {
        this.commit("random");
      } else {
        this.commit("next");
      }
    });
    state.currentIndex = index;
    state.isPlaying = true;
  },
  pause(state) {
    state.player.pause();
    state.isPlaying = false;
  },
  prev(state) {
    state.currentIndex--;
    if (state.currentIndex < 0) {
      state.currentIndex = state.songs.length - 1;
    }
    this.commit("play", state.currentIndex);
  },
  next(state) {
    state.currentIndex++;
    if (state.currentIndex > state.songs.length - 1) {
      state.currentIndex = 0;
    }
    this.commit("play", state.currentIndex);
  },
  random(state) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * state.songs.length);
    } while (newIndex === state.currentIndex);
    state.currentIndex = newIndex;
    state.isRandom = true;
    this.commit("play", state.currentIndex);
  },
  repeat(state) {
    state.player.loop = state.isRepeat;
  },
  onTimeUpdate(state) {
    const audio = state.player;
    const progress = document.querySelector("#progress");
    audio.ontimeupdate = () => {
      if (audio.duration) {
        state.timeProgress = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = state.timeProgress;
      }
      progress.onchange = function (e) {
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      };
    };
  },
  updateVolume(state, volume) {
    state.player.volume = volume;
    state.volume = volume;
  },
};
