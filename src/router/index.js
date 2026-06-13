import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
  { path: '/live/:id', name: 'live-room', component: () => import('../pages/LiveRoom.vue') },
  { path: '/wallet', name: 'wallet', component: () => import('../pages/Wallet.vue') },
  { path: '/ranking', name: 'ranking', component: () => import('../pages/Ranking.vue') },
  { path: '/profile/:id', name: 'profile', component: () => import('../pages/Profile.vue') },
  { path: '/login', name: 'login', component: () => import('../pages/Login.vue') },
  { path: '/register', name: 'register', component: () => import('../pages/Register.vue') },
  { path: '/user', name: 'user-center', component: () => import('../pages/UserCenter.vue') },
  { path: '/settings', name: 'settings', component: () => import('../pages/Settings.vue') },
  { path: '/settings/about', name: 'about', component: () => import('../pages/About.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFound.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
