import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../../types/formTypes';
export const renderSlider = (item, form, eventStore) => {
    const { min = 0, max = 100, disabled = false, step = 1, showInput = false, showInputControls = true, inputSize = 'small', showStops = false, showTooltip = true, formatTooltip = undefined, range = false, vertical = false, height = '', label = '', debounce = 300, tooltipClass = '', marks = {} } = item;
    const changeEventName = `${item.prop}:change`;
    return () => h(resolveComponent(EnumElementForm.ElSlider), {
        min,
        max,
        disabled,
        step,
        showInput,
        showInputControls,
        inputSize,
        showStops,
        showTooltip,
        formatTooltip,
        range,
        vertical,
        height,
        label,
        debounce,
        tooltipClass,
        marks,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => eventStore.get(changeEventName) && eventStore.get(changeEventName)(val)
    });
};
//# sourceMappingURL=slider.js.map