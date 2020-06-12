import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Order from '../views/Order.vue'
import HeyMenu from '../views/HeyMenu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/menu',
    name: 'menu-route',
    component: Menu
  },
  {
    path: '/order',
    name: 'order-route',
    component: Order
  },
  {
    path: '/heymenu',
    name: 'hey-menu-route',
    component: HeyMenu
  }
]

const router = new VueRouter({
  routes
})

export default router
