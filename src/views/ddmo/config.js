export const formItems = [
    { label: '姓名', prop: 'name', type: 'text', defaultValue: '', span: 12 }
    // { label: '家住哪里', prop: 'customProp', type: 'custom', span: 12 },
    // {
    //   label: '性别',
    //   prop: 'sex',
    //   type: 'select',
    //   options: 'sex',
    //   defaultValue: null,
    //   span: 12
    // },
    // {
    //   label: '性别2',
    //   prop: 'sex2',
    //   type: 'radioGroup',
    //   options: 'sex',
    //   defaultValue: null,
    //   span: 12
    // },
    // {
    //   label: '地点',
    //   prop: 'didian',
    //   type: 'checkboxGroup',
    //   defaultValue: [],
    //   options: 'address',
    //   span: 12
    // },
    // {
    //   label: '年龄',
    //   prop: 'age',
    //   type: 'number',
    //   defaultValue: 0,
    //   span: 12
    // },
    // {
    //   label: '地方名称',
    //   prop: 'addressName',
    //   type: 'cascader',
    //   defaultValue: [],
    //   options: treeData,
    //   span: 12
    // },
    // {
    //   label: '开关',
    //   prop: 'kaiguan',
    //   type: 'switch',
    //   defaultValue: false,
    //   span: 12
    // },
    // {
    //   label: '滑块',
    //   prop: 'huakuai',
    //   type: 'slider',
    //   defaultValue: 50,
    //   span: 12
    // },
    // {
    //   label: '时间点',
    //   prop: 'time',
    //   type: 'time',
    //   defaultValue: '',
    //   span: 12
    // },
    // {
    //   label: '时间点范围',
    //   prop: 'timerange',
    //   type: 'timerange',
    //   defaultValue: [],
    //   span: 12
    // },
    // {
    //   label: '日期',
    //   prop: 'date',
    //   type: 'date',
    //   defaultValue: '',
    //   span: 12
    // },
    // {
    //   label: '日期范围',
    //   prop: 'date2',
    //   type: 'daterange',
    //   defaultValue: '',
    //   span: 12
    // },
    // {
    //   label: '日期时间',
    //   prop: 'datetime',
    //   type: 'datetime',
    //   defaultValue: '',
    //   span: 12
    // },
    // {
    //   label: '日期时间范围',
    //   prop: 'datetimerange',
    //   type: 'datetimerange',
    //   defaultValue: '',
    //   span: 12
    // },
    // {
    //   label: '评分',
    //   prop: 'pingfen',
    //   type: 'rate',
    //   defaultValue: 0,
    //   span: 12
    // }
];
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
];
export const config = {
    labelWidth: '120px',
    labelPosition: 'right'
};
//# sourceMappingURL=config.js.map