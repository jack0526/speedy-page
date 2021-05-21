<template>
  <speedy-form ref="formRef">
    <speedy-form-item prop="customProp">
      <el-form-item label="家住那里">
        <el-input v-model="adress"></el-input>
      </el-form-item>
    </speedy-form-item>
  </speedy-form>
</template>

<script>
import SpeedyForm from '@/views/render/index.vue'
import SpeedyFormItem from '@/views/render/SpeedyFormItem'
import { ref, onMounted } from 'vue'
import { config } from '@/views/render/config'

export default {
  name: 'index',
  // eslint-disable-next-line vue/no-unused-components
  components: { SpeedyForm, SpeedyFormItem },
  setup () {
    const formRef = ref(null)
    const adress = ref('')
    onMounted(() => {
      console.log('formRef', formRef.value)
      const dom = formRef.value
      // elform的配置项
      dom.setOptions(config)
      dom.formMitter.on('sex:change', val => {
        console.log('val---', val)
      })
    })
    return {
      formRef,
      adress
    }
  }
}
</script>

<style scoped>

</style>
