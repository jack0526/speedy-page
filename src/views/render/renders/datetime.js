import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderDatetime = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElDatePicker), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        type: 'datetime'
    });
};
//# sourceMappingURL=datetime.js.map