import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderDatetimerange = (item: any, form: any) => {
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      type: 'datetimerange',
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val)
    }
  )
}
