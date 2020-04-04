import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
const Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/bar', component: Bar }
  ]
})
