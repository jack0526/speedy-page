import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderCheckbox = (options) => {
    return () => options.map(option => {
        return h(resolveComponent(EnumElementForm.ElCheckbox), {
            label: option.value
        }, () => option.label);
    });
};
//# sourceMappingURL=checkbox.js.map