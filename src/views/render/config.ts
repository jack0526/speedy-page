import { treeData } from './data'

export const formItems = [
  { label: '姓名', prop: 'name', type: 'text', defaultValue: '' },
  { label: '家住哪里', prop: 'customProp', type: 'custom' },
  {
    label: '性别',
    prop: 'sex',
    type: 'select',
    options: [{ label: '男', value: 1 }, { label: '女', value: 0 }],
    defaultValue: null
  },
  {
    label: '性别2',
    prop: 'sex2',
    type: 'radioGroup',
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 0 }
    ],
    defaultValue: null
  },
  {
    label: '地点',
    prop: 'didian',
    type: 'checkboxGroup',
    defaultValue: [],
    options: [
      { label: '南京', value: '1' },
      { label: '北京', value: '2' },
      { label: '上海', value: '3' },
      { label: '广州', value: '4' },
      { label: '遂宁', value: '5' },
      { label: '曹县', value: '5' }
    ]
  },
  {
    label: '年龄',
    prop: 'age',
    type: 'number',
    defaultValue: 0
  },
  {
    label: '地方名称',
    prop: 'addressName',
    type: 'cascader',
    defaultValue: [],
    options: treeData
  },
  {
    label: '开关',
    prop: 'kaiguan',
    type: 'switch',
    defaultValue: false
  },
  {
    label: '滑块',
    prop: 'huakuai',
    type: 'slider',
    defaultValue: 50
  },
  {
    label: '时间点',
    prop: 'time',
    type: 'time',
    defaultValue: ''
  },
  {
    label: '时间点范围',
    prop: 'timerange',
    type: 'timerange',
    defaultValue: []
  },
  {
    label: '日期',
    prop: 'date',
    type: 'date',
    defaultValue: ''
  },
  {
    label: '日期范围',
    prop: 'date2',
    type: 'daterange',
    defaultValue: ''
  },
  {
    label: '日期时间',
    prop: 'datetime',
    type: 'datetime',
    defaultValue: ''
  },
  {
    label: '日期时间范围',
    prop: 'datetimerange',
    type: 'datetimerange',
    defaultValue: ''
  },
  {
    label: '评分',
    prop: 'pingfen',
    type: 'rate',
    defaultValue: 0
  }
]
export const layout = [
  {
    type: 'row',
    children: [
      {
        type: 'col',
        span: 18,
        children: [
          {
            type: 'row',
            children: [
              { type: 'col', span: 24, prop: 'name' }
            ]
          },
          {
            type: 'row',
            children: [
              { type: 'col', span: 24, prop: 'sex' }
            ]
          },
          {
            type: 'row',
            children: [
              { type: 'col', span: 24, prop: 'sex2' }
            ]
          }
        ]
      },
      { type: 'col', span: 6, prop: 'time' },
      { type: 'col', prop: 'customProp' }
    ]
  }
]

export const config = {
  labelWidth: '120px',
  labelPosition: 'right',
  formItems
}
