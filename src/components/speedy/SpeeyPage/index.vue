<template>
  <div style="height: 100%;">
    <speedy-table ref="tableRef"></speedy-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SpeedyTableUtil from './SpeedyPageUtil'
import SpeedyTable from '../SpeedyTable/index.vue'
import SpeedyForm from '../SpeedyForm/index.vue'
export default defineComponent({
  name: 'SpeedyPage',
  components: { SpeedyTable, SpeedyForm },
  setup () {
    const tableRef = ref(null)
    const page = new SpeedyTableUtil()
    return {
      page,
      tableRef
    }
  }
})
</script>

<style scoped>

</style>
