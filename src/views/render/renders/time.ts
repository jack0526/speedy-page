import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderTime = (item:any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElTimePicker),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val)
    }
  )
}
