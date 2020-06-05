<template functional>
  <div>
    Hello, <span @click="props.alert">{{ props.name }}</span>
    <slot name="sex"/>
  </div>

</template>

<script>
export default {
  name: 'functional',
  props: {
    name: String,
    alert: Function
  }
}
</script>

<style scoped>

</style>
