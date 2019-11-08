import { ThemeProps } from "../../theme";
import * as React from "react";
import { DynamicContentStore } from "../../../DynamicComponent";
import * as ChannelState from "../../../state/ChannelState";
import { MessageState } from "../../../state/ChatChannelInputState";
import { MessageInputProps } from "./MessageInput.definition";
export declare const displayName = "MessageInput";
export declare const contentStore: DynamicContentStore;
/**
 * Properties of Message Input.
 * @typedef {MessageInput.MessageInputProps} MessageInput.MessageInputChildrenProps
 * @property {string} channelSid - Unique identifier of the Channel.
 * @property {ChannelState.ChannelState} [channel] - Represents a remote channel of communication.
 * @property {string} [connectionState] - Represents status of the Channel
 */
export interface MessageInputChildrenProps extends MessageInputProps {
    channelSid: string;
    channel?: ChannelState.ChannelState;
    connectionState?: string;
    messageState?: MessageState;
}
interface MessageInputState extends MessageState {
}
declare class MessageInputImpl extends React.PureComponent<MessageInputChildrenProps & ThemeProps, MessageInputState> {
    state: MessageInputState;
    private getStoredState;
    constructor(props: MessageInputChildrenProps & ThemeProps);
    /**
     * Change internal state to match the global stored state
     * (e.g., due to a user manually invoking the `SetInputText` action)
     * @private
     */
    private resetFromStoredState;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private onMessageChange;
    private getInputTextLength;
    private sendMessage;
}
export { MessageInputImpl };
