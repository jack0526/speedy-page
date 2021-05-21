import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
import { renderRadio } from '@/views/render/renders/radio';
export const renderRadioGroup = (item, form) => {
    return () => h(resolveComponent(EnumElementForm.ElRadioGroup), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val)
    }, renderRadio(item.options));
};
//# sourceMappingURL=radioGroup.js.map