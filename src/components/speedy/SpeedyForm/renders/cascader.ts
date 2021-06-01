import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderCascader = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElCascader),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      options: item.options
    }
  )
}
