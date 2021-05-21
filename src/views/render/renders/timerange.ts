import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderTimerange = (item:any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElTimePicker),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      isRange: true,
      rangeSeparator: '至',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      placeholder: '选择时间范围'
    }
  )
}
