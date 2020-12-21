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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import SideBarItem from './sideBarItem'
export default {
  components: { SideBarItem },
  setup () {
    const store = useStore()
    const isCollapse = computed(
      () => store.state.app.sidebarCollapse
    )
    const routes = ref([
      {
        name: 'Test',
        path: '/Test',
        meta: { title: '测试' },
        children: [
          { name: 'Test1', path: 'Test1', meta: { title: '测试1' } },
          { name: 'Test2', path: 'Test2', meta: { title: '测试2' } },
          {
            name: 'Test3',
            path: 'Test3',
            meta: { title: '测试3' },
            children: [
              { name: 'Test4', path: 'Test4', meta: { title: '测试4' } }
            ]
          }
        ]
      },
      {
        name: 'Test22',
        path: '/Test22',
        meta: { title: '测试22' },
        children: [
          { name: 'Test221', path: 'Test221', meta: { title: '测试221' } },
          { name: 'baidu', path: 'http://www.baidu.com', meta: { } }
        ]
      }
    ])
    return {
      routes,
      isCollapse
    }
  }
}
</script>

<style scoped>

</style>
