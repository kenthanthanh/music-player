export default{
    play(state, index){
        state.currentIndex=index
        const song = state.songs[index]
        let current = state.current
        let player = state.player
        if (typeof song.src !== "undefined") {
            current = song;
            player.src = current.src;
          }
        player.play();
          player.addEventListener(
            "ended",
            function () {
              index++;
              if (index > state.songs.length - 1) {
                index = 0;
              }
            }.bind(this)
          );
      state.isPlaying = true;
    },
    pause(state){
        console.log(state.isPlaying);
        state.player.pause()
        state.isPlaying= false
        console.log(state.isPlaying);
    },
    prev(state){
        state.currentIndex--
        if(state.currentIndex < 0){
            state.currentIndex = state.songs.length-1
        }
        console.log(state.currentIndex);
        this.commit('play', state.currentIndex)
    },
    next(state){
        state.currentIndex++
        if(state.currentIndex > state.songs.length-1){
            state.currentIndex = 0
        }
        this.commit('play', state.currentIndex)


    },
    random(state){


    }
}
