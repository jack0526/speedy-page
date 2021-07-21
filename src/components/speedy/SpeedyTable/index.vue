<script lang="ts">
import { defineComponent, h, onBeforeUnmount } from 'vue'
import { renderTableAndPagination } from './render/index'
import SpeedyTable from './util'
// const speedyTable = new SpeedyTable()
// 不能在此处实例化，不然每个引用该组件的地方都是调用的同一个实例
export default defineComponent({
  name: 'SpeedyTable',
  setup (props, { slots }) {
    const speedyTable = new SpeedyTable()
    onBeforeUnmount(() => {
      speedyTable.clearEvents()
    })
    return {
      speedyTable
    }
  },
  render () {
    const { speedyTable } = this
    const rows = speedyTable.getRows()
    const tableColumn = speedyTable.getTableColumns()
    const config = speedyTable.getConfig()
    const events = speedyTable.events
    const store = speedyTable.getStore()
    return h(
      'div',
      {
        style: { height: '100%' }
      },
      renderTableAndPagination(rows, tableColumn, config, events, store)
    )
  }
})
</script>

<style scoped>
</style>
