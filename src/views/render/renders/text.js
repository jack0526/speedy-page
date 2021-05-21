import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderText = (item, form) => () => {
    return h(resolveComponent(EnumElementForm.ElInput), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => {
            form[item.prop] = val;
        }
    });
};
//# sourceMappingURL=text.js.map