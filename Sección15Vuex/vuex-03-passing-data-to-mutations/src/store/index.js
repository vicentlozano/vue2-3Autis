import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import counterModule from './counter/index';

const store = createStore({
  modules: {
    numbers: counterModule,
  },

  state() {
    return {
      isAuth: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: {},
});

export default store;
