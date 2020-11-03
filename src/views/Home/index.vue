<template>
  <a-layout class="container">
    <a-layout-header></a-layout-header>
    <a-layout>
      <a-layout-sider></a-layout-sider>
      <a-layout-content></a-layout-content>
    </a-layout>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  setup () {
    const name = ref('xiaoming')
    const info = reactive({ name: 'xiaoming', age: 15 })
    return {
      name,
      info
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.container .ant-layout-sider {
  background-color: aqua;
}
.container .ant-layout-footer {
  background-color: cadetblue;
}
</style>
