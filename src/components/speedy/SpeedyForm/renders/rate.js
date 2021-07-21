import { h, resolveComponent } from 'vue';
import { EnumElementForm } from '../type';
export const renderRate = (item, form, formEmiter) => {
    const changeEventName = `${item.prop}:change`;
    const { max = 5, disabled = false, allowHalf = false, lowThreshold = 2, highThreshold = 4, colors = ['#F7BA2A', '#F7BA2A', '#F7BA2A'], voidColor = '#C6D1DE', disabledVoidColor = '#EFF2F7', iconClasses = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'], voidIconClass = 'el-icon-star-off', disabledVoidIconClass = 'el-icon-star-on', showText = false, showScore = false, textColor = '#1F2D3D', texts = ['极差', '失望', '一般', '满意', '惊喜'] } = item;
    return () => h(resolveComponent(EnumElementForm.ElRate), {
        max,
        disabled,
        allowHalf,
        lowThreshold,
        highThreshold,
        colors,
        voidColor,
        disabledVoidColor,
        iconClasses,
        voidIconClass,
        disabledVoidIconClass,
        showText,
        showScore,
        textColor,
        texts,
        modelValue: form[item.prop],
        'onUpdate:modelValue': (val) => (form[item.prop] = val),
        onChange: (val) => formEmiter.emit(changeEventName, val)
    });
};
//# sourceMappingURL=rate.js.map