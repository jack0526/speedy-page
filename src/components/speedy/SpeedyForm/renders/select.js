import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderSelect = (item, form, formMitter) => () => {
    const { disabled = false, placeholder = `请输入${item.label}`, clearable = true, multiple = false, collapseTags = false, filterable = true, allowCreate = false, defaultFirstOption = false, popperAppendToBody = false, clearIcon = 'el-icon-circle-close' } = item;
    const changeEventName = `${item.prop}:change`;
    return h(resolveComponent(EnumElementForm.ElSelect), {
        disabled,
        placeholder,
        clearable,
        multiple,
        collapseTags,
        filterable,
        allowCreate,
        defaultFirstOption,
        popperAppendToBody,
        clearIcon,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => formMitter.emit(changeEventName, val)
    }, () => item.options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElOption), {
            label: option.label,
            value: option.value,
            disabled: option.disabled
        });
    }));
};
//# sourceMappingURL=select.js.map