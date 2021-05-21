import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderInputNumber = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElInputNumber), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        min: item.min,
        max: item.max
    });
};
//# sourceMappingURL=inputNumber.js.map