import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '../components/pages/coaches/CoachesList.vue';
import Requests from '../components/pages/request/RequestsReceived.vue';
import ContactCoach from '../components/pages/request/ContactCoach.vue';
import CoachRegistration from '../components/pages/coaches/CoachRegistration.vue';
import NotFound from '../components/pages/NotFound.vue';
import CoachDetail from '../components/pages/coaches/CoachDetail.vue';
import UserAuth from '../components/pages/auth/UserAuth.vue';

const routes = [
  { path: '/', redirect: '/coaches' },

  { path: '/request', component: Requests },
  { path: '/coaches', component: CoachesList },
  {
    path: '/coaches/:id',
    component: CoachDetail,
    props: true,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  { path: '/register', component: CoachRegistration },
  { path: '/:notFound(.*)', component: NotFound },
  { path: '/auth', component: UserAuth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
