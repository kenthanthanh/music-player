<template>
  <div class="control-table">
    <!-- Control -->
    <div class="control-table-btn">
      <div
        class="btn btn-repeat"
        :class="{ active: isRepeat }"
        @click="
          () => {
            $store.state.isRepeat = !isRepeat;
            repeat();
          }
        "
      >
        <!-- @change="isRepeat ? repeatMode() : repeatState()" -->
        <i class="fas fa-redo"></i>
      </div>
      <div class="btn btn-prev" @click="isRandom ? random() : prev()">
        <i class="fas fa-step-backward"></i>
      </div>
      <div
        class="btn btn-toggle-play"
        @click="
          () => {
            if (isPlaying) {
              pause();
            } else {
              getPlayer.play();
              $store.state.isPlaying = true;
            }
          }
        "
      >
        <i class="fas fa-pause" v-if="isPlaying"></i>
        <i v-else class="fas fa-play"></i>
      </div>
      <div class="btn btn-" @click="isRandom ? random() : next()">
        <i class="fas fa-step-forward"></i>
      </div>
      <div
        class="btn btn-random"
        :class="{ active: isRandom }"
        @click="
          () => {
            $store.state.isRandom = !isRandom;
            if (!isPlaying) {
              random();
            }
          }
        "
      >
        <i class="fas fa-random"></i>
      </div>
    </div>
    <div class="control-table-progress">
      <input
        id="progress"
        class="progress"
        type="range"
        value="0"
        step="1"
        min="0"
        max="100"
        @change="onTimeUpdate()"
      />
      <input
        id="volume"
        class="progress"
        type="range"
        step="5"
        min="0"
        max="100"
        :value="volume !== undefined && 1 >= volume >= 0 ? volume * 100 : 100"
        @change="setVolume()"
      />
    </div>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";


export default {
  methods: {
    ...mapMutations([
      "play",
      "pause",
      "next",
      "prev",
      "random",
      "repeat",
      "onTimeUpdate",
      "setVolume",
    ]),
    beforeCreate() {
      this.$store.commit("initialStorage");
    },
    created() {
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
    },
    // handleScroll() {
    //   const scrollPosition = window.scrollY;
    //   this.shouldHideCD = scrollPosition > 200; // Adjust threshold as needed
    // },
  },


  computed: {
    ...mapGetters([
      "songs",
      "getPlayer",
      "currentIndex",
      "isPlaying",
      "isRandom",
      "isRepeat",
      "volume",
    ]),
  },
};
</script>


<style>
@import "./Controller.module.scss";
</style>
