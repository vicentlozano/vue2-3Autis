import { createApp } from 'vue';
import App from './App.vue';
import GridBase from './components/UI/GridBase.vue';

const app = createApp(App);
app.component('GridBase', GridBase);
app.config.devtools = true;
app.mount('#app');
