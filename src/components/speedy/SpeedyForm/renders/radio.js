import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderRadio = (options) => {
    return () => options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElRadio), {
            label: option.value
        }, () => option.label);
    });
};
export const renderRadioButton = (options) => {
    return () => options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElRadioButton), {
            label: option.value
        }, () => option.label);
    });
};
//# sourceMappingURL=radio.js.map