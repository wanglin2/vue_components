# Rate 评分组件

<template>
  <div class="container">
      <Rate v-model="rate" :max="5"></Rate>
  </div>
</template>

```vue
<template>
  <div class="container">
    <Rate v-model="rate" :max="5"></Rate>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rate: 1
    }
  }
}
</script>

<style lang="less" scoped></style>
```

<script>
export default {
  data () {
    return {
      rate: 1
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 200px
}
</style>
