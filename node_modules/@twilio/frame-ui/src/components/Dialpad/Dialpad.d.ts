import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @callback DialpadButtonClickCallback
 * @param {string} value value of clicked key
 * @returns {void}
 * @memberof Dialpad
 */
export declare type DialpadButtonClickCallback = (value: string) => void;
/**
 * @typedef  Dialpad.DialpadProps
 * @property {DialpadButtonClickCallback} [onClick] - callback when a button is clicked
 */
export interface DialpadProps {
    onClick: DialpadButtonClickCallback;
    inputRef?: React.RefObject<any>;
}
export interface DialpadButtonThemeProps {
    Container: CSSProps;
    Caption: CSSProps;
    Description: CSSProps;
}
export interface DialpadThemeProps {
    Button: DialpadButtonThemeProps;
}
interface State {
    animate: {
        [key: string]: boolean;
    };
}
/**
 * A standard dialpad
 * Can be themed with [theme.Dialpad]{@link Dialpad.DialPadThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Dialpad.DialpadProps} props
 * @extends {React.PureComponent}
 */
export declare class Dialpad extends React.PureComponent<DialpadProps, State> {
    private ignoreTargets;
    private onKeyPressHandler;
    private onKeyUpHandler;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
