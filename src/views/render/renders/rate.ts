import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderRate = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElRate),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val)
    }
  )
}
