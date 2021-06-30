import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    children: [
      {
      path: 'home',
      component: Home
      }
    ]
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  })
export default router