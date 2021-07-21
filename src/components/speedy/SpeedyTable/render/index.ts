import { h, resolveComponent, reactive, ref } from 'vue'
import { TableConfig } from '../type'
import { createFormatter } from '../utils2'

export const renderTableColumns = (items: Array<any>, store: any) => () => {
  const renderIndex = h(resolveComponent('ElTableColumn'), { type: 'index', width: 50 })
  const normal = items.map(item => {
    const formatter = createFormatter(item, store)
    return h(
      resolveComponent('ElTableColumn'),
      {
        label: item.label,
        prop: item.prop,
        width: item.width || 'auto',
        align: item.align || 'center',
        formatter
      }
    )
  })
  return [renderIndex, ...normal]
}

export function renderTable (
  tableData: Array<any>,
  tableColumns: Array<any>,
  config: TableConfig,
  events: any,
  store: any
) {
  const headerCellClassName = 'speedy-table-cell'
  return h(
    resolveComponent('ElTable'),
    {
      data: tableData,
      border: config.border,
      stripe: config.stripe,
      size: config.size,
      fit: config.fit,
      showHeader: config.showHeader,
      height: '95%',
      headerCellClassName,
      highlightCurrentRow: config.highlightCurrentRow,
      defaultExpandAll: config.defaultExpandAll,
      tooltipEffect: config.tooltipEffect,
      onRowClick: (...val: any) => events.emit('rowClick', val)
    },
    renderTableColumns(tableColumns, store)
  )
}

export const renderPagination = (config: any, events: any) => {
  const {
    background = true,
    layout = 'total, sizes, prev, pager, next, jumper',
    total = 0,
    currentPage = 1,
    pageSizes = [15],
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
      onSizeChange: (val: any) => events.emit('sizeChange', val),
      onCurrentChange: (val: any) => events.emit('currentChange', val)
    }
  )
}

export const renderTableAndPagination = (
  tableData: Array<any>,
  tableColumns: Array<any>,
  config: TableConfig,
  events: any,
  store: any
) => {
  if (config.isPaging) {
    return [
      renderTable(tableData, tableColumns, config, events, store),
      renderPagination(config, events)
    ]
  } else {
    return renderTable(tableData, tableColumns, config, events, store)
  }
}
