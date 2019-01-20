import Confirm from './model'
import Vue from 'vue'
// 参数配置
const defaults = {
  show: false,
  title: '',
  text: '',
  button: []
}

let loading
const ConfirmConstructor = Vue.extend(Confirm)
const confirmBox = (options = {}) => {
  if (Vue.prototype.$isServer) {
    return
  }
  options = Object.assign({}, defaults, options)
  let parent = document.body
  // 没有关闭不允许新开
  if (loading) {
    return loading
  }
  let instance = new ConfirmConstructor({
    el: document.createElement('div'),
    data: options,
    methods: {
      afterClose () {
        loading = null
      }
    }
  })

  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.show = true
  })
  loading = instance
  return instance
}

export default confirmBox
