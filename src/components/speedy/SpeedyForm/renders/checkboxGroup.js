import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
import { renderCheckbox } from '@/views/render/renders/checkbox';
export const renderCheckboxGroup = (item, form, formMitter) => {
    const { disabled = false, size = 'small', textColor = '#ffffff', fill = '#409EFF' } = item;
    const changeEventName = `${item.prop}:change`;
    return () => h(resolveComponent(EnumElementForm.ElCheckboxGroup), {
        disabled,
        size,
        textColor,
        fill,
        min: item.min || 0,
        max: item.max || item.options.length,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => formMitter.emit(changeEventName, val)
    }, renderCheckbox(item.options));
};
//# sourceMappingURL=checkboxGroup.js.map