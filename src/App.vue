<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  emits: [],
  directives: {},
  props: {},
  setup (props, ctx) {
    return {}
  }
})
</script>

<style lang="scss">
html,body {
  padding: 0px;
  margin: 0px
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
