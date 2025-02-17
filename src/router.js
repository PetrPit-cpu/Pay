import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import SecondPage from '@/components/SecondPage.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/second', component: SecondPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;