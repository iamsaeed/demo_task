import { createRouter, createWebHistory } from 'vue-router'
import Store from "../store";

import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import Users from '../views/Users.vue'
import SignIn from '../views/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/users', component: MainLayout, children : [
        { path: '', name: 'users', component: Users, meta : {auth : true} }
      ]
    },
    { path: '/', component: AuthLayout, children : [
        { path: '', name: 'sign.in', component: SignIn, meta : {auth : false} }
      ]
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.auth && !Store.getters.isLoggedIn) {
    return {
      path: '/',
    }
  }

  if (!to.meta.auth && Store.getters.isLoggedIn) {
    return {
      path: '/users',
    }
  }
})

export default router
