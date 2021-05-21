import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderSelect = (item, form) => () => {
    return h(resolveComponent(EnumElementForm.ElSelect), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    }, () => item.options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElOption), {
            label: option.label,
            value: option.value
        });
    }));
};
//# sourceMappingURL=select.js.map