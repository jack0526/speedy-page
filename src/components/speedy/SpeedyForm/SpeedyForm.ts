import { FormType, formInterface, FormItems, EnumFormItemType, FormConfig } from '../types/formTypes'
import { reactive, ref, resolveComponent, h } from 'vue'
import { resolveForm, resolveFormItems, renderSpecifyItem } from '../utils/formUtils'
import Speedy from '../Speedy/Speedy'
export default class SpeedyForm extends Speedy {
  // 是否在page中使用
  public isInPage: boolean = false
  private form = ref({} as FormType)
  private formItems = ref([] as FormItems)
  private formLayout = ref([] as Array<any>)
  private config = reactive({
    labelWidth: '120px',
    labelPosition: 'right',
    size: 'small',
    disabled: false
  } as FormConfig)

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  setForm (formItems:Array<any>) {
    this.form.value = resolveForm(formItems)
  }

  setFormItems (items: Array<any>) {
    const slotArr = this.slots.default?.() || []
    this.formItems.value = resolveFormItems(items, slotArr)
  }

  setFormAttrs (options: any) {
    options.labelWidth && (this.config.labelWidth = options.labelWidth)
    options.labelPosition && (this.config.labelPosition = options.labelPosition)
    options.size && (this.config.size = options.size)
    options.disabled && (this.config.disabled = options.disabled)
  }

  setFormLayout (options: any) {
    this.formLayout.value = options.layout || []
  }

  setOptions (options: formInterface) {
    // 1. 处理form
    this.setForm(options.items || [])
    // 2. 处理formItems
    this.setFormItems(options.items || [])
    // 3. form的其他选项
    this.setFormAttrs(options.config)
    // 4. 设置formLayout
    this.setFormLayout(options.config)
  }

  render (h: any) {
    return h(
      resolveComponent('ElForm'),
      {
        model: this.form,
        labelWidth: this.config.labelWidth as any,
        labelPosition: this.config.labelPosition
      },
      () => this.renderFormItems()
    )
  }

  renderFormItems () {
    const slots = this.slots
    if (this.formLayout.value && this.formLayout.value.length) {
      return this.renderFormLayout(this.formLayout.value)
    } else {
      return h(
        resolveComponent('ElRow'),
        {},
        () => this.formItems.value.map(item => {
          return h(
            resolveComponent('ElCol'),
            { span: item.span || 24 },
            () => {
              if (item.type === EnumFormItemType.Custom) {
                return slots.default?.()
              } else {
                return h(
                  resolveComponent('ElFormItem'),
                  { label: item.label, prop: item.prop },
                  renderSpecifyItem(item, this.form.value, this.eventsStore, this.store)
                )
              }
            }
          )
        }
        )
      )
    }
  }

  renderFormLayout (layout:Array<any>):Array<any> {
    return this.formLayout.value.map(l => {
      if (l.type === 'row') {
        return h(
          resolveComponent('ElRow'),
          {
            gutter: l.gutter || 0
          },
          this.renderFormLayout(l.children || [])
        )
      } else if ((l.type === 'col') && l.prop) {
        const temp = this.formItems.value.find(item => item.prop === l.prop)
        if (temp) {
          if (temp.slot) {
            return h(
              resolveComponent('ElCol'),
              {
                span: l.span || temp.span || 24
              },
              temp.slot
            )
          } else {
            return h(
              resolveComponent('ElCol'),
              {
                span: l.span || temp.span || 24
              },
              this.renderFormItem(temp)
            )
          }
        } else { // 没有对应的prop会当成null处理
          return null
        }
      } else if ((l.type === 'col') && l.children && l.children.length) {
        return h(
          resolveComponent('ElCol'),
          {
            span: l.span || 24
          },
          this.renderFormLayout(l.children)
        )
      } else {
        return null
      }
    })
  }

  renderFormItem (item: any) {
    return h(
      resolveComponent('ElFormItem'),
      {
        label: item.label,
        prop: item.prop
      },
      renderSpecifyItem(item, this.form.value, this.events, this.store)
    )
  }
}
