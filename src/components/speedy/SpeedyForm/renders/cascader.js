import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
import { getStore } from '../../utils/common-utils';
export const renderCascader = (item, form, eventStore, store) => {
    const changeEventName = `${item.prop}:change`;
    const options = getStore(item, store);
    return () => h(resolveComponent(EnumElementForm.ElCascader), {
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val),
        options
    });
};
//# sourceMappingURL=cascader.js.map