import { TableOptions } from '../types/tableTypes'
import { formInterface } from '../types/formTypes'
import { Buttons, Size } from '../types/commonTypes'
export interface PageConfig extends Record<string, any>{
  size?: Size
}
export interface PageOptions extends Record<string, any>{
  config?: PageConfig,
  items?: any[],
  table?: TableOptions,
  form?: formInterface,
  buttons?: Buttons
}
