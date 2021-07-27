<template>
  <speedy-table ref="tableRef"></speedy-table>
</template>

<script>
import { ref, onMounted } from 'vue'
import { config } from './config2'
import SpeedyTable from '@/components/speedy/SpeedyTable/index.vue'
import { getList } from '@/api/mock'
export default {
  name: 'index',
  components: { SpeedyTable },
  setup () {
    const tableRef = ref(null)
    onMounted(async () => {
      const { speedyTable } = tableRef.value
      speedyTable.setOptions(config)
      speedyTable.setStore('isMarried', [
        { label: '已婚', value: true },
        { label: '未婚', value: false }
      ])
      speedyTable.setStore('sex', [
        { label: '男', value: 0 },
        { label: '女', value: 1 }
      ])
      const rows = await getList()
      speedyTable.setRows(rows)
      speedyTable.setTotal(rows.length)
      speedyTable.setEvents({
        rowClick: (val) => {
          console.log('val', val)
        },
        currentChange: (val) => {
          const pageSize = speedyTable.getConfig('pageSize')
          speedyTable.setRows(rows.slice((val - 1) * pageSize, val * pageSize))
        }
      })
      setTimeout(() => {
        speedyTable.setStore('sex', [
          { label: '男男', value: 0 },
          { label: '女女', value: 1 }
        ])
      }, 6000)
    })

    return {
      tableRef
    }
  }
}
</script>

<style scoped>

</style>
