import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderSelect = (item: any, form: any, formMitter: any) => () => {
  const {
    disabled = false,
    placeholder = `请输入${item.label}`,
    clearable = true,
    multiple = false,
    collapseTags = false,
    filterable = true,
    allowCreate = false,
    defaultFirstOption = false,
    popperAppendToBody = false,
    clearIcon = 'el-icon-circle-close'
  } = item
  const changeEventName = `${item.prop}:change`
  return h(
    resolveComponent(EnumElementForm.ElSelect),
    {
      disabled,
      placeholder,
      clearable,
      multiple,
      collapseTags,
      filterable,
      allowCreate,
      defaultFirstOption,
      popperAppendToBody,
      clearIcon,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => formMitter.emit(changeEventName, val)
    },
    () => item.options.map((option: any) => {
      return h(
        resolveComponent(EnumElementForm.ElOption),
        {
          label: option.label,
          value: option.value,
          disabled: option.disabled
        }
      )
    })
  )
}
