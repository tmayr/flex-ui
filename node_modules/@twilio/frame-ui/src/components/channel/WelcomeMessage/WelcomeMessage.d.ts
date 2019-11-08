import * as React from "react";
import { DynamicContentStore } from "../../../DynamicContentStore";
import { ThemeProps } from "../../theme";
import { CSSProps } from "../../CSSProps";
/**
 * @typedef WelcomeMessage.WelcomeMessageThemeProps
 * @property {CSSProps} Container container
 * @property {CSSProps} Icon icon
 */
export interface WelcomeMessageThemeProps {
    Container: CSSProps;
    Icon: CSSProps;
}
/**
 * @typedef WelcomeMessage.WelcomeMessageProps
 * @property {WelcomeMessage.WelcomeMessageThemeProps} [theme.WelcomeMessage] theme
 */
export interface WelcomeMessageProps extends ThemeProps {
}
/**
 * A component used to render welcome message
 * Can be themed with [theme.Chat.WelcomeMessage]{@link WelcomeMessage.WelcomeMessageThemeProps}
 * @category Components / Programmable
 * @class WelcomeMessage
 * @hideconstructor
 * @param {WelcomeMessage.WelcomeMessageProps} props
 * @extends {React.PureComponent}
 */
export declare class WelcomeMessageImpl extends React.PureComponent<WelcomeMessageProps> {
    private static readonly friendlyName;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<WelcomeMessage.WelcomeMessageProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
export declare const WelcomeMessage: typeof WelcomeMessageImpl;
