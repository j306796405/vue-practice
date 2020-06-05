// 1.引入Message对象
import Message from './message.js'

// 2. 定义 install函数，
const install = function (Vue, opts = {}) {
  // 将方法放到Vue原型上
  Vue.prototype.$message = Message
}

export default {
  install
}
