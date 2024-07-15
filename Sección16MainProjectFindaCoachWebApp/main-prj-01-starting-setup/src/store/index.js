import { createStore } from 'vuex';
import rootRequests from './modules/request/index';
import rootCoaches from './modules/coaches/index';
import rootAuth from './modules/auth/index';

const store = createStore({
  modules: {
    myCoaches: rootCoaches,
    myRequests: rootRequests,
    myAuth: rootAuth,
  },
 
});

export default store;
