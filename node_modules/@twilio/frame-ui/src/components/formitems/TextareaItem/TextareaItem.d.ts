import * as React from "react";
import { ItemProps } from "../DynamicForm";
/**
 * @typedef TextareaItem.TextareaField
 * @property {string} type - The type of the textarea field
 * @property {string} label - A custom label for the textarea field
 * @property {TextareaItem.TextareaFieldAttributes} [attributes] - Custom attributes for the form field
 */
export interface TextareaField {
    type: string;
    label: string;
    attributes?: TextareaFieldAttributes;
}
/**
 * TextareaItem properties
 * @typedef TextareaItem.TextareaItemProps
 * @property {TextareaItem.TextareaField} field - The textarea field component
 * @extends {ItemProps}
 */
export interface TextareaItemProps extends ItemProps {
    field: TextareaField;
}
/**
 * Attributes for the textarea field component
 *
 * @typedef TextareaItem.TextareaFieldAttributes
 * @property {string} name - The name of the textarea field
 * @property {string} [value] - The value of the textarea field
 * @property {string} [placeholder] - A custom placeholder for the textarea field
 * @property {boolean} [required] - Whether or not the field must be required
 * @property {boolean} [autocomplete]
 * @property {number} [rows]
 * @property {number} [cols]
 */
export interface TextareaFieldAttributes {
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    autocomplete?: boolean;
    rows?: number;
    cols?: number;
    readOnly?: boolean;
}
/**
 * Textarea form item
 * @category Components / Basic
 * @hideconstructor
 * @param {TextareaItem.TextareaItemProps} props
 * @extends {React.PureComponent}
 */
export declare class TextareaItem extends React.PureComponent<TextareaItemProps> {
    render(): JSX.Element;
}
