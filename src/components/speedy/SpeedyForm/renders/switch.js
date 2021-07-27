import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderSwitch = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    return () => h(resolveComponent(EnumElementForm.ElSwitch), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=switch.js.map