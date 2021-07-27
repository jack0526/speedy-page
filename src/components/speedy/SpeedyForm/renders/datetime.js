import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderDatetime = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    const { disabled = false } = item;
    const shortcuts = [{
            text: '今天',
            value: new Date()
        }, {
            text: '昨天',
            value: (() => {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
            })()
        }, {
            text: '一周前',
            value: (() => {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
            })()
        }];
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        disabled,
        shortcuts,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        type: 'datetime',
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=datetime.js.map