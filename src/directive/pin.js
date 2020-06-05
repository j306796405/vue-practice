import Vue from 'vue'

Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    const s = (binding.arg.direction === 'left' ? 'left' : 'top')
    el.style[s] = binding.value.distance + 'px'
  }
})
