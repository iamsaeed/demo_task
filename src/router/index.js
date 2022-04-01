import { createRouter, createWebHistory } from 'vue-router'
import Store from "../store";

import MainLayout from '../layouts/MainLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'

import Users from '../views/Users.vue'
import SignIn from '../views/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', component: MainLayout, children : [
        { path: '/users', name: 'users', component: Users, meta : {auth : true} }
      ]
    },
    { path: '', component: AuthLayout, children : [
        { path: '/sign-in', name: 'sign.in', component: SignIn, meta : {auth : false} }
      ]
    },
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.auth && !Store.getters.isLoggedIn) {
    return {
      path: '/sign-in',
    }
  }

  if (!to.meta.auth && Store.getters.isLoggedIn) {
    return {
      path: '',
    }
  }
})

export default router
