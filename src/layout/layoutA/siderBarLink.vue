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

export default {
  name: 'siderBarLink',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  setup () {
    const isExt = path => {
      console.log('apth', path)
      return isExternal(path)
    }
    return { isExt }
  }
}
</script>

<style scoped>

</style>
