<template>
  <speedy-form ref="formRef">
    <template #nameSlot>
      <el-form-item label="姓名">
        <el-input-number v-model="aa"></el-input-number>
      </el-form-item>
    </template>
  </speedy-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue'
import SpeedyForm from './components/SpeedyForm.vue'
import { Nullable } from './components/form'
export default defineComponent({
  name: 'FormTest',
  components: { SpeedyForm },
  setup () {
    const aa = ref(0)
    const formRef = ref(null)
    onMounted(() => {
      const dom = formRef.value as Nullable<typeof SpeedyForm>
      console.log('dome', dom)
      if (dom) {
        dom.setOptions({
          items: [
            {
              label: '姓名',
              value: 'name',
              type: 'text',
              attrs: {
                clearable: true,
                showPassword: true
              },
              slots: 'nameSlot'
            },
            {
              label: '描述',
              value: 'desc',
              type: 'text',
              attrs: { type: 'textarea', rows: 2, placeholder: '请输入一些' }
            }
          ]
        })
      }
    })
    return {
      formRef,
      aa
    }
  }
})
</script>

<style scoped>

</style>
