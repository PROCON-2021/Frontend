import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Measurement from '../views/Measurement.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/measurement',
    name: 'measurement',
    component: Measurement
  },
  {
    path: '/history',
    name: 'history',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
