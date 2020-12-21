<template>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
</template>

<script>
export default {
  setup () {}
}
</script>

<style scoped>

</style>
