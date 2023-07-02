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
        path: 'jiaren/detail/:type', /* type: pdf | richText */
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
      },
      {
        path: 'quan',
        name: 'quan',
        component: () => import('@/views/quan/index.vue')
      },
      {
        path: 'quan/list',
        name: 'quanList',
        component: () => import('@/views/quan/list.vue')
      },
      {
        path: 'zhongxin',
        name: 'zhongxin',
        component: () => import('@/views/zhongxin/index.vue')
      },
      {
        path: 'zhongxin/list',
        name: 'zhongxinList',
        component: () => import('@/views/zhongxin/list.vue')
      },
      {
        path: 'pinpai',
        name: 'pinpai',
        component: () => import('@/views/pinpai/index.vue')
      },
      {
        path: 'pinpai/list',
        name: 'pinpaiList',
        component: () => import('@/views/pinpai/list.vue')
      },
      {
        path: 'wojia',
        name: 'wojia',
        component: () => import('@/views/wojia/index.vue')
      },
      {
        path: 'wojia/list',
        name: 'wojiaList',
        component: () => import('@/views/wojia/list.vue')
      },
      {
        path: 'renda',
        name: 'renda',
        component: () => import('@/views/renda/index.vue')
      },
      {
        path: 'renda/list',
        name: 'rendaList',
        component: () => import('@/views/renda/list.vue')
      },
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