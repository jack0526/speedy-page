import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderDatetimerange = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        type: 'datetimerange',
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=datetimerange.js.map