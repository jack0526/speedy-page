import { h, reactive, ref, resolveComponent } from 'vue'
import { TableOptions, TableConfig } from '../types/tableTypes'
import { createFormatter } from '../utils/tableUtils'
import Speedy from '../Speedy/Speedy'

export default class SpeedyTable extends Speedy {
  private total = ref(0)
  private rows = ref([] as any[])
  private tableColumns = ref([] as any[])
  private config = reactive({} as TableConfig)
  private defaultConfig: TableConfig = {
    stripe: true,
    border: true,
    fit: true,
    showHeader: true,
    highlightCurrentRow: true,
    defaultExpandAll: false,
    tooltipEffect: 'dark',
    isPaging: true,
    currentPage: 1,
    pageSize: 15,
    columnSelection: false,
    columnExpand: false
  }

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }

  setOptions<opt extends TableOptions> (options: opt) {
    // 设置table配置
    this.mergeConfig(options.config || {})

    // 设备tableColumn
    this.setTableItems(options.items || [])
  }

  mergeConfig (config: TableConfig) {
    Object.keys(this.defaultConfig).forEach(key => this.setConfig(key, this.defaultConfig[key]))
    Object.keys(config).forEach(key => this.setConfig(key, config[key]))
  }

  setTotal (val: number) {
    this.total.value = val
    this.config.total = val
  }

  getTotal (): number {
    return this.total.value
  }

  setRows (arr: any[]):void {
    this.rows.value = arr
  }

  getRows () {
    return this.config.isPaging
      ? this.rows.value.slice(0, this.config.pageSize)
      : this.rows.value
  }

  getConfig (key?: string) {
    if (key) {
      return this.config[key]
    }
    return this.config
  }

  setConfig (key: string, value: any) {
    this.config[key] = value
  }

  setTableItems (items: any[]) {
    this.tableColumns.value = items
  }

  getTableColumns () {
    return this.tableColumns.value
  }

  render (h : any) {
    return h(
      'div',
      {
        style: { height: '100%' }
      },
      this.renderTableAndPagination()
    )
  }

  renderTableAndPagination () {
    if (this.config.isPaging) {
      return [
        this.renderTable(),
        this.renderPagination()
      ]
    } else {
      return this.renderTable()
    }
  }

  renderTable () {
    const headerCellClassName = 'speedy-table-cell'
    return h(
      resolveComponent('ElTable'),
      {
        data: this.getRows(),
        border: this.config.border,
        stripe: this.config.stripe,
        size: this.config.size,
        fit: this.config.fit,
        showHeader: this.config.showHeader,
        height: '95%',
        headerCellClassName,
        highlightCurrentRow: this.config.highlightCurrentRow,
        defaultExpandAll: this.config.defaultExpandAll,
        tooltipEffect: this.config.tooltipEffect,
        onRowClick: (...val: any) => this.events.emit('rowClick', val)
      },
      () => this.renderTableColumns()
    )
  }

  renderTableColumns () {
    const renderSpecial = [
      h(resolveComponent('ElTableColumn'), { type: 'index', width: 50 })
    ]
    this.config.columnSelection && renderSpecial.push(h(resolveComponent('ElTableColumn'), { type: 'selection', width: 50 }))
    this.config.columnExpand && renderSpecial.push(h(resolveComponent('ElTableColumn'), { type: 'expand', width: 50 }))
    const normal = this.tableColumns.value.map(item => {
      const formatter = createFormatter(item, this.store)
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
    return [...renderSpecial, ...normal]
  }

  renderPagination () {
    const {
      background = true,
      layout = 'total, sizes, prev, pager, next, jumper',
      total = 0,
      currentPage = 1,
      pageSizes = [15],
      pageSize = 15,
      hideOnSinglePage = false
    } = this.config
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
        onSizeChange: (val: any) => this.events.emit('sizeChange', val),
        onCurrentChange: (val: any) => this.events.emit('currentChange', val)
      }
    )
  }
}
