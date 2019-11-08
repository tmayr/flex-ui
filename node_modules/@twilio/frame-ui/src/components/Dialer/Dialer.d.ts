import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @callback Dialer.DialerCallback
 * @param {string} phoneNumber phone number entered
 * @returns {void}
 */
export declare type DialerCallback = (phoneNumber: string) => void;
/**
 * @typedef  Dialer.DialerProps
 * @property {Dialer.DialerCallback} [onDial] - Callback when dialing action is submitted.
 * @property {boolean} [hideActions] - Identifies if the dialer actions are hidden.
 * @property {string} [defaultPhoneNumber] - Default phone number for dialer.
 * @property {Dialer.DialerCallback} [onPhoneNumberChange] - Callback when phone number is changed.
 */
export interface DialerProps {
    onDial: DialerCallback;
    hideActions?: boolean;
    defaultPhoneNumber?: string;
    onPhoneNumberChange?: DialerCallback;
}
/**
 * @typedef Dialer.DialerThemeProps
 * @property {CSSProps} CallButton call button
 */
export interface DialerThemeProps {
    CallButton: CSSProps;
}
interface State {
    phoneNumber: string;
}
/**
 * A dialer that contains a phone number input field, dialpad and a call button
 * Can be themed with [theme.Dialer]{@link Dialer.DialerThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Dialer.DialerProps} props - Properties to configure this component.
 * @extends {React.PureComponent}
 */
export declare class Dialer extends React.PureComponent<DialerProps, State> {
    static defaultProps: {
        defaultPhoneNumber: string;
        onPhoneNumberChange: () => void;
    };
    private inputRef;
    state: {
        phoneNumber: string;
    };
    private updateListeners;
    private onPhoneNumberReset;
    private onDialpadClick;
    private onDialerPhoneInputChange;
    private onKeyPress;
    private onStartOutboundCall;
    render(): JSX.Element;
}
export {};
