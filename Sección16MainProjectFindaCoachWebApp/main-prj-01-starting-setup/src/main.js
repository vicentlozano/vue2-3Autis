import { createApp } from 'vue';
import router from './router/router';
import store from './store/index';
import App from './App.vue';
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
