import * as React from "react";
import { ThemeProps } from "../../theme";
import { CSSProps } from "../../CSSProps";
import { ButtonThemeProps } from "../../Button";
/**
 * @typedef MessageCanvasTray.MessageCanvasTrayThemeProps
 * @property {CSSProps} Container container
 * @property {ButtonThemeProps} Button button
 */
export interface MessageCanvasTrayThemeProps {
    Container: CSSProps;
    Button: ButtonThemeProps;
}
/**
 * @typedef MessageCanvasTray.MessageCanvasTrayProps
 * @property {boolean} [showButton=true] - Display a ‘Start new chat’ button in the tray.
 * @property {Function} [onButtonClick=undefined] - A handler for a ‘Start new chat’ button click.
 */
export interface MessageCanvasTrayProps {
    showButton?: boolean;
    onButtonClick?: () => void;
}
/**
 * A container used when the status of the channel is inactive
 * Can be themed with [theme.Chat.MessageCanvasTray]{@link MessageCanvasTray.MessageCanvasTrayThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {MessageCanvasTrayProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 */
export declare class MessageCanvasTray extends React.PureComponent<MessageCanvasTrayProps & ThemeProps> {
    static readonly displayName = "MessageCanvasTray";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<MessageCanvasTray.MessageCanvasTrayProps>}
     * @readonly
     */
    static readonly Content: import("../../..").DynamicContentStore;
    /**
     * Default properties
     * @static
     * @type {MessageCanvasTray.MessageCanvasTrayProps}
     * @readonly
     */
    static defaultProps: Partial<MessageCanvasTrayProps>;
    render(): JSX.Element;
}
