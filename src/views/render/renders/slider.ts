import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderSlider = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElSlider),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val)
    }
  )
}
