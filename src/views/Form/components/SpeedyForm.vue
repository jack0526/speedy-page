<template>
  <el-form :model="form" v-loading="loading">
    <el-row v-for="(item, index) in formItems" :key="index">
      <el-col :span="item.span">
        <el-form-item :label="item.label" :prop="item.prop" v-if="!item.slots">
          <component :is="item.component" v-bind="item.attrs" v-model="item.prop"></component>
        </el-form-item>
        <template v-else>
          {{slots[item.slots]()}}
        </template>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, createSlots, toRefs } from 'vue'
import { FormOptions, Items } from './form'

export default defineComponent({
  name: 'SpeedyForm',
  setup (props, ctx) {
    const { slots } = toRefs(ctx)
    console.log('slots', slots)
    const form = ref({})
    const formItems = ref([] as Items)
    const loading = ref(false)
    const loaded = (val: boolean) => {
      loading.value = val
    }
    const setOptions = (options : FormOptions):void => {
      // 1. 根据item组成model
      const { items } = options
      // 1. 获取model
      initForm(items)
      // 2. 初始化items
      initFormItems(items)
    }
    const initForm = (items : Items): void => {
      const obj = items.reduce((result, val) => {
        const { prop, defaultValue } = val
        return { ...result, [prop as string]: defaultValue }
      }, {})
      form.value = obj
    }

    const initFormItems = (items: Items):void => {
      formItems.value = items.map(v => {
        return { ...v, component: getComponentByType(v.type) }
      })
    }
    const getComponentByType = (type: string) => {
      const TYPES = [
        { label: 'text', value: 'ElInput' },
        { label: 'textarea', value: 'ElInputNumber' }
      ]
      const temp = TYPES.find(v => v.label === type) || { value: null }
      return temp.value
    }
    return {
      form,
      loading,
      setOptions,
      loaded,
      formItems,
      slots
    }
  }
})
</script>

<style scoped>

</style>
