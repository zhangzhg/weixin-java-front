import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../views/admin/AppLayout'
import AuthLayout from '../views/auth/AuthLayout'
import lazyLoading from './lazyLoading'

Vue.use(Router)

const demoRoutes = []
if (process.env.NODE_ENV === 'development') {
  const VueBook = require('vue-book').default

  demoRoutes.push(
    VueBook(require.context('./..', true, /.demo.vue$/), '/demo'),
    VueBook(require.context('./../views', true, /.vue$/), '/presentation'),
  )
}

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const router = new Router({
  routes: [
    ...demoRoutes,
    {
      path: '*',
    },
    {
      path: '/sys',
      component: AppLayout,
      name: '系统管理',
      children: [
        {
          name: '用户管理',
          path: 'user-list',
          component: lazyLoading('user/UserList'),
        },
        {
          name: '用户编辑',
          path: 'user-form',
          component: lazyLoading('user/form/UserForm'),
        },
        {
          name: '菜单编辑',
          path: 'menu-list',
          component: lazyLoading('menu/MenuList'),
        },
        {
          name: '权限编辑',
          path: 'role-list',
          component: lazyLoading('role/RoleList'),
        }
      ],
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: lazyLoading('auth/login/Login'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: lazyLoading('auth/signup/Signup'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSearch')
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundSimple')
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundCustom')
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: lazyLoading('pages/404-pages/VuesticPageNotFoundLargeText')
        }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'dashboard',
          path: 'dashboard',
          component: lazyLoading('dashboard/Dashboard'),
          default: true,
        }
      ],
    },
  ],
})

export default router
