<script lang="ts">
import { defineComponent, h, onBeforeUnmount } from 'vue'
import SpeedyForm from './SpeedyForm'

export default defineComponent({
  name: 'SpeedyForm',
  setup () {
    const speedyForm = new SpeedyForm()
    onBeforeUnmount(() => {
      speedyForm.clearEvents()
    })
    return {
      speedyForm
    }
  },
  render () {
    return this.speedyForm.render(h)
  }
})
</script>

<style scoped>

</style>
