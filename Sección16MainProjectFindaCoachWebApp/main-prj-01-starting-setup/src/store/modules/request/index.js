
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
    state() {
      return {
        requests: [
          {
            coatchId: 3,
            message: 'Haw make a trip?',
            email: 'maria@gmail.com',
           
          },
          {
            coatchId: 4,
            message: 'When will start classes?',
            email: 'maria@gmail.com',
           
          },
          {
            coatchId: 5,
            message: 'I love your activities',
            email: 'maria@gmail.com',
           
          },
          {
            coatchId: 6,
            message: 'You are a fantastic teacher, but i will leave you!',
            email: 'maria@gmail.com',
           
          },
        ],
      };
    },
    getters,
  
    mutations,
  
    actions,
  };
  