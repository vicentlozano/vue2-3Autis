import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
const store = createStore({
state() {
return {
products: [
    {
        name: 'cocacola',
        price: 2
    },
    {
        name: 'pepsi',
        price: 1.8
    },
    {
        name: 'aquarius',
        price: 1.8
    },
    {
        name: 'vino blanco',
        price: 3
    },
]
}
},
getters,
mutations,
actions
});

export default store;