import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderTimerange = (item:any, form: any, formEmiter: any) => {
  const changeEventName = `${item.prop}:change`
  const {
    disabled = false,
    editable = true,
    clearable = true,
    size = 'small',
    rangeSeparator = '至',
    startPlaceholder = '开始时间',
    endPlaceholder = '开始时间',
    placeholder = '选择时间范围'
  } = item
  return () => h(
    resolveComponent(EnumElementForm.ElTimePicker),
    {
      disabled,
      editable,
      clearable,
      size,
      rangeSeparator,
      startPlaceholder,
      endPlaceholder,
      placeholder,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      isRange: true,
      onChange: (val: any) => formEmiter.emit(changeEventName, val)
    }
  )
}
