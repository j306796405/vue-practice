<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div
      class="el-message"
      :style="positionStyle"
      v-show="visible">
      <slot>
        <p>{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      visible: true,
      message: '',
      duration: 3000,
      onClose: null,
      closed: false,
      verticalOffset: 20,
      timer: null
    }
  },

  computed: {
    positionStyle () { // 控制当前组件的显示位置
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },

  watch: {
    // 监听closed的变化，设置为true时，将组件销毁
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },

  methods: {
    // transtion组件的钩子，触发after-leave时执行
    handleAfterLeave () {
      this.$destroy(true) // 销毁组件
      this.$el.parentNode.removeChild(this.$el) // 将组件的DOM移除
    },

    close () {
      this.closed = true // 组件隐藏

      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    // 每次手动启动编译之后 设置其展示时间duration之后关闭
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  },
  mounted () {
    this.startTimer()
  }
}
</script>

<style>
  .el-message{
    min-width: 280px;
    height: 42px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s,top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
  }
</style>
