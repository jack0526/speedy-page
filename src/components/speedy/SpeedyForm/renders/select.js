import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
import { getStore } from '../../utils/common-utils';
export const renderSelect = (item, form, eventStore, store) => () => {
    const { disabled = false, placeholder = `请输入${item.label}`, clearable = true, multiple = false, collapseTags = false, filterable = true, allowCreate = false, defaultFirstOption = false, popperAppendToBody = false, clearIcon = 'el-icon-circle-close' } = item;
    const changeEventName = `${item.prop}:change`;
    const options = getStore(item, store);
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
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }, () => options.map((option) => {
        return h(resolveComponent(EnumElementForm.ElOption), {
            label: option.label,
            value: option.value,
            disabled: option.disabled
        });
    }));
};
//# sourceMappingURL=select.js.map