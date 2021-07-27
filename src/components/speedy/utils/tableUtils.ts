import dayjs from 'dayjs'

type OptionsType = string | { name: string, label?:string, value?:string }
const DateTimeFormat = { time: 'HH:mm:ss', date: 'YYYY-MM-DD', datetime: 'YYYY-MM-DD HH:mm:ss' } as Record<string, any>
export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'
export const isDateTime = (type: string) => {
  return ['time', 'date', 'datetime'].includes(type)
}

const getFormatter = (opt: OptionsType, store: any) => {
  let name = ''
  let label = 'label'
  let value = 'value'
  if (isObject(opt)) {
    name = opt.name
    label = opt.label || label
    value = opt.value || value
  } else {
    name = opt
  }
  const options = (store[name] || []) as Record<string, any>[]
  return (row: any, column: any, cellValue: any) => {
    const temp = options.find(v => v[value] === cellValue)
    if (temp) {
      return temp[label]
    }
    return cellValue
  }
}

export const createFormatter = (item: any, store: any) => {
  if (item.formatter) { // 自己指定formatter
    return item.formatter
  } else if (item.options) { // 有options的， 没有formatter则按原来的计算
    return getFormatter(item.options, store)
  } else if (isDateTime(item.type)) {
    return (row: any, column: any, cellValue: string | number | Date | dayjs.Dayjs | undefined) => {
      return dayjs(cellValue).format(DateTimeFormat[item.type])
    }
  } else { // 对于time做单独处理
    return null
  }
}
