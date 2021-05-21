import { resolveComponent } from 'vue';
import { EnumFormItemType } from './type';
export function resolveForm(items) {
    return items.reduce((result, item) => {
        return { ...result, [item.prop]: item.defaultValue };
    }, {});
}
export function getComponents() {
    const ElForm = resolveComponent('ElForm');
    const ElFormItem = resolveComponent('ElFormItem');
    const ElInput = resolveComponent('ElInput');
    const ElSelect = resolveComponent('ElSelect');
    const ElOption = resolveComponent('ElOption');
    const ElRadioGroup = resolveComponent('ElRadioGroup');
    const ElRadio = resolveComponent('ElRadio');
    const ElCheckbox = resolveComponent('ElCheckbox');
    const ElCheckboxGroup = resolveComponent('ElCheckboxGroup');
    const ElInputNumber = resolveComponent('ElInputNumber');
    const ElCascader = resolveComponent('ElCascader');
    const ElSwitch = resolveComponent('ElSwitch');
    const ElSlider = resolveComponent('ElSlider');
    const ElTimePicker = resolveComponent('ElTimePicker');
    const ElDatePicker = resolveComponent('ElDatePicker');
    const ElRate = resolveComponent('ElRate');
    const ElRow = resolveComponent('ElRow');
    const ElCol = resolveComponent('ElCol');
    return {
        ElForm,
        ElFormItem,
        ElInput,
        ElOption,
        ElSelect,
        ElRadioGroup,
        ElRadio,
        ElCheckbox,
        ElCheckboxGroup,
        ElInputNumber,
        ElCascader,
        ElSwitch,
        ElSlider,
        ElTimePicker,
        ElDatePicker,
        ElRate,
        ElRow,
        ElCol
    };
}
export const resolveFormItems = (items, slotArray) => {
    return items.reduce((result, item) => {
        if (item.type === EnumFormItemType.Custom) {
            const temp = slotArray.find(slot => (slot.type.name === 'SpeedyFormItem') && (slot.props.prop === item.prop));
            if (temp) {
                result.push({ ...item, slot: temp });
            }
        }
        else {
            result.push(item);
        }
        return result;
    }, []);
};
//# sourceMappingURL=util.js.map