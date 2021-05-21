import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'
import { renderCheckbox } from '@/views/render/renders/checkbox'

export const renderCheckboxGroup = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElCheckboxGroup),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      min: item.min || 1,
      max: item.max || item.options.length
    },
    renderCheckbox(item.options)
  )
}
