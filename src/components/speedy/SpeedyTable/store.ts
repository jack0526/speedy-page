import { reactive } from 'vue'

const store = reactive({} as Record<string, any>)

export const setStore = (key: string, value: any) => {
  store[key] = value
}

export const getStore = (key: string) => {
  return store[key]
}
