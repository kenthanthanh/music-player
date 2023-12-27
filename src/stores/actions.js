export default {
    play({ commit }, index) {
      commit("play", index);
    },
    pause({ commit }) {
      commit("pause");
    },
    next({ commit }) {
      commit("next");
    },
    prev({ commit }) {
      commit("prev");
    },
    random({ commit }) {
      commit("random");
    },
    repeat({ commit }) {
      commit("repeat");
    },
    onTimeUpdate({ commit }) {
      commit("onTimeUpdate");
    },
    updateVolume({commit}, volume){
      commit("updateVolume", volume);
    }
  };
  