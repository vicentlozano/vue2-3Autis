import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../components/pages/coaches/CoachesList.vue';
import NotFound from '../components/pages/NotFound.vue';
import store from '../store/index'
const CoachDetail = (() => import ('../components/pages/coaches/CoachDetail.vue'));
const CoachRegistration = (() => import ('../components/pages/coaches/CoachRegistration.vue'));
const ContactCoach = (() => import ('../components/pages/coaches/ContactCoach.vue'));
const UserAuth = (() => import ('../components/pages/auth/UserAuth.vue'));
const Requests = (() => import ('../components/pages/request/RequestsReceived.vue'));




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
