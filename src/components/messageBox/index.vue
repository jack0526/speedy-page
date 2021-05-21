<template>
  <div class="message-container">
    <div class="message-icon"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
type Position = PropType<'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'>
export default defineComponent({
  name: 'MessageBox',
  props: {
    backgroundColor: {
      type: String,
      default: '#ffbbcc'
    },
    position: {
      type: String as Position
    }
  },
  setup (props, ctx) {
  }
})
</script>

<style scoped lang="scss">
.message-container {
  min-width: 30px;
  min-height: 30px;
  position: relative;
}
</style>
