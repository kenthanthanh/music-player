<template>
  <div class="cd">
    <img
      :style="{ animationPlayState: isPlaying ? 'running' : 'paused' }"
      class="cd-thumb spinning"
      :src="songs[currentIndex].poster || 'src/assets/img/default.jpg'"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  // data() {
  //   return {
  //     shouldHideCD: false,
  //   };
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
  computed: {
    ...mapGetters(["songs", "isPlaying", "currentIndex"]),
  },
  // handleScroll() {
  //   const scrollPosition = window.scrollY;
  //   this.shouldHideCD = scrollPosition > 200; // Adjust threshold as needed
  // },
};
</script>

<style>
@import "../styles/main.scss";
</style>
