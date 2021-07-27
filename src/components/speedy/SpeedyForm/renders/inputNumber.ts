import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderInputNumber = (item: any, form: any, eventStore: any) => {
  const changeEventName = `${item.prop}:change`
  const blurEventName = `${item.prop}:blur`
  const {
    step = 1,
    stepStrictly = false,
    precision = undefined,
    size = 'small',
    disabled = false,
    controls = true,
    controlsPosition = 'right',
    name = '',
    label = '',
    placeholder = `请输入${item.label}`
  } = item
  return () => h(
    resolveComponent(EnumElementForm.ElInputNumber),
    {
      step,
      stepStrictly,
      precision,
      size,
      disabled,
      controls,
      controlsPosition,
      name,
      label,
      placeholder,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      min: item.min,
      max: item.max,
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val),
      onBlur: (event:Event) => eventStore.get(blurEventName) && eventStore.get(blurEventName)(event)
    }
  )
}
