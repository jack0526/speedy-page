<template>
  <div>
    <el-button type="primary" @click="addItem">增加一条</el-button>
    <el-button type="primary" @click="removeItem">删除一条</el-button>
    <el-button type="primary" @click="clearItem">清空</el-button>
    <el-button type="primary" @click="replaceItem">全部替换</el-button>
  </div>
  <speedy-table ref="tableRef" ></speedy-table>
</template>

<script>
import { ref, onMounted } from 'vue'
import { config } from './config'
import SpeedyTable from '@/components/speedy/SpeedyTable/index.vue'

export default {
  name: 'index',
  // eslint-disable-next-line vue/no-unused-components
  components: { SpeedyTable },
  setup () {
    const tableRef = ref(null)
    const dom = tableRef.value
    const addItem = () => {
      dom.store.commit('')
    }
    const removeItem = () => {}
    const clearItem = () => {}
    const replaceItem = () => {}
    onMounted(() => {
      dom.setOptions(config.formItems)
    })

    return {
      tableRef,
      addItem,
      removeItem,
      clearItem,
      replaceItem
    }
  }
}
</script>

<style scoped>

</style>
