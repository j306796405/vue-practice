<template>
    <div>
      <div v-for="(item) in itemArr" :key="item.name">
        当前层级值： {{item.name}} <br/>
        <!-- 递归调用自身, 后台判断是否不存在改值 -->
        <tree :itemArr="item.children" v-if="item.children"></tree>
      </div>
    </div>
</template>

<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: 'tree',
  data () {
    return {}
  },
  // 接收外部传入的值
  props: {
    itemArr: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
