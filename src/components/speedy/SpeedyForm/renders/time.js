import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderTime = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    const { disabled = false, editable = true, clearable = true, size = 'small', format = 'HH:mm:ss' } = item;
    return () => h(resolveComponent(EnumElementForm.ElTimePicker), {
        disabled,
        editable,
        clearable,
        size,
        format,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=time.js.map