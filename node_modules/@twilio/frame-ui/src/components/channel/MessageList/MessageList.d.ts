import * as React from "react";
import { MessageListItem } from "../MessageListItem";
import { PredefinedMessage, MessageStyle, MemberDisplayOptions } from "../MessagingCanvas";
import { CSSProps } from "../../CSSProps";
import * as ChannelState from "../../../state/ChannelState";
import { AriaProps } from "../../AriaProps";
/**
 * @typedef MessageList.MessageListThemeProps
 * @property {CSSProps} DateSeparatorLine line for date separators
 * @property {CSSProps} DateSeparatorText text for date separators
 * @property {CSSProps} TypingIndicator typing indicator
 */
export interface MessageListThemeProps {
    DateSeparatorLine: CSSProps;
    DateSeparatorText: CSSProps;
    TypingIndicator: CSSProps;
}
/**
 * @typedef MessageList.MessageListChildrenProps
 * @property {string} channelSid - Sid of the channel
 * @property {ChannelState.ChannelState} [channel] - ChannelState object
 * @property {boolean} [isAppActive] - It sets whether the chat is active or not
 * @property {MessagingCanvas.MemberDisplayOptions} memberDisplayOptions - Chat member display configuration
 * @property {MessagingCanvas.MessageStyle} messageStyle - Represents the style of a message.
 * @property {boolean} showTypingIndicator - It sets whether to display TypingIndicator component or not
 * @property {boolean} showReadStatus - It sets whether to display the MessageReadContainer component or not
 * @property {boolean} showWelcomeMessage - It sets whether to inject a WelcomeMessage in the message list or not
 * @property {PredefinedMessage} [predefinedMessage] - It sets whether to inject a predefined message in the message list or not
 * @property {AriaProps} [listContainerAriaProps] - ListContainer aria props
 */
export interface MessageListChildrenProps {
    channelSid: string;
    channel?: ChannelState.ChannelState;
    isAppActive?: boolean;
    memberDisplayOptions: MemberDisplayOptions;
    messageStyle: MessageStyle;
    showTypingIndicator: boolean;
    showReadStatus: boolean;
    showWelcomeMessage: boolean;
    predefinedMessage?: PredefinedMessage;
    listContainerAriaProps?: AriaProps;
}
/**
 * A component representing the list of messages.
 * Can be themed with [theme.Chat.MessageList]{@link MessageList.MessageListThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @extends {React.Component}
 */
export declare class MessageList extends React.Component<any> {
    static readonly friendlyName = "MessageList";
    static readonly displayName = "MessageList";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<MessageList.MessageListChildrenProps>}
     * @readonly
     */
    static readonly Content: import("../../..").DynamicContentStore;
    /**
     * Shortcut for MessageListItem component
     * @static
     * @type {MessageListItem}
     * @readonly
     */
    static readonly Item: typeof MessageListItem;
    /**
     * Shortcut for WelcomeMessage component
     * @static
     * @type {WelcomeMessage}
     * @readonly
     */
    static readonly WelcomeMessage: typeof import("../WelcomeMessage/WelcomeMessage").WelcomeMessageImpl;
    /**
     * Default properties
     *
     * @static
     * @type {MessageList.MessageListChildrenProps}
     * @readonly
     */
    static defaultProps: Partial<MessageListChildrenProps>;
    render(): JSX.Element;
}
