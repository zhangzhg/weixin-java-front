import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import ZH_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {
  fieldsBagName: 'formFields',
  message: ZH_CN.messages
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  if (to.path === '/auth/login') {
    sessionStorage.removeItem('user')
  }

  let obj = sessionStorage.getItem('user')
  let user
  if (obj !== 'undefined' && obj) {
    user = JSON.parse(obj)
  }
  if (!user && to.path !== '/auth/login' && to.path !== '/auth/signup') {
    next({ path: '/auth/login' })
  } else {
    if (to.path === '/') {
      next({ path: '/admin/dashboard' })
    }
    next()
  }
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
