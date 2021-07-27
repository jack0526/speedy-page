import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
import { renderRadio, renderRadioButton } from './radio';
import { getStore } from '../../utils/common-utils';
export const renderRadioGroup = (item, form, eventStore, store) => {
    const changeEventName = `${item.prop}:change`;
    const { disabled = false, size = 'small', optionType } = item;
    const renderOption = optionType === 'button' ? renderRadio : renderRadioButton;
    const options = getStore(item, store);
    return () => h(resolveComponent(EnumElementForm.ElRadioGroup), {
        disabled,
        size,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    }, renderOption(options));
};
//# sourceMappingURL=radioGroup.js.map