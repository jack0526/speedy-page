import { h, resolveComponent, reactive, ref } from 'vue'
const tableColumns = ref([] as Array<any>)

const initTableColumns = (columns: Array<any>) => {
  tableColumns.value = columns
}

export const setOptions = (config: any) => {
  const { items = [] } = config
  initTableColumns(items)
}

export const renderTableColumns = (items: Array<any>) => {
  return () => items.map(item => {
    return h(
      resolveComponent('ElTableColumn'),
      {
        label: item.label,
        prop: item.prop,
        width: item.width || 'auto'
      }
    )
  })
}

export function renderTable (tableData: Array<any>, tableColumns: Array<any>) {
  return h(
    resolveComponent('ElTable'),
    {
      data: tableData
    },
    renderTableColumns(tableColumns)
  )
}

export const renderPagination = (config: any) => {
  const {
    background = true,
    layout = 'total, sizes, prev, pager, next, jumper',
    total = 0,
    currentPage = 1,
    pageSizes = [100, 200, 300, 400],
    pageSize = 15,
    hideOnSinglePage = false
  } = config
  return h(
    resolveComponent('ElPagination'),
    {
      style: 'float: right',
      background,
      layout,
      total,
      currentPage,
      pageSizes,
      pageSize,
      hideOnSinglePage,
      onSizeChange: (val: any) => { console.log('sizechange--', val) },
      onCurrentChange: (val: any) => { console.log('currentchange', val) }
    }
  )
}

export const renderTableAndPagination = (tableData: Array<any>, tableColumns: Array<any>, config: any) => {
  if (config.pagination) {
    return [
      renderTable(tableData, tableColumns),
      renderPagination(config)
    ]
  }
}
