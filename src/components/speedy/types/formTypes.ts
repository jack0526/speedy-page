export type FormType = Record<string, any>

export type FormItems = Array<any>
export interface FormConfig extends Record<string, any> {
  labelWidth?: string | number;
  labelPosition?: string;
  rules?: FormType,
  disabled?: boolean,
  size?: string
}
export interface formInterface extends Record<string, any>{
  config?: FormConfig,
  items?: FormItems
}

// 用作渲染items
export enum EnumFormItemType {
  Text = 'text',
  Select = 'select',
  RadioGroup = 'radioGroup',
  CheckboxGroup = 'checkboxGroup',
  Number = 'number',
  Cascader = 'cascader',
  Switch = 'switch',
  Slider = 'slider',
  Time = 'time',
  Date = 'date',
  Datetime = 'datetime',
  Timerange = 'timerange',
  Daterange = 'daterange',
  Datetimerange = 'datetimerange',
  Rate = 'rate',
  Custom = 'custom'
}

export enum EnumElementForm {
  ElForm= 'ElForm',
  ElFormItem = 'ElFormItem',
  ElInput = 'ElInput',
  ElSelect = 'ElSelect',
  ElOption = 'ElOption',
  ElRadioGroup = 'ElRadioGroup',
  ElRadio = 'ElRadio',
  ElRadioButton = 'ElRadioButton',
  ElCheckbox = 'ElCheckbox',
  ElCheckboxGroup = 'ElCheckboxGroup',
  ElInputNumber = 'ElInputNumber',
  ElCascader = 'ElCascader',
  ElSwitch = 'ElSwitch',
  ElSlider = 'ElSlider',
  ElTimePicker = 'ElTimePicker',
  ElDatePicker = 'ElDatePicker',
  ElRate = 'ElRate',
  ElRow = 'ElRow',
  ElCol = 'ElCol'
}
