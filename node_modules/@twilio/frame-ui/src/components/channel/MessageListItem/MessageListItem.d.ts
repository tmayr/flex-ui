import * as React from "react";
import { CSSProps } from "../../CSSProps";
import { DynamicContentStore } from "../../../DynamicComponent";
import { MessageState } from "../../../state/ChannelState";
import { MessageStyle } from "../MessagingCanvas/MessagingCanvas";
import { MessageBubble } from "../MessageBubble";
/**
 * @typedef MessageListItem.MessageThemeProps
 * @property {CSSProps} Avatar avatar
 * @property {CSSProps} Bubble message bubble
 * @property {CSSProps} Header message header for author and timestamp
 */
export interface MessageThemeProps {
    Avatar: CSSProps;
    Bubble: CSSProps;
    Header: CSSProps;
}
/**
 * @typedef MessageListItem.MessageListItemThemeProps
 * @property {MessageListItem.MessageThemeProps} FromMe messages from myself
 * @property {MessageListItem.MessageThemeProps} FromOthers messages from others
 * @property {CSSProps} ReadStatus read status label
 */
export interface MessageListItemThemeProps {
    FromMe: MessageThemeProps;
    FromOthers: MessageThemeProps;
    ReadStatus: CSSProps;
}
export interface FakeMember {
    friendlyName: string;
}
/**
 * A object properties representing a message in message list.
 * @typedef MessageListItem.MessageListItemProps
 * @property {MessageState} message - An object which represents a single message.
 * @property {boolean} [showReadStatus] - Should show read status.
 * @property {MessagingCanvas.MessageStyle} [messageStyle] - Identifies how the message should be displayed.
 * @property {boolean} [useFriendlyName=true] - An override to use the friendly name passed in member.
 * @property {string} [authorName] - A custom author name to be used.
 * @property {string} [avatarUrl] - Url to the avatar of the author.
 */
export interface MessageListItemProps {
    message: MessageState;
    showReadStatus?: boolean;
    messageStyle?: MessageStyle;
    useFriendlyName?: boolean;
    authorName?: string;
    avatarUrl?: string;
    member?: FakeMember;
}
/**
 * Represents a single message in a message list.
 * Can be themed with [theme.Chat.MessageListItem]{@link MessageListItem.MessageListItemThemeProps}
 * @category Components / Programmable
 * @hideconstructor
 * @param {MessageListItemProps} props
 * @extends {React.PureComponent}
 */
export declare class MessageListItem extends React.PureComponent<MessageListItemProps> {
    static readonly displayName = "MessageListItem";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<MessageListItem.MessageListItemProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    /**
     * Shortcut for MessageBubble component
     * @static
     * @type {MessageBubble}
     * @readonly
     */
    static readonly Bubble: typeof MessageBubble;
    render(): JSX.Element;
    private getChildProps;
    static defaultProps: Partial<MessageListItemProps>;
}
