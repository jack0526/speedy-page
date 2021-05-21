import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderDate = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=date.js.map