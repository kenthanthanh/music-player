<template>
  <li
    class="song"
    :class="{ active: index === currentIndex }"
    v-for="(song, index) in songs"
    :key="index"
    @click="
      () => {
        if (isPlaying && index === currentIndex) {
          pause();
        } else {
          play(index);
        }
      }
    "
  >
    <img class="thumb" :src="song.poster || 'src/assets/img/default.jpg'" />
    <div class="body">
      <h3 class="title">{{ song.title }}</h3>
      <p class="author">{{ song.singer }}</p>
    </div>
    <div class="option">
      <i class="fas fa-ellipsis-h"></i>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["play", "pause"]),
  },
  computed: {
    ...mapGetters(["songs", "currentIndex", "isPlaying"]),
  },
};
</script>

<style>
@import "../styles/main.scss";
</style>
