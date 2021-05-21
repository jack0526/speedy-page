<template>
  <slot></slot>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'SpeedyFormItem',
  props: {
    prop: { type: String as PropType<string> }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
