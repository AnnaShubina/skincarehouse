import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Catalogue from '../pages/Catalogue'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: Catalogue
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
