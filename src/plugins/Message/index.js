// 1.引入Message对象
import Message from './src/main'

// 2. 定义 install函数，
const install = function (Vue, opts = {}) {
  console.log(Message)
  debugger
  // 将方法放到Vue原型上
  Vue.prototype.$message = Message
}

export default install
