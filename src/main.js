import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './eventBus'
import './components/index'
import mixin from './mixin'
import TestPlugin from './plugins/testPlugin'
import './directive/pin'
import Message from './plugins/Message'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$log = console.log

Vue.use(TestPlugin, { someOption: true })
// Vue.use(ElementUI)
Vue.use(Message)

Vue.config.errorHandler = function (err, vm, info) {
  console.log(err, vm, info)
}

new Vue({
  mixins: [mixin],
  router,
  store,
  render: h => h(App)
}).$mount('#app')
