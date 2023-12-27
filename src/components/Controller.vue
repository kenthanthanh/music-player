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
        type="range"
        class="progress"
        :value="timeProgress"
        step="1"
        min="0"
        max="100"
        @change="onTimeUpdate()"
      />

      <input
        id="volume"
        class="progress"
        type="range"
        step="1"
        min="0"
        max="100"
        :value="volume !== undefined && 1 >= volume >= 0 ? volume * 100 : 100"
        @change="
          (e) => {
            let volume = e.target.value / 100;
            updateVolume(volume);
          }
        "
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  mounted() {
    const audio = this.player;
    audio.ontimeupdate = this.onTimeUpdate;
  },
  // beforeUnmount() {
  //   const audio = this.$store.state.player;
  //   audio.ontimeupdate = null; // Remove event listener when component unmounts
  // },
  methods: {
    ...mapActions([
      "play",
      "pause",
      "next",
      "prev",
      "random",
      "repeat",
      "onTimeUpdate",
      "updateVolume",
    ]),
    // handleScroll() {
    //   const scrollPosition = window.scrollY;
    //   this.shouldHideCD = scrollPosition > 200; // Adjust threshold as needed
    // },
  },

  computed: {
    ...mapState(["player"]),
    ...mapGetters([
      "songs",
      "getPlayer",
      "currentIndex",
      "timeProgress",
      "isPlaying",
      "isRandom",
      "isRepeat",
      "volume",
    ]),
  },
};
</script>

<style>
@import "../styles/main.scss";
</style>
