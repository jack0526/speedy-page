import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderDate = (item: any, form: any, formEmiter: any) => {
  const changeEventName = `${item.prop}:change`
  const shortcuts = [
    { text: '今天', value: new Date() },
    {
      text: '昨天',
      value: (() => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        return date
      })()
    },
    {
      text: '一周前',
      value: (() => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        return date
      })()
    }
  ]
  const {
    placeholder = '选择日期',
    disabled = false,
    format = 'YYYY-MM-DD',
    rangeSeparator = '-'
  } = item
  return () => h(
    resolveComponent(EnumElementForm.ElDatePicker),
    {
      placeholder,
      disabled,
      shortcuts,
      format,
      rangeSeparator,
      modelValue: form[item.prop],
      'onUpdate:modelValue': (val: any) => (form[item.prop] = val),
      onChange: (val: any) => formEmiter.emit(changeEventName, val)
    }
  )
}
