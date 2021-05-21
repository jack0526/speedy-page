<template>
    <div>
      <el-button @click="invoke1" type="primary">点击1</el-button>
      <el-button @click="invoke2" type="danger">点击2</el-button>
    </div>
    <div>{{text1}}</div>
    <div>{{text2}}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import mitt, { Emitter } from 'mitt'
export default defineComponent({
  name: 'ceshibutton',
  setup () {
    const emit1: Emitter = mitt()
    const emit2: Emitter = mitt()
    const text1 = ref('')
    const text2 = ref('')
    emit1.on('random-click', (val) => {
      text1.value = val
    })
    emit2.on('random-click', (val) => {
      text2.value = val
    })
    const invoke1 = () => {
      emit1.emit('random-click', Math.random().toString())
    }
    const invoke2 = () => {
      emit2.emit('random-click', Math.random().toString())
    }
    return {
      text1,
      text2,
      invoke1,
      invoke2
    }
  }
})
</script>

<style scoped>

</style>
