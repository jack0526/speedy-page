export function getStore(item, store) {
    return typeof item.options === 'string' ? (store[item.options] || []) : item.options;
}
//# sourceMappingURL=common-utils.js.map