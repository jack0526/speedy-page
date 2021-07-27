import { h, resolveComponent } from 'vue'
import { EnumElementForm } from '../../types/formTypes'

export const renderCheckbox = (options: Array<any>) => {
  return () => options.map(option => {
    return h(
      resolveComponent(EnumElementForm.ElCheckbox),
      {
        label: option.value
      },
      () => option.label
    )
  })
}
