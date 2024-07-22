
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import FailPage from './pages/FailPage.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        meta: { needsAuth: true },
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          {
            name: 'team-members',
            path: ':teamId',
            component: TeamMembers,
            props: true,
          },
        ],
      },
      // { path: '/teams', component: TeamsList, alias: '/'},
      {
        name: 'users',
        path: '/users',
        components: {
          default: UsersList,
          footer: UsersFooter,
        },
      },
      { path: '/teams/:teamId', component: TeamMembers, props: true },
      { path: '/:notFound(.*)', component: FailPage },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      console.log(to, from, savedPosition);
      if (savedPosition) {
        return savedPosition;
      }
      return {
        left: 0,
        top: 0,
      };
    },
  });
  router.beforeEach(function (to, from, next) {
    console.log(to, from, next);
    if (to.meta.needsAuth) {
      console.log('Needs auth!!!');
      next();
    } else {
      next(true);
    }
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } });
    // }
  
    //! Esto seria paar bloquear la navegacion en algun sitio o momento preciso
  });
  
  router.afterEach(function (to, from) {
    console.log(to, from);
  });


  export default router;