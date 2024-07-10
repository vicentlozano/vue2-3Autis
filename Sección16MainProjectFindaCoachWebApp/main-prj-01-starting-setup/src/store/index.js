import { createStore } from 'vuex';
import rootRequests from './modules/request/index';
import rootCoaches from './modules/coaches/index';

const store = createStore({
  modules: {
    myCoaches: rootCoaches,
    myRequests: rootRequests,
  },
});

export default store;
