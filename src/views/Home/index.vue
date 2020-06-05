<template>
  <div id="Home">

  </div>
</template>

<script>
import { store } from './store'

export default {
  name: 'Home',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        id: 123,
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: {
        value: '选项4',
        label: '龙须面'
      }
    }
  },
  mounted () {
    this.$message({
      message: '这是一条message消息11111',
      duration: 1000,
      onClose: () => {
        console.log('callback')
      }
    })
    this.$message({
      message: '这是一条message消息222222',
      duration: 2000,
      onClose: () => {
        console.log('callback')
      }
    })
    this.$message({
      message: '这是一条message消息3333333',
      duration: 3000,
      onClose: () => {
        console.log('callback')
      }
    })
  },
  computed: {
    count () {
      return store.count
    }
  },
  methods: {
    handleError (e) {

    }
  }
}
</script>
