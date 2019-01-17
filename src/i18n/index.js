import Vue from 'vue'
import zh from 'vee-validate/dist/locale/zh_CN'

// add translations directly to the application
Vue.i18n.add('br', require('./pt_br.json'))
Vue.i18n.add('zh_cn', Object.assign(require('./en.json'), zh))
Vue.i18n.add('es', require('./es.json'))
// set the start locale to use
Vue.i18n.set('zh_cn')

// set fallback for non-translated strings
Vue.i18n.fallback('zh_CN')
