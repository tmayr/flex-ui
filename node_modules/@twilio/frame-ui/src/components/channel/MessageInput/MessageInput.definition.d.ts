import { CSSProps } from "../../CSSProps";
import { ButtonThemeProps } from "../../Button";
import { AriaProps } from "../../AriaProps";
/**
 * @typedef {"Bubble" | "Line" | "Boxed"} InputAreaStyle - Represents the style of the input area.
 * @memberof MessageInput
 */
export declare type InputAreaStyle = "Bubble" | "Line" | "Boxed";
/**
 * Style properties for input element
 * @typedef MessageInput.InputAreaStyleProps
 * @property {MessageInput.InputAreaStyle} areaStyle - Represents the style of the input element.
 */
export interface InputAreaStyleProps {
    areaStyle: InputAreaStyle;
}
/**
 * @typedef MessageInput.MessageInputThemeProps
 * @property {CSSProps} Container container
 * @property {Button.ButtonThemeProps} Button send message button
 */
export interface MessageInputThemeProps {
    Container: CSSProps;
    Button: ButtonThemeProps;
}
/**
 * Properties of Message Input.
 * @typedef MessageInput.MessageInputProps
 * @property {MessageInput.MessageInputThemeProps} [theme.MessageInput] - theme
 * @property {MessageInput.InputAreaStyle} [areaStyle=Bubble] - Visual style of the text input element.
 * @property {string} [disabledReason] - A reason on why MessageInput is disabled.
 * @property {boolean} [returnKeySendsMessage=true] - Whether pressing the return key should send a message.
 * @property {number} charLimit - Identifies character limit for a single message.
 * @property {DynamicComponentChildren<MessageInput.MessageInputChildrenProps>} [children] - children
 * @property {boolean} useLocalState - Deprecated - If set to true, it keeps the message value in the local component state, instead of the Redux state.
 * @property {AriaProps} [sendButtonAriaProps] - SendButton aria props
 * @property {AriaProps} [textAreaAriaProps] - TextArea aria props
 */
export interface MessageInputProps {
    areaStyle?: InputAreaStyle;
    disabledReason?: string;
    returnKeySendsMessage?: boolean;
    charLimit: number;
    useLocalState?: boolean;
    useSeparateInputStore: boolean;
    sendButtonAriaProps?: AriaProps;
    textAreaAriaProps?: AriaProps;
}
