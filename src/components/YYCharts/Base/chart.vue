<template>
  <div :id="id"></div>
</template>

<script lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { defineComponent, ref, watch, computed, PropType } from 'vue'
// echarts
import * as echarts from 'echarts/core'

export default defineComponent({
  name: 'YYChart',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup (props, ctx) {
    const id = ref(0)
    id.value = uuidv4()
    const dom = document.getElementById(id)
    const instance = echarts.init(id)
    return {
      id
    }
  }
})
</script>

<style scoped>

</style>
