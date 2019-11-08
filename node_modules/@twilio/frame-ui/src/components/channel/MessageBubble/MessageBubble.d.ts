import * as React from "react";
import { MessageBubbleProps } from "./MessageBubbleImpl";
/**
 * This component renders a single bubble in a list of messages.
 * @category Components / Programmable
 * @hideconstructor
 * @param {MessageBubble.MessageBubbleProps} props
 * @extends {React.PureComponent}
 */
export declare class MessageBubble extends React.PureComponent<MessageBubbleProps> {
    static readonly displayName = "MessageBubble";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<MessageBubble.MessageBubbleProps>}
     * @readonly
     */
    static readonly Content: import("../../..").DynamicContentStore;
    render(): JSX.Element;
}
