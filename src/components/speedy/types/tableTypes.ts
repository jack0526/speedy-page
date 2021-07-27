import { Size } from './commonTypes'
interface TableItemBase {
  label: string;
  prop: string;
  type: string;
}

type TableItem = TableItemBase | string

export interface TableConfig extends Record<string, any>{
  // 是否为斑马纹 table
  stripe?: boolean;
  // 是否带有纵向边框
  border?: boolean;
  size?: Size;
  fit?: boolean;
  showHeader?: boolean;
  highlightCurrentRow?: boolean;
  currentRowKey?: string | number;
  defaultExpandAll?:boolean;
  tooltipEffect?: 'dark' | 'light';
  isPaging?: boolean;
  columnSelection?: boolean;
  columnExpand?: boolean;
}

export interface TableOptions {
  config?: TableConfig;
  items?: TableItem[]
}
