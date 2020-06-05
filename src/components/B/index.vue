<template>
  <div>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mutations } from '../../views/Home/store'

export default {
  name: 'B',
  data: function () {
    return ({ count: 0 })
  },
  methods: {
    increment: function () {
      mutations.setCount(++this.count)
    }
  }
}
</script>

<style scoped>

</style>
