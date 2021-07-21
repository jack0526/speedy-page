import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderText = (item, form, formMitter) => () => {
    const { disabled = false, clearable = true, placeholder = `请输入${item.label}`, showPassword = false, suffixIcon = '', prefixIcon = '', size = 'small' } = item;
    const changeEventName = `${item.prop}:change`;
    return h(resolveComponent(EnumElementForm.ElInput), {
        disabled,
        clearable,
        placeholder,
        showPassword,
        suffixIcon,
        prefixIcon,
        size,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => {
            form[item.prop] = val;
        },
        onChange: (val) => formMitter.emit(changeEventName, val)
    });
};
//# sourceMappingURL=text.js.map