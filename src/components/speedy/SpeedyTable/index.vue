<script lang="ts">
import { defineComponent, ref, reactive, resolveComponent, h, computed } from 'vue'
import { renderTable, renderTableAndPagination } from './render/index'
import { getStore, setStore } from './store'

export default defineComponent({
  name: 'SpeedyTable',
  setup (props, { slots }) {
    const rows = ref([] as Array<any>)
    const total = ref(0)
    const tableColumns = ref([] as Array<any>)
    const setTableItems = (items: Array<any>) => {
      // 执行filter
      tableColumns.value = items
    }
    const setOptions = (items: Array<any>) => {
      // 1. setTableItems()
      setTableItems(items)
    }
    return {
      rows,
      tableColumns,
      total,
      setOptions,
      setStore,
      getStore
    }
  },
  render () {
    const { rows, tableColumns } = this
    return h(
      'div',
      {},
      renderTableAndPagination(rows, tableColumns, { pagination: true })
    )
  }
})
</script>

<style scoped>

</style>
