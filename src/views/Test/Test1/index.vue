<template>
  <speedy-form ref="formRef"></speedy-form>
</template>

<script>
import { SpeedyForm } from '@/views/Form/components/SpeedyForm'
import { ref, reactive, onMounted } from 'vue'
export default {
  components: { SpeedyForm },
  setup () {
    const formRef = ref(null)
    onMounted(() => {
      console.log('formRef', formRef.value)
    })
    return {
      formRef
    }
  }
}
</script>

<style scoped>

</style>
