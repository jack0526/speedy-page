import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderDaterange = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      type: 'daterange',
      rangeSeparator: '至',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期'
    }
  )
}
