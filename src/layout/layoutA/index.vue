<template>
  <el-container class="layout-A">
    <el-aside :width="sideBarWidth" class="transition-sidebar">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './sideBar'
import navBar from './navBar'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent(
  {
    components: { sideBar, navBar },
    setup () {
      const store = useStore()
      return {
        sideBarWidth: computed(() => store.state.app.sidebarCollapse ? '60px' : '210px')
      }
    }
  }
)
</script>

<style scoped lang="scss">
.layout-A {
  width: 100%;
  height: 100%;
  margin: 0px 0px;
  padding: 0px 0px;
  .el-header {
    padding: 0px 0px;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .transition-sidebar {
    transition: width 1s ease;
  }
}
</style>
