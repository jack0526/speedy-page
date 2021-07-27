import { h, reactive, ref, resolveComponent } from 'vue';
import { createFormatter } from '../utils/tableUtils';
import Speedy from '../Speedy/Speedy';
export default class SpeedyTable extends Speedy {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        this.total = ref(0);
        this.rows = ref([]);
        this.tableColumns = ref([]);
        this.config = reactive({});
        this.defaultConfig = {
            stripe: true,
            border: true,
            fit: true,
            showHeader: true,
            highlightCurrentRow: true,
            defaultExpandAll: false,
            tooltipEffect: 'dark',
            isPaging: true,
            currentPage: 1,
            pageSize: 15
        };
    }
    setOptions(options) {
        // 设置table配置
        this.mergeConfig(options.config || {});
        // 设备tableColumn
        this.setTableItems(options.items || []);
    }
    mergeConfig(config) {
        Object.keys(this.defaultConfig).forEach(key => this.setConfig(key, this.defaultConfig[key]));
        Object.keys(config).forEach(key => this.setConfig(key, config[key]));
    }
    setTotal(val) {
        this.total.value = val;
        this.config.total = val;
    }
    getTotal() {
        return this.total.value;
    }
    setRows(arr) {
        this.rows.value = arr;
    }
    getRows() {
        return this.config.isPaging
            ? this.rows.value.slice(0, this.config.pageSize)
            : this.rows.value;
    }
    getConfig(key) {
        if (key) {
            return this.config[key];
        }
        return this.config;
    }
    setConfig(key, value) {
        this.config[key] = value;
    }
    setTableItems(items) {
        this.tableColumns.value = items;
    }
    getTableColumns() {
        return this.tableColumns.value;
    }
    render(h) {
        return h('div', {
            style: { height: '100%' }
        }, this.renderTableAndPagination());
    }
    renderTableAndPagination() {
        if (this.config.isPaging) {
            return [
                this.renderTable(),
                this.renderPagination()
            ];
        }
        else {
            return this.renderTable();
        }
    }
    renderTable() {
        const headerCellClassName = 'speedy-table-cell';
        return h(resolveComponent('ElTable'), {
            data: this.getRows(),
            border: this.config.border,
            stripe: this.config.stripe,
            size: this.config.size,
            fit: this.config.fit,
            showHeader: this.config.showHeader,
            height: '95%',
            headerCellClassName,
            highlightCurrentRow: this.config.highlightCurrentRow,
            defaultExpandAll: this.config.defaultExpandAll,
            tooltipEffect: this.config.tooltipEffect,
            onRowClick: (...val) => this.events.emit('rowClick', val)
        }, () => this.renderTableColumns());
    }
    renderTableColumns() {
        const renderIndex = h(resolveComponent('ElTableColumn'), { type: 'index', width: 50 });
        const normal = this.tableColumns.value.map(item => {
            const formatter = createFormatter(item, this.store);
            return h(resolveComponent('ElTableColumn'), {
                label: item.label,
                prop: item.prop,
                width: item.width || 'auto',
                align: item.align || 'center',
                formatter
            });
        });
        return [renderIndex, ...normal];
    }
    renderPagination() {
        const { background = true, layout = 'total, sizes, prev, pager, next, jumper', total = 0, currentPage = 1, pageSizes = [15], pageSize = 15, hideOnSinglePage = false } = this.config;
        return h(resolveComponent('ElPagination'), {
            style: 'float: right',
            background,
            layout,
            total,
            currentPage,
            pageSizes,
            pageSize,
            hideOnSinglePage,
            onSizeChange: (val) => this.events.emit('sizeChange', val),
            onCurrentChange: (val) => this.events.emit('currentChange', val)
        });
    }
}
//# sourceMappingURL=SpeedyTable.js.map