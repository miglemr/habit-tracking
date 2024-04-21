import { createRouter, createWebHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import HabitsView from '../views/HabitsView.vue';
import ErrorView from '../views/ErrorView.vue'
import { isDateValid } from '../components/Calendar/dates.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/day/:date',
      name: 'day',
      component: MainView,
      beforeEnter: (to, from, next) => {
        if (isDateValid(to.params.date)) {
          next();
        } else {
          next({ name: 'dayError' });
        }
      }
    },
    {
      path: '/habits',
      name: 'habits',
      component: HabitsView
    },
    {
      path: '/day/:catchAll(.*)*',
      name: 'dayError',
      component: ErrorView
    },
    {
      path: '/:catchAll(.*)',
      name: 'error',
      component: ErrorView
    },
  ]
});

export default router;
