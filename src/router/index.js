import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import TestingView from '../views/TestingView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessShayna from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessShayna
  },
  {
    path: '/testingview',
    name: 'testingview',
    component: TestingView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
