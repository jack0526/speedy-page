import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderSlider = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElSlider), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    });
};
//# sourceMappingURL=slider.js.map