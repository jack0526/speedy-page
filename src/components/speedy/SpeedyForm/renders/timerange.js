import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderTimerange = (item, form, formEmiter) => {
    const changeEventName = `${item.prop}:change`;
    const { disabled = false, editable = true, clearable = true, size = 'small', rangeSeparator = '至', startPlaceholder = '开始时间', endPlaceholder = '开始时间', placeholder = '选择时间范围' } = item;
    return () => h(resolveComponent(EnumElementForm.ElTimePicker), {
        disabled,
        editable,
        clearable,
        size,
        rangeSeparator,
        startPlaceholder,
        endPlaceholder,
        placeholder,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        isRange: true,
        onChange: (val) => formEmiter.emit(changeEventName, val)
    });
};
//# sourceMappingURL=timerange.js.map