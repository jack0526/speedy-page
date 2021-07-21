import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderCheckbox = (options) => {
    return () => options.map(option => {
        return h(resolveComponent(EnumElementForm.ElCheckbox), {
            label: option.label
        }, () => option.value);
    });
};
//# sourceMappingURL=checkbox.js.map