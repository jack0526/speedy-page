<template>
  <div>
    <el-button type="primary" @click="addItem">添加属性</el-button>
    <el-button type="primary" @click="addItem2">添加属性2</el-button>
  </div>
  <el-form :model="form">
    <el-form-item v-for="item in items" :key="item.prop" :prop="item.prop" :label="item.label">
      <el-input v-model="form[item.prop]" ></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'

export default defineComponent({
  name: 'FlvTest',
  setup () {
    const form = reactive({ names: ['1'] } as Record<string, any>)
    const items = ref([] as Array<any>)
    const addItem = () => {
      const prop = 'p' + Date.now()
      const label = 'name' + Date.now()
      form[prop] = ''
      items.value.push({ label, prop })
    }
    const addItem2 = () => {
      form.names.push('2')
    }
    watch(form, (val) => {
      console.log('form', form)
    })
    return {
      form,
      addItem,
      addItem2,
      items
    }
  }
})
</script>

<style scoped>

</style>
