import { resolveComponent, h, ref } from 'vue';
import Speedy from '../Speedy/Speedy';
export default class SpeedyPage extends Speedy {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.dialogVisible = ref(false);
        this.buttons = [
            { type: 'primary', label: '新增', value: 'create', icon: 'el-icon-plus' },
            { type: 'info', label: '编辑', value: 'update', icon: 'el-icon-edit' },
            { type: 'danger', label: '删除', value: 'delete', icon: 'el-icon-delete' }
        ];
        this.options = {};
        this.formRef = ref(null);
        this.tableRef = ref(null);
        this.clickedBtn = '';
    }
    setOptions(options) {
        this.options = options;
        // 1. 设置page全局
        this.setPage();
        // 2. 设置form
        this.setForm();
        // 3. 设置table
        this.setTable();
        // 4. 设置btns
        this.setButtons();
    }
    setPage() {
    }
    setForm() {
        if (!this.options.form)
            return;
        if (!this.formRef.value)
            return;
        const globalItems = this.options.items || [];
        const { config = {}, items = [] } = this.options.form;
        config.size = this.options.config?.size || 'mini';
        const items2 = items.reduce((result, item) => {
            if (typeof item === 'string') {
                const temp = globalItems.find(v => v.prop === item);
                // @ts-ignore
                temp && result.push(temp);
            }
            else {
                // @ts-ignore
                result.push(item);
            }
            return result;
        }, []);
        this.formRef.value.speedyForm.setInPage(true);
        this.formRef.value.speedyForm.setOptions({ config, items: items2 });
        this.formRef.value.speedyForm.reuseStore(this.store);
        this.formRef.value.speedyForm.reuseEventsStore(this.eventsStore);
    }
    // 设置table
    setTable() {
        if (!this.options.table)
            return;
        if (!this.tableRef.value)
            return;
        const globalItems = this.options.items || [];
        const { config = {}, items = [] } = this.options.table;
        config.size = this.options.config?.size || 'mini';
        const items2 = items.reduce((result, item) => {
            if (typeof item === 'string') {
                const temp = globalItems.find(v => v.prop === item);
                // @ts-ignore
                temp && result.push(temp);
            }
            else {
                // @ts-ignore
                result.push(item);
            }
            return result;
        }, []);
        this.tableRef.value.speedyTable.setInPage(true);
        this.tableRef.value.speedyTable.setOptions({ config, items: items2 });
        this.tableRef.value.speedyTable.reuseStore(this.store);
        this.tableRef.value.speedyTable.reuseEventsStore(this.eventsStore);
    }
    // 设置表格数据
    setRows(rows, count) {
        if (!this.tableRef.value)
            return;
        const sum = (count !== null && count !== undefined) ? count : rows.length;
        this.tableRef.value.speedyTable.setRows(rows);
        this.tableRef.value.speedyTable.setTotal(sum);
    }
    setButtons() {
    }
    render() {
        return h('div', {
            style: {
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden'
            }
        }, [
            this.renderButtons(),
            this.renderTable(),
            this.renderDialog()
        ]);
    }
    renderButtons() {
        const buttons = this.buttons.map((v) => {
            const eventsName = `button:${v.value}:click`;
            return h(resolveComponent('ElButton'), {
                size: 'mini',
                type: v.type,
                onClick: () => {
                    this.clickedBtn = '';
                    if (!this.eventsStore.get(eventsName))
                        return;
                    // 告知是哪个btn被点击了, 在dialog open之后触发事件
                    this.clickedBtn = eventsName;
                    this.dialogVisible.value = true;
                    // this.eventsStore.get(eventsName)()
                }
            }, () => v.label);
        });
        return h('div', {
            style: { width: '100%', height: '40px', textAlign: 'left' }
        }, buttons);
    }
    renderTable() {
        return h(resolveComponent('SpeedyTable'), {
            style: {
                height: 'calc(100% - 40px)'
            },
            ref: this.tableRef
        });
    }
    renderDialog() {
        return h(resolveComponent('ElDialog'), {
            modelValue: this.dialogVisible.value,
            closeOnClickModal: false,
            showClose: false,
            destroyOnClose: true,
            width: '80%',
            'onUpdate:modelValue': (val) => this.emit('onUpdate:modelValue', val),
            onOpen: () => {
                this.setForm();
                console.log('on-open');
            },
            onOpened: () => {
                console.log('on-opened');
                this.setForm();
            },
            onClose: () => {
                this.clickedBtn = '';
            }
        }, {
            default: () => this.renderForm(),
            footer: () => this.renderFooter()
        });
    }
    renderForm() {
        // 后面根据slot来决定
        return h('div', {
            style: { height: '420px', overflow: 'auto' }
        }, h(resolveComponent('SpeedyForm'), {
            ref: this.formRef
        }));
    }
    renderFooter() {
        return h('div', {
            style: { textAlign: 'right' }
        }, [
            h(resolveComponent('ElButton'), {
                type: 'primary',
                size: 'mini',
                onClick: () => this.handleFormSubmit()
            }, '确定'),
            h(resolveComponent('ElButton'), {
                type: 'info',
                size: 'mini',
                onClick: () => this.handleFormCancel()
            }, '取消')
        ]);
    }
    handleFormSubmit() {
        this.dialogVisible.value = false;
    }
    handleFormCancel() {
        this.dialogVisible.value = false;
    }
}
//# sourceMappingURL=SpeedyPage.js.map