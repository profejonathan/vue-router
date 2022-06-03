import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
]

const router = new VueRouter({
  routes
})

export default router
