import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderDate = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    const shortcuts = [
        { text: '今天', value: new Date() },
        {
            text: '昨天',
            value: (() => {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                return date;
            })()
        },
        {
            text: '一周前',
            value: (() => {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                return date;
            })()
        }
    ];
    const { placeholder = '选择日期', disabled = false, format = 'YYYY-MM-DD', rangeSeparator = '-' } = item;
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        placeholder,
        disabled,
        shortcuts,
        format,
        rangeSeparator,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=date.js.map