import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderRadio = (options:Array<any>) => {
  return () => options.map((option: any) => {
    return h(
      resolveComponent(EnumElementForm.ElRadio),
      {
        label: option.value
      },
      () => option.label
    )
  })
}

export const renderRadioButton = (options:Array<any>) => {
  return () => options.map((option: any) => {
    return h(
      resolveComponent(EnumElementForm.ElRadioButton),
      {
        label: option.value
      },
      () => option.label
    )
  })
}
