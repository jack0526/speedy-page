export const config = {
  config: {},
  items: [
    { label: '姓名', prop: 'name', type: 'text', defaultValue: '', span: 12 },
    { label: '家住哪里', prop: 'customProp', type: 'custom', span: 12 },
    {
      label: '性别',
      prop: 'sex',
      type: 'select',
      options: 'sex',
      defaultValue: null,
      span: 12
    },
    {
      label: '性别2',
      prop: 'sex2',
      type: 'radioGroup',
      options: 'sex',
      defaultValue: null,
      span: 12
    },
    {
      label: '地点',
      prop: 'didian',
      type: 'checkboxGroup',
      defaultValue: [],
      options: 'address',
      span: 12
    },
    {
      label: '年龄',
      prop: 'age',
      type: 'number',
      defaultValue: 0,
      span: 12
    },
    {
      label: '地方名称',
      prop: 'addressName',
      type: 'cascader',
      defaultValue: [],
      options: 'addressName',
      span: 12
    },
    {
      label: '开关',
      prop: 'kaiguan',
      type: 'switch',
      defaultValue: false,
      span: 12
    },
    {
      label: '滑块',
      prop: 'huakuai',
      type: 'slider',
      defaultValue: 50,
      span: 12
    },
    {
      label: '时间点',
      prop: 'time',
      type: 'time',
      defaultValue: '',
      span: 12
    },
    {
      label: '时间点范围',
      prop: 'timerange',
      type: 'timerange',
      defaultValue: [],
      span: 12
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date',
      defaultValue: '',
      span: 12
    },
    {
      label: '日期范围',
      prop: 'date2',
      type: 'daterange',
      defaultValue: '',
      span: 12
    },
    {
      label: '日期时间',
      prop: 'datetime',
      type: 'datetime',
      defaultValue: '',
      span: 12
    },
    {
      label: '日期时间范围',
      prop: 'datetimerange',
      type: 'datetimerange',
      defaultValue: '',
      span: 12
    },
    {
      label: '评分',
      prop: 'pingfen',
      type: 'rate',
      defaultValue: 0,
      span: 12
    }
  ],
  form: {
    config: {
      labelWidth: '120px',
      labelPosition: 'right'
    },
    items: [
      'name',
      'sex',
      'sex2',
      'didian',
      'age',
      'addressName',
      'kaiguan',
      'huakuai',
      'time',
      'timerange',
      'date',
      'daterange',
      'datetime',
      'pingfen'
    ]
  },
  table: {
    config: {
      isPaging: true,
      columnExpand: true,
      columnSelection: true
    },
    items: [
      'name',
      'sex',
      'sex2',
      'didian',
      'age',
      'addressName',
      'kaiguan',
      'huakuai',
      'time',
      'timerange',
      'date',
      'daterange',
      'datetime',
      'pingfen'
    ]
  },
  buttons: ['create', 'update', 'delete']
}

export const treeData = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
          value: 'yizhi',
          label: '一致'
        }, {
          value: 'fankui',
          label: '反馈'
        }, {
          value: 'xiaolv',
          label: '效率'
        }, {
          value: 'kekong',
          label: '可控'
        }]
      },
      {
        value: 'daohang',
        label: '导航',
        children: [{
          value: 'cexiangdaohang',
          label: '侧向导航'
        }, {
          value: 'dingbudaohang',
          label: '顶部导航'
        }]
      }]
  },
  {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout 布局'
      }, {
        value: 'color',
        label: 'Color 色彩'
      }, {
        value: 'typography',
        label: 'Typography 字体'
      }, {
        value: 'icon',
        label: 'Icon 图标'
      }, {
        value: 'button',
        label: 'Button 按钮'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio 单选框'
      }, {
        value: 'checkbox',
        label: 'Checkbox 多选框'
      }, {
        value: 'input',
        label: 'Input 输入框'
      }, {
        value: 'input-number',
        label: 'InputNumber 计数器'
      }, {
        value: 'select',
        label: 'Select 选择器'
      }, {
        value: 'cascader',
        label: 'Cascader 级联选择器'
      }, {
        value: 'switch',
        label: 'Switch 开关'
      }, {
        value: 'slider',
        label: 'Slider 滑块'
      }, {
        value: 'time-picker',
        label: 'TimePicker 时间选择器'
      }, {
        value: 'date-picker',
        label: 'DatePicker 日期选择器'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker 日期时间选择器'
      }, {
        value: 'upload',
        label: 'Upload 上传'
      }, {
        value: 'rate',
        label: 'Rate 评分'
      }, {
        value: 'form',
        label: 'Form 表单'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table 表格'
      }, {
        value: 'tag',
        label: 'Tag 标签'
      }, {
        value: 'progress',
        label: 'Progress 进度条'
      }, {
        value: 'tree',
        label: 'Tree 树形控件'
      }, {
        value: 'pagination',
        label: 'Pagination 分页'
      }, {
        value: 'badge',
        label: 'Badge 标记'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert 警告'
      }, {
        value: 'loading',
        label: 'Loading 加载'
      }, {
        value: 'message',
        label: 'Message 消息提示'
      }, {
        value: 'message-box',
        label: 'MessageBox 弹框'
      }, {
        value: 'notification',
        label: 'Notification 通知'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu 导航菜单'
      }, {
        value: 'tabs',
        label: 'Tabs 标签页'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb 面包屑'
      }, {
        value: 'dropdown',
        label: 'Dropdown 下拉菜单'
      }, {
        value: 'steps',
        label: 'Steps 步骤条'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog 对话框'
      }, {
        value: 'tooltip',
        label: 'Tooltip 文字提示'
      }, {
        value: 'popover',
        label: 'Popover 弹出框'
      }, {
        value: 'card',
        label: 'Card 卡片'
      }, {
        value: 'carousel',
        label: 'Carousel 走马灯'
      }, {
        value: 'collapse',
        label: 'Collapse 折叠面板'
      }]
    }]
  },
  {
    value: 'ziyuan',
    label: '资源',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'jiaohu',
      label: '组件交互文档'
    }]
  }
]
