import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


import storeConfigs from './stores'
const app = createApp(App);


// Create a store
const store = createStore(storeConfigs);
store.subscribe((mutations, state) => {
    localStorage.setItem('store', JSON.stringify(state));
})


// app.use(router).use(store).mount('#app')
app.use(store).mount('#app')