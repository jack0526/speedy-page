import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderRadio = (options) => {
    return () => options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElRadio), {
            label: option.value
        }, () => option.label);
    });
};
//# sourceMappingURL=radio.js.map