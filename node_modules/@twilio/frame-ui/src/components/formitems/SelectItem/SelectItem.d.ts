import * as React from "react";
import { ItemProps } from "../DynamicForm";
/**
 * SelectItemProps properties
 * @typedef SelectItem.SelectItemProps
 * @property {SelectItem.SelectField} field - The select field component
 * @extends {ItemProps}
 */
export interface SelectItemProps extends ItemProps {
    field: SelectField;
}
/**
 * @typedef SelectItem.SelectField
 * @property {string} type - The type of the select field
 * @property {string} [label] - A custom label for the select field
 * @property {SelectItem.SelectFieldAttributes} attributes - Custom attributes for the field
 * @property {Array.<SelectItem.SelectOption>} options - An array of select option elements
 */
export interface SelectField {
    type: string;
    label?: string;
    attributes?: SelectFieldAttributes;
    options: Array<SelectOption>;
}
/**
 * Attributes for the select field component
 *
 * @typedef SelectItem.SelectFieldAttributes
 * @property {string} name - The name of the select field
 * @property {boolean} [required] - Whether or not the field must be required
 * @property {number} [size] - The size for the select field
 * @property {boolean} [multiple]
 * @property {boolean} [disabled] - The disable status of the field
 * @property {boolean} [autofocus] - If set, it will automatically focus the field
 */
export interface SelectFieldAttributes {
    name: string;
    required?: boolean;
    size?: number;
    multiple?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    readOnly?: boolean;
}
/**
 * @typedef SelectItem.SelectOption
 * @property {string} [value]
 * @property {string} [label]
 * @property {boolean} [selected]
 */
export interface SelectOption {
    value?: string;
    label?: string;
    selected?: boolean;
}
/**
 * Select form item
 * @category Components / Basic
 * @hideconstructor
 * @param {SelectItem.SelectItemProps} props
 * @extends {React.PureComponent}
 */
export declare class SelectItem extends React.PureComponent<SelectItemProps> {
    render(): JSX.Element;
}
