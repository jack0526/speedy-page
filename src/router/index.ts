import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import LayoutA from '@/layout/layoutA/index.vue'

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
  },
  {
    path: '/ceshi/button',
    component: () => import('@/views/componentsTest/button.vue'),
    meta: { title: '测试button' }
  },
  {
    path: '/flvtest',
    component: () => import('@/views/FlvTest/index.vue'),
    meta: { title: 'flvtest' }
  },
  {
    path: '/form',
    component: () => import('@/views/Form/index.vue'),
    meta: { title: 'Form' }
  },
  {
    path: '/render',
    component: () => import('@/views/render/index.vue'),
    meta: { title: 'render' }
  },
  {
    path: '/ddmo',
    component: () => import('@/views/ddmo/index.vue'),
    meta: {
      title: 'ddmo'
    }
  },
  {
    path: '/ddtable',
    component: () => import('@/views/ddtable/index.vue'),
    meta: { title: 'table' }
  }
]

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    hidden: true,
    meta: { title: '登录' }
  },
  {
    path: '/error',
    component: () => import('@/views/Error/index.vue'),
    hidden: true,
    meta: { title: '错误页面' }
  }
]

const routes = [
  ...dynamicRoutes,
  ...constantRoutes
]

function scrollBehavior (to: any, from: any, savedPosition: any) {
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
