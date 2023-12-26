<template>
  <header>
    <h4>Now playing:</h4>
    <h2>{{ songs[currentIndex].title }}</h2>
  </header>
</template>


<script>
import { mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters(["songs", "currentIndex"]),
  },
};
</script>


<style>
@import "./Header.module.scss";
</style>
