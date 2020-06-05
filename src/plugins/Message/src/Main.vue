<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div class="el-message"
         :style="positionStyle"
         v-show="visible"
    >
      <slot>
        <p>{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      onClose: null,
      closed: false,
      verticalOffset: 20,
      timer: null
    }
  },
  computed: {
    positionStyle () {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    handleAfterLeave () {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true

      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    startTimer () {
      if (this.duration > 0) {
        setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  }
}
</script>

<style scoped>
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
