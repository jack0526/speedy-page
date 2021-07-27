import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderInputNumber = (item, form, eventStore) => {
    const changeEventName = `${item.prop}:change`;
    const blurEventName = `${item.prop}:blur`;
    const { step = 1, stepStrictly = false, precision = undefined, size = 'small', disabled = false, controls = true, controlsPosition = 'right', name = '', label = '', placeholder = `请输入${item.label}` } = item;
    return () => h(resolveComponent(EnumElementForm.ElInputNumber), {
        step,
        stepStrictly,
        precision,
        size,
        disabled,
        controls,
        controlsPosition,
        name,
        label,
        placeholder,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        min: item.min,
        max: item.max,
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val),
        onBlur: (event) => eventStore.get(blurEventName) && eventStore.get(blurEventName)(event)
    });
};
//# sourceMappingURL=inputNumber.js.map