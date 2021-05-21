import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderSwitch = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElSwitch), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=switch.js.map