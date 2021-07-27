<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">打开</el-button>
  </div>
  <el-dialog
    :title="title"
    v-model="dialogVisible"
    :width="dialogWidth"
    :destroy-on-close="destroyOnClose"
    @opened="openDialog"
    >
    <speedy-form ref="formRef" style="width: 100%;">
      <speedy-form-item prop="customProp">
        <el-form-item label="家住那里">
          <el-input v-model="adress"></el-input>
        </el-form-item>
      </speedy-form-item>
    </speedy-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import SpeedyForm from '@/components/speedy/SpeedyForm/index'
import SpeedyFormItem from '@/components/speedy/SpeedyForm/SpeedyFormItem'
import { ref, onMounted } from 'vue'
import { config, formItems } from './config'

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
    const dialogWidth = ref('60%')
    const destroyOnClose = ref(true)
    // ----------------------------
    const openDialog = () => {
      const { speedyForm } = formRef.value
      // elform的配置项
      speedyForm.setOptions({ config, items: formItems })
      speedyForm.setStore({
        sex: [{ label: '男', value: 1 }, { label: '女', value: 0 }],
        address: [
          { label: '南京', value: '1' },
          { label: '北京', value: '2' },
          { label: '上海', value: '3' },
          { label: '广州', value: '4' },
          { label: '遂宁', value: '5' },
          { label: '曹县', value: '5' }
        ]
      })
      speedyForm.on('sex:change', val => {
        console.log('val---', val)
      })
      speedyForm.on('sex2:change', val => {
        console.log('sex2change', val)
      })
      speedyForm.on('didian:change', val => {
        console.log('didianchange', val)
      })
      speedyForm.on('age:change', val => {
        console.log('age,change', val)
      })
      speedyForm.on('age:blur', e => {
        console.log('age, blur', e)
      })
      speedyForm.on('huakuai:change', val => {
        console.log('huakuai,change', val)
      })
      speedyForm.on('time:change', (val) => {
        console.log('time, change', val)
      })
      speedyForm.on('timerange:change', (val) => {
        console.log('timerange:change', val)
      })
      speedyForm.on('date2:change', (val) => {
        console.log('daterange:change', val)
      })
      speedyForm.on('datetimerange:change', (val) => {
        console.log('datetimerange:change', val)
      })
      speedyForm.on('pingfen:change', (val) => {
        console.log('pingfen:change', val)
      })
    }
    onMounted(() => {
    })

    const done = (err) => {
      if (err instanceof Error) {
        console.log('err', err)
      } else {
        dialogVisible.value = false
      }
    }

    const doSubmit = () => {
      // 1. 获取form
      const dom = formRef.value
      callback(dom.form, done)
    }
    const callback = (form1, done) => {
      console.log('form1', form1)
      done(new Error('错了'))
    }

    return {
      formRef,
      adress,
      title,
      dialogVisible,
      dialogWidth,
      destroyOnClose,
      openDialog,
      doSubmit
    }
  }
}
</script>

<style scoped>

</style>
