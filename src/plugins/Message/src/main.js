import Vue from 'vue'
import Main from './Main.vue'

const MessageConstructor = Vue.extend(Main)

let instance // 当前组件
const instances = [] // 将所有的组件收集，用于位置的判断和销毁等
let seed = 1

const Message = options => {
  options = options || {
    message: 'content' + Date.now(),
    onClose (message) {
      console.log('关闭时的回调函数, 参数为被关闭的 message 实例', message)
    }
  }

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  // 关闭时的回调函数, 参数为被关闭的 message 实例
  const userOnClose = options.onClose
  const id = 'message_' + seed++

  // 增加 onClose 方法，组件销毁时，在组件内部调用
  options.onClose = function () {
    Message.close(id, userOnClose)
  }

  // 组件实例
  instance = new MessageConstructor({
    data: options
  })
  instance.id = id // 设置ID

  // 设置组件距离顶部的距离
  let verticalOffset = options.offset || 20

  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true // 控制展示

  instance.$mount() // 因为不存在el选项，实例不会立即进入编译阶段，需要显示调用$mount 手动开启编译
  document.body.appendChild(instance.$el) // 将Message 组件插入到body中

  instance.$el.style.zIndex = 99 // 控制层级
  instances.push(instance)
  return instance
}

Message.close = (id, userOnClose) => {
  const len = instances.length
  let index = -1

  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      index = i
      // 执行初始化组件时传入的onClose回调函数, 参数为被关闭的 message 实例
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }

  if (len <= 1 || index === -1 || index >= len - 1) return

  // 每一次销毁一个有效组件时，而页面还存在超过一个的组件，需要将页面展示的组件进行位置调整
  const removedHeight = instances[index].$el.offsetHeight
  for (let i = index; i < len - 1; i++) {
    instances[i].verticalOffset = instances[i].verticalOffset - removedHeight - 16
  }
}

export default Message
