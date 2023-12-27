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
        <Playlist />
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import CD from "./components/CD.vue";
import Playlist from "./components/Playlist.vue";
import Controller from "./components/Controller.vue";
export default {
  beforeCreate() {
    this.$store.commit("initialStorage");
  },
  components: {
    Header,
    CD,
    Playlist,
    Controller,
  },
  methods: {},
};
</script>
<style lang="scss">
@import "./styles/main.scss";
</style>
