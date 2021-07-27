import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
import { renderCheckbox } from './checkbox';
import { getStore } from '../../utils/common-utils';
export const renderCheckboxGroup = (item, form, eventStore, store) => {
    const { disabled = false, size = 'small', textColor = '#ffffff', fill = '#409EFF' } = item;
    const changeEventName = `${item.prop}:change`;
    const options = getStore(item, store);
    return () => h(resolveComponent(EnumElementForm.ElCheckboxGroup), {
        disabled,
        size,
        textColor,
        fill,
        min: item.min || 0,
        max: item.max || item.options.length,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }, renderCheckbox(options));
};
//# sourceMappingURL=checkboxGroup.js.map