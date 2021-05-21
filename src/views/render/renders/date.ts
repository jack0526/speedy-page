import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderDate = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val)
    }
  )
}
