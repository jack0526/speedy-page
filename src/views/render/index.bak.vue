<script lang="ts">
import { defineComponent, h, reactive, resolveComponent, ref } from 'vue'
import { config } from '@/views/render/config'
import { FormType } from './type'
import { resolveForm, getComponents, EnumFormItemType } from '@/views/render/util'
export default defineComponent({
  name: 'SpeedyForm',
  setup (props, { slots, attrs, emit }) {
    const {
      ElInput,
      ElForm,
      ElFormItem,
      ElSelect,
      ElOption,
      ElRadioGroup,
      ElRadio,
      ElCheckboxGroup,
      ElCheckbox,
      ElInputNumber,
      ElCascader,
      ElSwitch,
      ElSlider,
      ElTimePicker,
      ElDatePicker,
      ElRate
    } = getComponents()
    // 1.定义items
    const { items } = config

    // 2. 解析出来form
    const form = ref<FormType>({})
    form.value = resolveForm(items)

    const renderText = (item: any) => () => {
      return h(
        ElInput,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => {
            form.value[item.prop] = val
          }
        }
      )
    }

    const renderSelect = (item: any) => () => {
      return h(
        ElSelect,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        },
        () => item.options.map((option: any) => {
          return h(
            ElOption,
            {
              label: option.label,
              value: option.value
            }
          )
        })
      )
    }

    const renderRadio = (options:Array<any>) => {
      return () => options.map((option: any) => {
        return h(
          ElRadio,
          {
            label: option.value
          },
          () => option.label
        )
      })
    }
    const renderRadioGroup = (item:any) => {
      return () => h(
        ElRadioGroup,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        },
        renderRadio(item.options)
      )
    }

    const renderCheckbox = (options: Array<any>) => {
      return () => options.map(option => {
        return h(
          ElCheckbox,
          {
            label: option.label
          },
          () => option.value
        )
      })
    }

    const renderCheckboxGroup = (item: any) => {
      return () => h(
        ElCheckboxGroup,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          min: item.min || 1,
          max: item.max || item.options.length
        },
        renderCheckbox(item.options)
      )
    }

    const renderInputNumber = (item: any) => {
      return () => h(
        ElInputNumber,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          min: item.min,
          max: item.max
        }
      )
    }

    const renderCascader = (item: any) => {
      return () => h(
        ElCascader,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          options: item.options
        }
      )
    }

    const renderSwitch = (item: any) => {
      return () => h(
        ElSwitch,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderSlider = (item: any) => {
      return () => h(
        ElSlider,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderTime = (item:any) => {
      return () => h(
        ElTimePicker,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderTimerange = (item:any) => {
      return () => h(
        ElTimePicker,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          isRange: true,
          rangeSeparator: '至',
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          placeholder: '选择时间范围'
        }
      )
    }

    const renderDate = (item: any) => {
      return () => h(
        ElDatePicker,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderDaterange = (item: any) => {
      return () => h(
        ElDatePicker,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          type: 'daterange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期'
        }
      )
    }

    const renderDatetime = (item:any) => {
      return () => h(
        ElDatePicker,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val),
          type: 'datetime'
        }
      )
    }

    const renderDatetimerange = (item: any) => {
      return () => h(
        ElDatePicker,
        {
          type: 'datetimerange',
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderRate = (item: any) => {
      return () => h(
        ElRate,
        {
          modelValue: form.value[item.prop],
          'onUpdate:modelValue': (val: any) => (form.value[item.prop] = val)
        }
      )
    }

    const renderItem = (item: any) => {
      if (item.type === EnumFormItemType.Text) {
        return renderText(item)
      } else if (item.type === EnumFormItemType.Select) {
        return renderSelect(item)
      } else if (item.type === EnumFormItemType.RadioGroup) {
        return renderRadioGroup(item)
      } else if (item.type === EnumFormItemType.CheckboxGroup) {
        return renderCheckboxGroup(item)
      } else if (item.type === EnumFormItemType.Number) {
        return renderInputNumber(item)
      } else if (item.type === EnumFormItemType.Cascader) {
        return renderCascader(item)
      } else if (item.type === EnumFormItemType.Switch) {
        return renderSwitch(item)
      } else if (item.type === EnumFormItemType.Slider) {
        return renderSlider(item)
      } else if (item.type === EnumFormItemType.Time) {
        return renderTime(item)
      } else if (item.type === EnumFormItemType.Timerange) {
        return renderTimerange(item)
      } else if (item.type === EnumFormItemType.Date) {
        return renderDate(item)
      } else if (item.type === EnumFormItemType.Daterange) {
        return renderDaterange(item)
      } else if (item.type === EnumFormItemType.Datetime) {
        return renderDatetime(item)
      } else if (item.type === EnumFormItemType.Datetimerange) {
        return renderDatetimerange(item)
      } else if (item.type === EnumFormItemType.Rate) {
        return renderRate(item)
      } else {
        return h('div')
      }
    }
    const renderFormItems = () => items.map(item => {
      return h(
        ElFormItem,
        { label: item.label, prop: item.prop },
        renderItem(item)
      )
    }
    )

    const renderForm = () => h(
      ElForm,
      {
        model: form.value,
        labelWidth: config.labelWidth,
        labelPosition: config.labelPosition
      },
      renderFormItems
    )
    return renderForm
  }
})
</script>

<style scoped>

</style>
