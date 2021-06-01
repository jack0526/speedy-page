import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'
import { renderRadio, renderRadioButton } from '@/views/render/renders/radio'

export const renderRadioGroup = (item:any, form: any, formMitter: any) => {
  const changeEventName = `${item.prop}:change`
  const { disabled = false, size = 'small', optionType } = item
  const renderOption = optionType === 'button' ? renderRadio : renderRadioButton
  return () => h(
    resolveComponent(EnumElementForm.ElRadioGroup),
    {
      disabled,
      size,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => formMitter.emit(changeEventName, val)
    },
    renderOption(item.options)
  )
}
