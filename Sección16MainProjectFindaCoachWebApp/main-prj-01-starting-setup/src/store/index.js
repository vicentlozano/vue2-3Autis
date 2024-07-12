import { createStore } from 'vuex';
import rootRequests from './modules/request/index';
import rootCoaches from './modules/coaches/index';

const store = createStore({
  modules: {
    myCoaches: rootCoaches,
    myRequests: rootRequests,
  },
  state(){
    return {
      userId:'c3'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
