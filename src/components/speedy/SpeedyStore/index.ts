import { reactive } from 'vue'
class SpeedyStore {
  private state = reactive({} as Record<string, any>)

  setStore (key: string, value: any) {
    this.state[key] = value
  }

  getStore (key: string) {
    return this.state[key]
  }
}

export default SpeedyStore
