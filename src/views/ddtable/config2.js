export const config = {
  config: {
    isPaging: true
  },
  items: [
    { label: '姓名', prop: 'name', type: 'text' },
    { label: '年龄', prop: 'age', type: 'number' },
    { label: '是否已婚', prop: 'married', type: 'select', options: 'isMarried' },
    { label: '生日', prop: 'birth', type: 'date' },
    { label: '地址', prop: 'address', type: 'text' },
    { label: '邮箱', prop: 'email', type: 'text' },
    { label: '标题', prop: 'title', type: 'text' },
    // { label: '片段', prop: 'paragraph', type: 'text' },
    { label: '性别', prop: 'sex', type: 'select', options: 'sex' }
  ]
}
