<template>
  <div style="color: red;font-size: 20px;">{{size}}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
type SIZE = PropType<'large' | 'small' | 'mini'>
enum SIZE2 {
  LARGE = 'large',
  SMALL = 'small',
  MINI = 'mini',
  TINY = 'tiny'
}

export default defineComponent({
  name: 'flvPlayer',
  props: {
    size: {
      type: String as PropType<SIZE2>,
      default: SIZE2.LARGE
    }
  },
  setup () {
  }
})
</script>

<style scoped>

</style>
