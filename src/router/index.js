import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout/index.vue'

const routes = [
  
  {
    path: '/',
    title: '首页',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/index.vue')
      },
      {
        path: 'jiaren',
        name: 'jiaren',
        component: () => import('@/views/jiaren/index.vue')
      },
      {
        path: 'jiaren/pdf',
        name: 'pdf',
        component: () => import('@/views/jiaren/pdf.vue')
      },
      {
        path: 'shizhan',
        name: 'shizhan',
        component: () => import('@/views/shizhan/index.vue')
      },
      {
        path: 'shizhan/detail',
        name: 'shizhanDetail',
        component: () => import('@/views/shizhan/detail.vue')
      },
      {
        path: 'shizhan/detail/:name',
        name: 'shizhanDetailInner',
        component: () => import('@/views/shizhan/detailInner.vue')
      }
    ]
  },
  
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/404.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})