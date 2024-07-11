import { createApp } from 'vue';
import router from './router/router';
import store from './store/index';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
const app = createApp(App);
app.use(store);
app.use(router);
app.component('BaseCard',BaseCard);
app.component('BaseButton', BaseButton)
app.component('BaseBadge', BaseBadge
)

app.mount('#app');
