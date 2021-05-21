<template>
  <el-button></el-button>
  <el-alert></el-alert>
  <el-form>
    <el-form-item></el-form-item>
  </el-form>
  <el-table>
    <el-table-column></el-table-column>
  </el-table>
  <flv-player size="small"></flv-player>
</template>

<script lang="ts">
import flvPlayer from '@/views/FlvTest/component/flvPlayer.vue'
import { defineComponent, reactive, watch, ref } from 'vue'

enum E {
  Foo,
  Bar
}

function f (x: E) {
  if (x !== E.Foo && x !== E.Bar) {
    console.log(x)
  }
}
f(3)

export default defineComponent({
  name: 'FlvTest',
  components: { flvPlayer },
  setup () {
  }
})
</script>

<style scoped>

</style>
