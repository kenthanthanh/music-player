export default {
  initialStorage(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
    // state = JSON.parse(localStorage.getItem("store"));
  },
  play(state, index) {
    const song = state.songs[index];
    console.log(state);
    console.log(state.player);


    let audio = state.player;
    if (typeof song.src !== "undefined") {
      audio.src = song.src;
    }
    console.log(state);
    // this.commit("setVolume");
    // console.log(state.volume);
    audio.volume = state.volume;
    // console.log(audio);
    audio.play();
    audio.addEventListener("ended", () => {
      // console.log(state.isRandom);
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
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
      progress.onchange = function (e) {
        const seekTime = (audio.duration / 100) * e.target.value;
        audio.currentTime = seekTime;
      };
    };
  },
  setVolume(state) {
    let audio = state.player;
    const volumeElement = document.querySelector("#volume");
    volumeElement.onchange = function (e) {
      state.volume = e.target.value / 100;
      // console.log(state.volume);
      audio.volume = state.volume;
      // console.log(audio.volume);
    };
  },
};


