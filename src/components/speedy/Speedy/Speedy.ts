import mitt, { Emitter } from 'mitt'
import { reactive, ref, getCurrentInstance, resolveComponent, h } from 'vue'
export default class Speedy {
  public isInPage: boolean = false
  public events: Emitter = mitt()
  public store = reactive({} as Record<string, any>)
  public eventsStore = new Map<string, any>()
  public slots: any
  public emit: any

  constructor () {
    this.slots = getCurrentInstance()?.slots
    this.emit = getCurrentInstance()?.emit
    this.events.on('*', this.dispatchEvents.bind(this))
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

  // 设置事件
  on (key: string | Record<string, any>, fn: any) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(v => {
        this.eventsStore.set(v, key[v])
      })
    } else {
      this.eventsStore.set(key, fn)
    }
  }

  setInPage (val: boolean) {
    this.isInPage = val
  }

  getInPage () {
    return this.isInPage
  }

  clearEvents () {
    if (this.isInPage) return
    this.eventsStore.clear()
    this.events.all.clear()
  }

  setStore (key: string | Record<string, any[]>, value: any) {
    if (typeof key === 'object') {
      Object.keys(key).forEach(v => {
        this.store[v] = key[v]
      })
    } else {
      this.store[key] = value
    }
  }

  getStore (key?: string) {
    if (key) {
      return this.store[key] || []
    }
    return this.store
  }

  // 此处为了复用page中的store,通过传值，达到引用调用,在setOptions中使用
  reuseStore (store: { [x: string]: any }) {
    this.store = store
  }

  // 复用eventsStore
  reuseEventsStore (eventsStore: Map<string, any>) {
    this.eventsStore = eventsStore
  }
}
