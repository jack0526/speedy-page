import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderCascader = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElCascader), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        options: item.options
    });
};
//# sourceMappingURL=cascader.js.map