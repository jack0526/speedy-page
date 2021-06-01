import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderDatetime = (item:any, form: any, formEmiter: any) => {
  const changeEventName = `${item.prop}:change`
  const { disabled = false } = item
  const shortcuts = [{
    text: '今天',
    value: new Date()
  }, {
    text: '昨天',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    })()
  }, {
    text: '一周前',
    value: (() => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    })()
  }]
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      disabled,
      shortcuts,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      type: 'datetime',
      onChange: (val: any) => formEmiter.emit(changeEventName, val)
    }
  )
}
