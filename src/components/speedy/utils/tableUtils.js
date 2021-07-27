import dayjs from 'dayjs';
const DateTimeFormat = { time: 'HH:mm:ss', date: 'YYYY-MM-DD', datetime: 'YYYY-MM-DD HH:mm:ss' };
export const isObject = (val) => val !== null && typeof val === 'object';
export const isDateTime = (type) => {
    return ['time', 'date', 'datetime'].includes(type);
};
const getFormatter = (opt, store) => {
    let name = '';
    let label = 'label';
    let value = 'value';
    if (isObject(opt)) {
        name = opt.name;
        label = opt.label || label;
        value = opt.value || value;
    }
    else {
        name = opt;
    }
    const options = (store[name] || []);
    return (row, column, cellValue) => {
        const temp = options.find(v => v[value] === cellValue);
        if (temp) {
            return temp[label];
        }
        return cellValue;
    };
};
export const createFormatter = (item, store) => {
    if (item.formatter) { // 自己指定formatter
        return item.formatter;
    }
    else if (item.options) { // 有options的， 没有formatter则按原来的计算
        return getFormatter(item.options, store);
    }
    else if (isDateTime(item.type)) {
        return (row, column, cellValue) => {
            return dayjs(cellValue).format(DateTimeFormat[item.type]);
        };
    }
    else { // 对于time做单独处理
        return null;
    }
};
//# sourceMappingURL=tableUtils.js.map