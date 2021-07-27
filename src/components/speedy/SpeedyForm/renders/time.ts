import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderTime = (item:any, form: any, eventStore: any) => {
  const changeEventName = `${item.prop}:change`
  const {
    disabled = false,
    editable = true,
    clearable = true,
    size = 'small',
    format = 'HH:mm:ss'
  } = item
  return () => h(
    resolveComponent(EnumElementForm.ElTimePicker),
    {
      disabled,
      editable,
      clearable,
      size,
      format,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }
  )
}
