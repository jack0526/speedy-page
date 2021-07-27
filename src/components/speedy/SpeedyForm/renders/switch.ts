import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderSwitch = (item: any, form: any, eventStore: any) => {
  const changeEventName = `${item.prop}:change`
  return () => h(
    resolveComponent(EnumElementForm.ElSwitch),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }
  )
}
