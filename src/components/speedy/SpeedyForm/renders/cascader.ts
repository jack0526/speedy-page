import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'
import { getStore } from '../../utils/common-utils'

export const renderCascader = (item: any, form: any, eventStore: any, store: any) => {
  const changeEventName = `${item.prop}:change`
  const options = getStore(item, store)
  return () => h(
    resolveComponent(EnumElementForm.ElCascader),
    {
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val),
      options
    }
  )
}
