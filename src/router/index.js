import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import LayoutA from '@/layout/layoutA/index'

import TestRouter from '@/views/Test/router'
import Test22Router from '@/views/Test22/router'

const dynamicRoutes = [
  {
    path: '/',
    component: LayoutA,
    meta: { title: '首页' },
    children: [
      TestRouter,
      Test22Router
    ]
  }
]

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    hidden: true
  },
  {
    path: '/error',
    component: () => import('@/views/Error/index.vue')
  }
]

const routes = [
  ...dynamicRoutes,
  ...constantRoutes
]

function scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { top: 100 }
  }
}

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior
})
