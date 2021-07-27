import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderText = (item: any, form: any, eventStore: any) => () => {
  const {
    disabled = false,
    clearable = true,
    placeholder = `请输入${item.label}`,
    showPassword = false,
    suffixIcon = '',
    prefixIcon = '',
    size = 'small'
  } = item
  const changeEventName = `${item.prop}:change`
  return h(
    resolveComponent(EnumElementForm.ElInput),
    {
      disabled,
      clearable,
      placeholder,
      showPassword,
      suffixIcon,
      prefixIcon,
      size,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => {
        form[item.prop] = val
      },
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }
  )
}
