<script lang="ts">
import { defineComponent, h, reactive, ref, toRefs, onBeforeUnmount } from 'vue'
import { config } from '@/views/render/config'
import { FormType, formInterface, FormItems, EnumFormItemType } from './type'
import { resolveForm, getComponents, resolveFormItems, renderSpecifyItem } from './util'
import mitt, { Emitter } from 'mitt'

export default defineComponent({
  name: 'SpeedyForm',
  setup (props, { slots, attrs, emit }) {
    const formMitter: Emitter = mitt()
    const formRef = ref(null)
    const form = ref({} as FormType)
    const formItems = ref([] as FormItems)
    const formLayout = ref([] as Array<any>)
    const formConfig = reactive({
      labelWidth: 'auto',
      labelPosition: 'right',
      size: 'small',
      disabled: false
    })

    const setForm = (formItems:Array<any>) => {
      form.value = resolveForm(formItems)
    }

    const setFormItems = (items: Array<any>) => {
      const slotArr = slots.default?.() || []
      formItems.value = resolveFormItems(items, slotArr)
    }

    const setFormAttrs = (options: any) => {
      formConfig.labelWidth = options.labelWidth || formConfig.labelWidth
      formConfig.labelPosition = options.labelPosition || formConfig.labelPosition
      formConfig.size = options.size || formConfig.size
      formConfig.disabled = options.disabled || formConfig.disabled
    }

    const setFormLayout = (options: any) => {
      formLayout.value = options.layout || []
    }

    const setOptions = (options: formInterface) => {
      // 1. 处理form
      setForm(options.formItems || [])
      // 2. 处理formItems
      setFormItems(options.formItems || [])
      // 3. form的其他选项
      setFormAttrs(options)
      // 4. 设置formLayout
      setFormLayout(options)
    }

    onBeforeUnmount(() => {
      formMitter && formMitter.off && formMitter.off('*', () => {})
    })

    return {
      formRef,
      form,
      formItems,
      formLayout,
      formMitter,
      setOptions,
      ...toRefs(formConfig)
    }
  },
  render () {
    const {
      ElForm,
      ElFormItem,
      ElRow,
      ElCol
    } = getComponents()
    const { form, formItems, $slots, formLayout, formMitter } = this

    const renderFormItem = (item: any) => h(
      ElFormItem,
      {
        label: item.label,
        prop: item.prop
      },
      renderSpecifyItem(item, form, formMitter)
    )

    const renderFormLayout = (layout:Array<any>): Array<any> => {
      return layout.map(l => {
        if (l.type === 'row') {
          return h(
            ElRow,
            {
              gutter: l.gutter || 0
            },
            renderFormLayout(l.children || [])
          )
        } else if ((l.type === 'col') && l.prop) {
          const temp = formItems.find(item => item.prop === l.prop)
          if (temp) {
            if (temp.slot) {
              return h(
                ElCol,
                {
                  span: l.span || temp.span || 24
                },
                temp.slot
              )
            } else {
              return h(
                ElCol,
                {
                  span: l.span || temp.span || 24
                },
                renderFormItem(temp)
              )
            }
          } else { // 没有对应的prop会当成null处理
            return null
          }
        } else if ((l.type === 'col') && l.children && l.children.length) {
          return h(
            ElCol,
            {
              span: l.span || 24
            },
            renderFormLayout(l.children)
          )
        } else {
          return null
        }
      })
    }

    const renderFormItems = () => {
      if (formLayout && formLayout.length) {
        return renderFormLayout(formLayout)
      } else {
        return h(
          ElRow,
          {},
          () => formItems.map(item => {
            return h(
              ElCol,
              { span: item.span || 24 },
              () => {
                if (item.type === EnumFormItemType.Custom) {
                  return $slots.default?.()
                } else {
                  return h(
                    ElFormItem,
                    { label: item.label, prop: item.prop },
                    renderSpecifyItem(item, form, formMitter)
                  )
                }
              }
            )
          }
          )
        )
      }
    }
    return h(
      ElForm,
      {
        model: form,
        labelWidth: config.labelWidth,
        labelPosition: config.labelPosition
      },
      renderFormItems
    )
  }
})
</script>

<style scoped>

</style>
