<template>
  <el-menu
    mode="vertical"
    :collapse="isCollapse"
    >
    <side-bar-item
      v-for="route in routes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
      >
    </side-bar-item>
  </el-menu>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import { useStore } from 'vuex'
import SideBarItem from './sideBarItem'
export default defineComponent({
  components: { SideBarItem },
  setup () {
    const store = useStore()
    const isCollapse = computed(
      () => store.state.app.sidebarCollapse
    )
    const routes = useRouter().options.routes
    return {
      routes,
      isCollapse
    }
  }
})
</script>

<style scoped>

</style>
