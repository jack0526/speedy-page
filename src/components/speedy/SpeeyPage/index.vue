<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue'
import SpeedyPage from './SpeedyPage'
import SpeedyTable from '../SpeedyTable/index.vue'
import SpeedyForm from '../SpeedyForm/index.vue'
export default defineComponent({
  name: 'SpeedyPage',
  components: { SpeedyTable, SpeedyForm },
  setup () {
    const speedyPage = new SpeedyPage()
    onBeforeUnmount(() => {
      speedyPage.clearEvents()
    })
    return {
      speedyPage
    }
  },
  render () {
    return this.speedyPage.render()
  }
})
</script>

<style scoped>

</style>
