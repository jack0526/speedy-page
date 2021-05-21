import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderRate = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElRate), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=rate.js.map