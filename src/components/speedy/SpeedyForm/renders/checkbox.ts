import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../type'

export const renderCheckbox = (options: Array<any>) => {
  return () => options.map(option => {
    return h(
      resolveComponent(EnumElementForm.ElCheckbox),
      {
        label: option.label
      },
      () => option.value
    )
  })
}
