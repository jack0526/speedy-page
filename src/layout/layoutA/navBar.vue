<template>
  <div class="nav-bar-container">
    <div class="side-bar-fiexed" @click="toggleSideBar">
      <i :class="iconClass"></i>
    </div>
    <nav-breadcrumb class="nav-bread"></nav-breadcrumb>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, defineComponent, ref } from 'vue'
import navBreadcrumb from './navBreadcrumb'
export default defineComponent(
  {
    name: 'navBar',
    components: { navBreadcrumb },
    setup () {
      const store = useStore()
      const toggleSideBar = () => {
        store.dispatch('app/toggleSidebar')
      }
      const iconClass = computed(() => store.state.app.sidebarCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold')

      return {
        iconClass,
        toggleSideBar
      }
    }
  }
)
</script>

<style scoped lang="scss">
.nav-bar-container {
  width: 100%;
  height: 100%;
  background: #afa89b;
  position: relative;
  box-sizing: border-box;
}
.side-bar-fiexed {
  float: left;
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #20a0ff;
  }
}
.nav-bread {
  float: left;
  height: 100%;
  width: 80%;
}
</style>
