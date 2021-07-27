import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderDatetimerange = (item: any, form: any, eventStore: any) => {
  const changeEventName = `${item.prop}:change`
  const shortcuts = [
    {
      text: '最近一周',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      })()
    }, {
      text: '最近一个月',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      })()
    }, {
      text: '最近三个月',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      })()
    }
  ]
  const {
    disabled = false,
    size = 'small',
    startPlaceholder = '开始时间',
    endPlaceholder = '结束时间'
  } = item
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      shortcuts,
      disabled,
      size,
      startPlaceholder,
      endPlaceholder,
      type: 'datetimerange',
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }
  )
}
