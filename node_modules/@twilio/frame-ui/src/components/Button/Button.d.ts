import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @typedef Button.ButtonThemeProps
 * @property {string} [disabledColor]
 * @property {boolean} [lightHover]
 */
export interface ButtonThemeProps extends Partial<CSSProps> {
    disabledColor?: string;
    lightHover?: boolean;
}
/**
 * Properties of the Button
 * @typedef Button.ButtonProps
 * @property {string} [className=""] - An additional class name for the button component
 * @property {boolean} [disabled=false] - If set, it disables the button
 * @property {Function} [onClick] - An handler for the button click
 * @property {React.FocusEventHandler.<any>} [onBlur] - An handler for the button blur
 * @property {Button.ButtonThemeProps} [themeOverride={}] - Overwrite the default ButtonThemeProps
 * @property {boolean} [roundCorners=true] - If set, it renders the button with round corners
 * @property {string} [title] - An optional title for the button
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    onClick?: (e?: React.SyntheticEvent<any>) => void;
    onBlur?: React.FocusEventHandler<any>;
    themeOverride?: ButtonThemeProps;
    innerRef?: any;
    roundCorners?: boolean;
    title?: string;
}
/**
 * This component renders a button
 * Can be themed with [theme.Button]{@link Button.ButtonThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Button.ButtonProps} Button.ButtonProps - props
 * @extends {React.PureComponent}
 */
export declare class Button extends React.PureComponent<ButtonProps> {
    static displayName: string;
    render(): JSX.Element;
    static defaultProps: Partial<ButtonProps>;
}
