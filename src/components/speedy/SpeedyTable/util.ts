import { reactive, ref } from 'vue'
import { TableOptions, TableConfig } from './type'
import mitt, { Emitter } from 'mitt'

export default class SpeedyTable {
  private total = ref(0)
  private rows = ref([] as any[])
  private store = reactive({} as Record<string, any>)
  private tableColumns = ref([] as any[])
  private config = reactive({} as TableConfig)
  public events: Emitter = mitt()
  private eventsStore = new Map<string, any>()
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
    pageSize: 15
  }

  constructor () {
    // 初始化events
    console.log('this.', this, this.dispatchEvents)
    this.events.on('*', this.dispatchEvents.bind(this))
  }

  setOptions<opt extends TableOptions> (options: opt) {
    // 设置table配置
    this.mergeConfig(options.config || {})

    // 设备tableColumn
    this.setTableItems(options.items || [])
  }

  dispatchEvents (type: string | symbol, val: any): void {
    const eventHandler = this.eventsStore.get(type as string)
    if (eventHandler) {
      eventHandler(val)
    }
  }

  // 设置事件
  setEvents (key: string | Record<string, any>, fn: any) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(v => {
        this.eventsStore.set(v, key[v])
      })
    } else {
      this.eventsStore.set(key, fn)
    }
  }

  clearEvents () {
    this.events.all.clear()
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

  getStore (key?: string) {
    if (key) {
      return this.store[key]
    }
    return this.store
  }

  setStore (key: string, value: any) {
    this.store[key] = value
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
}
