import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const basicCounter = getters.basicCounter;
      if (basicCounter > 100) {
        return 0;
      }

      return basicCounter;
    },
    basicCounter(state) {
      return state.counter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },

  state() {
    return {
      isAuth: false,
    };
  },
  mutations: {
    setAuth(state) {
      state.isAuth = true;
    },
    setNoAuth(state) {
      state.isAuth = false;
    },
  },
  getters: {
    isAuthOrNo(state) {
      return state.isAuth;
    },
  },
  actions: {},
});

const app = createApp(App);

app.use(store);

app.mount('#app');
