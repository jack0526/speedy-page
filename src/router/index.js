import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const BaseHomeLayout = () => import('../views/Home/baseLayout.vue')
const User = () => import('../views/user/index.vue')

const routes = [{
  name: 'home',
  path: '/home',
  component: Home
}, {
  name: 'BaseHomeLayout',
  path: '/BaseHomeLayout',
  component: BaseHomeLayout,
  redirect: '/BaseHomeLayout/user',
  children: [{
    name: 'user',
    path: 'user',
    component: User
  }]
}]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
