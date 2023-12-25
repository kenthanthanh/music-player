

<template>
    <div id="app">
      <div class="player">
        <!-- Dashboard -->
        <div class="dashboard">
          <!-- Header -->
          <header>
            <h4>Now playing:</h4>
            <h2>{{ songs[currentIndex].title }}</h2>
          </header>
          <!-- CD -->
          <div class="cd">
            <img
              :class="{ spinning: isPlaying }"
              class="cd-thumb"
              :src="songs[currentIndex].poster || 'src/assets/img/default.jpg'"
            />
          </div>
          <!-- Control -->
          <div class="control">
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
              <i v-else class="fas fa-play icon-play"></i>
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
            value="100"
            step="10"
            min="0"
            max="100"
            @change="setVolume()"
          />
  
  
          <audio id="audio" src=""></audio>
        </div>
        <!-- Playlist -->
        <ul class="playlist">
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
            <img
              class="thumb"
              :src="song.poster || 'src/assets/img/default.jpg'"
            />
            <div class="body">
              <h3 class="title">{{ song.title }}</h3>
              <p class="author">{{ song.singer }}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  import { mapGetters, mapMutations, mapState } from "vuex";
  
  
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
  
  
      created() {
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
      },
    },
  
  
    computed: {
      ...mapGetters([
        "songs",
        "getPlayer",
        "currentIndex",
        "isPlaying",
        "isRandom",
        "isRepeat",
      ]),
    },
  };
  </script>
<style>
:root {
    --primary-color: #ec1f55;
    --text-color: #333;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

body {
    background-color: #f5f5f5;
}

html {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.player {
    position: relative;
    max-width: 480px;
    margin: 0 auto;
}

.player .icon-pause {
    display: none;
}

.player.playing .icon-pause {
    display: inline-block;
}

.player.playing .icon-play {
    display: none;
}

.dashboard {
    padding: 16px 16px 14px;
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 480px;
    border-bottom: 1px solid #ebebeb;
}

/* HEADER */
header {
    text-align: center;
    margin-bottom: 10px;
}

header h4 {
    color: var(--primary-color);
    font-size: 12px;
}

header h2 {
    color: var(--text-color);
    font-size: 20px;
}

/* CD */
.cd {
    display: flex;
    margin: auto;
    width: 200px;
    height: 200px;
}

.cd-thumb {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #333;
    background-size: cover;
    margin: auto;
    object-fit: cover;
}
.spinning {
    animation: spin 15s linear infinite; /* Adjust duration and timing as desired */
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
/* CONTROL */
.control {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0 8px 0;
}

.control .btn {
    color: #666;
    padding: 18px;
    font-size: 18px;
}

.control .btn.active {
    color: var(--primary-color);
}

.control .btn-toggle-play {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
}

.progress {
    width: 100%;
    -webkit-appearance: none;
    height: 6px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.progress::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 6px;
    background-color: var(--primary-color);
    cursor: pointer;
}

/* PLAYLIST */
.playlist {
    margin-top: 408px;
    padding: 12px;
}

.song {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background-color: #fff;
    padding: 8px 16px;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.song.active {
    background-color: var(--primary-color);
}

.song:active {
    opacity: 0.8;
}

.song.active .option,
.song.active .author,
.song.active .title {
    color: #fff;
}

.song .thumb {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-size: cover;
    margin: 0 8px;
}

.song .body {
    flex: 1;
    padding: 0 16px;
}

.song .title {
    font-size: 18px;
    color: var(--text-color);
}

.song .author {
    font-size: 12px;
    color: #999;
}

.song .option {
    padding: 16px 8px;
    color: #999;
    font-size: 18px;
}
</style>
