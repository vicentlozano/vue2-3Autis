import { createRouter, createWebHistory } from 'vue-router';
import PruebaObjetos from './pages/PruebaObjetos.vue';
import UserList from './pages/UserList.vue';

const router  = createRouter({
    history: createWebHistory(),
    routes: [
       { path: '/', component: UserList}, 
    {path: '/prueba', component: PruebaObjetos }   
]});

export default router;
