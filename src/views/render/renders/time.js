import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderTime = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElTimePicker), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=time.js.map