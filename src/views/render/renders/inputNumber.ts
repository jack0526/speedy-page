import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderInputNumber = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElInputNumber),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      min: item.min,
      max: item.max
    }
  )
}
