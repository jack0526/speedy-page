export type ItemType = 'text' | 'textarea'

export interface BaseItem {
  label: String;
  prop: String;
  type: ItemType;
  defaultValue ?: any;
}

export interface TextItem extends BaseItem{
}

export type Items = Array<TextItem>

export interface FormOptions {
  labelPosition?: String;
  labelWidth?: String | Number,
  items: Items
}

export type NormalObject = {
  [k:string]: any
}

export type Nullable<t> = T | null
