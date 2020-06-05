const mixin = {
  created () {
    this.dealTime()
  },
  methods: {
    dealTime () {
      console.log('这是mixin的dealTime里面的方法')
    }
  }
}

export default mixin
