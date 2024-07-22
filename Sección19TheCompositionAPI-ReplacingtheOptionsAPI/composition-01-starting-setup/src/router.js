import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from './pages/ProductsPage.vue';
import HomePage from './pages/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/products', component: ProductsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
