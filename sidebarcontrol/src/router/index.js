import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "@/components/Layout/AppHeader.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children:[{
      path: 'home',
      name: 'Home',
      component: Home
    },{
      path: 'about',
      name: 'About',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
