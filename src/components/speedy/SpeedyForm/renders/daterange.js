import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderDaterange = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    const { rangeSeparator = '至', startPlaceholder = '开始日期', endPlaceholder = '结束日期' } = item;
    const shortcuts = [{
            text: '最近一周',
            value: (() => {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
            })()
        }, {
            text: '最近一个月',
            value: (() => {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
            })()
        }, {
            text: '最近三个月',
            value: (() => {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
            })()
        }];
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        rangeSeparator,
        startPlaceholder,
        endPlaceholder,
        shortcuts,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        type: 'daterange',
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=daterange.js.map