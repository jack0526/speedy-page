import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderDatetimerange = (item, form, formEmiter) => {
    const changeEventName = `${item.prop}:change`;
    const shortcuts = [
        {
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
        }
    ];
    const { disabled = false, size = 'small', startPlaceholder = '开始时间', endPlaceholder = '结束时间' } = item;
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        shortcuts,
        disabled,
        size,
        startPlaceholder,
        endPlaceholder,
        type: 'datetimerange',
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => formEmiter.emit(changeEventName, val)
    });
};
//# sourceMappingURL=datetimerange.js.map