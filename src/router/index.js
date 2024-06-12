import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import TaskForm from '../components/TaskForm.vue';
import UserLogin from '../components/UserLogin.vue';
import UserSignup from '../components/UserSignup.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/signup',
    name: 'UserSignup',
    component: UserSignup
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/taskform',
    name: 'TaskForm',
    component: TaskForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
