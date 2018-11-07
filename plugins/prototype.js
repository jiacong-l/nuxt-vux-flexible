import Vue from 'vue'
import service from '../http/index.js' //axios请求
/**
 * 插件挂载到Vue原型链上全局通用
 * 用法
 * this.$XX.XX
 */
const mountPrototype = {
  install(Vue) {
    Vue.prototype.$http = service
  }
}

Vue.use(mountPrototype)
