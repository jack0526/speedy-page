export function getStore (item: any, store: any) {
  return typeof item.options === 'string' ? (store[item.options] || []) : item.options
}
