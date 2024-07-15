import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../components/pages/coaches/CoachesList.vue';
import Requests from '../components/pages/request/RequestsReceived.vue';
import ContactCoach from '../components/pages/request/ContactCoach.vue';
import CoachRegistration from '../components/pages/coaches/CoachRegistration.vue';
import NotFound from '../components/pages/NotFound.vue';
import CoachDetail from '../components/pages/coaches/CoachDetail.vue';
import UserAuth from '../components/pages/auth/UserAuth.vue';
import store from '../store/index'

const routes = [
  { path: '/', redirect: '/coaches' },

  { path: '/request', component: Requests , meta:{requiresAuth:true}},
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  { path: '/register', component: CoachRegistration, meta:{requiresAuth:true} },
  { path: '/:notFound(.*)', component: NotFound },
  { path: '/auth', component: UserAuth, meta:{requiresUnauth:true} },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//Guardas de navegacion!
router.beforeEach(function(to,_,next) {
if(to.meta.requiresAuth && !store.getters.isAuthenticated){
  next('/auth');
} else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
  next('/coaches');
}
else{
  next();
}

});
export default router;
