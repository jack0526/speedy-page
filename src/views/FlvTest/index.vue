<template>
  <el-button @click="doClick" type="primary">触发事件</el-button>
  <el-button @click="offEmit" type="danger">销毁事件</el-button>
</template>

<script>
import { ref, onMounted, watch, reactive, isReadonly } from 'vue'
import mitt from 'mitt'
export default {
  setup () {
    const mitt1 = mitt()
    const hander1 = () => {
      console.log('hello1')
    }
    const hander2 = () => {
      console.log('hello2')
    }
    mitt1.on('*', (type, e) => {
      console.log('type', type, e)
    })
    console.log('mit.all', mitt1.all)
    const doClick = () => {
      console.log('all--', mitt1.all.get('hello'))
      mitt1.emit('hello', 'myargs')
    }
    const offEmit = () => {
      mitt1.all.clear()
    }
    return {
      doClick,
      offEmit
    }
  }
}

</script>

<style scoped>

</style>
