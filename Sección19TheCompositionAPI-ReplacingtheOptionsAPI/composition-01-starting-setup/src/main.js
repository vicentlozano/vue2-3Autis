import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import TheHeader from './components/TheHeader.vue';
import store from './store/index'


const app = createApp(App);
app.component('TheHeader', TheHeader);
app.use(router);
app.use(store);
app.mount('#app');

