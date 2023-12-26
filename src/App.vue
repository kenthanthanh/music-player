<template>
  <div id="app">
    <div class="player">
      <!-- Dashboard -->
      <div class="dashboard">
        <!-- Header -->
        <Header></Header>
        <!-- CD -->
        <CD />
        <!-- :class="{ hidden: shouldHideCD }" -->


        <Controller />
      </div>
      <!-- Playlist -->
      <ul class="playlist">
        <Song />
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header/Header.vue";
import CD from "./components/CD/CD.vue";
import Song from "./components/Song/Song.vue";
import Controller from "./components/Controller/Controller.vue";


export default {
  beforeCreate() {
    this.$store.commit("initialStorage");
  },
  components: {
    Header,
    CD,
    Song,
    Controller,
  },
  methods: {
    created() {
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
    },
  },
};
</script>
<style lang="scss">
@import "./App.module.scss";
</style>