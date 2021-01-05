<template>
  <a v-if="isExt(to)" :href="to" target="_blank">
    <slot></slot>
  </a>
  <router-link v-else :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
import { isExternal } from '../../util'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'siderBarLink',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  setup () {
    const isExt = path => {
      return isExternal(path)
    }
    return { isExt }
  }
})
</script>

<style scoped>

</style>
