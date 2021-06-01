<template>
  <el-dialog
    :title="title"
    v-model="dialogVisible"
    :width="dialogWidth"
    >
    <speedy-form ref="formRef">
      <speedy-form-item prop="customProp">
        <el-form-item label="家住那里">
          <el-input v-model="adress"></el-input>
        </el-form-item>
      </speedy-form-item>
    </speedy-form>
    <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </template>
  </el-dialog>
</template>

<script>
import SpeedyForm from '@/components/speedy/SpeedyForm/index'
import SpeedyFormItem from '@/components/speedy/SpeedyForm/SpeedyFormItem'
import { ref, onMounted } from 'vue'
import { config } from './config'

export default {
  name: 'index',
  // eslint-disable-next-line vue/no-unused-components
  components: { SpeedyForm, SpeedyFormItem },
  setup () {
    const formRef = ref(null)
    const adress = ref('')
    // ---------------------------
    const title = ref('创建表单')
    const dialogVisible = ref(false)
    const dialogWidth = ref('30%')
    onMounted(() => {
      const dom = formRef.value
      // elform的配置项
      dom.setOptions(config)
      dom.formMitter.on('sex:change', val => {
        console.log('val---', val)
      })
      dom.formMitter.on('sex2:change', val => {
        console.log('sex2change', val)
      })
      dom.formMitter.on('didian:change', val => {
        console.log('didianchange', val)
      })
      dom.formMitter.on('age:change', val => {
        console.log('age,change', val)
      })
      dom.formMitter.on('age:blur', e => {
        console.log('age, blur', e)
      })
      dom.formMitter.on('huakuai:change', val => {
        console.log('huakuai,change', val)
      })
      dom.formMitter.on('time:change', (val) => {
        console.log('time, change', val)
      })
      dom.formMitter.on('timerange:change', (val) => {
        console.log('timerange:change', val)
      })
      dom.formMitter.on('date2:change', (val) => {
        console.log('daterange:change', val)
      })
      dom.formMitter.on('datetimerange:change', (val) => {
        console.log('datetimerange:change', val)
      })
      dom.formMitter.on('pingfen:change', (val) => {
        console.log('pingfen:change', val)
      })
    })
    return {
      formRef,
      adress,
      title,
      dialogVisible,
      dialogWidth
    }
  }
}
</script>

<style scoped>

</style>
