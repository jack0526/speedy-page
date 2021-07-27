<script lang="ts">
import { defineComponent, h, onBeforeUnmount } from 'vue'
import SpeedyTable from './SpeedyTable'
export default defineComponent({
  name: 'SpeedyTable',
  setup () {
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
    return speedyTable.render(h)
  }
})
</script>

<style scoped>
</style>
