import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/user/login.vue'
import Register from './views/user/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Index,
    children: [{
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "about" */ './views/Users.vue'),
      meta: {
        requireAuth: true
      }
    }, {
      path: '/photogroup',
      name: 'photoGroup',
      component: () => import(/* webpackChunkName: "about" */ './views/photo/PhotoGroup.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/photos/:id',
      name: 'photos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/photo/Photos.vue'),
      meta: {
        requireAuth: true
      }
    }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
  ]
})
