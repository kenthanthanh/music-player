export default{
    songs(state){
       
        console.log(state);
return state.songs
    },
    getPlayer(state){
        return state.player
    },
    currentIndex(state){
        return state.currentIndex
    },
    isPlaying(state){
        return state.isPlaying
    }
}
