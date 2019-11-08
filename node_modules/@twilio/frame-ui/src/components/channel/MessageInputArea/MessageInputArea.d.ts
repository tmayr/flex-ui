import * as React from "react";
import { InputAreaStyleProps } from "../MessageInput/MessageInput.definition";
import * as ChannelState from "../../../state/ChannelState";
import { MessageState } from "../../../state/ChatChannelInputState";
import { AriaProps } from "../../AriaProps";
export interface CharLimitStyleProps extends InputAreaStyleProps {
    inputTextLength: number;
    charLimit: number;
}
export interface MessageInputAreaProps extends Partial<InputAreaStyleProps> {
    channelSid: string;
    channel: ChannelState.ChannelState;
    placeholder?: string;
    onSendMessage: () => void;
    disabled?: boolean;
    returnKeySendsMessage: boolean;
    charLimit: number;
    inputTextLength: number;
    selectionStart?: number;
    onChange?: (state: MessageState) => void;
    messageState: MessageState;
    textAreaAriaProps?: AriaProps;
}
export declare class MessageInputArea extends React.PureComponent<MessageInputAreaProps> {
    static defaultProps: Partial<MessageInputAreaProps>;
    static readonly displayName = "MessageInputArea";
    private _inputElement;
    private _inputContainerElement;
    private baseInputScrollHeight;
    private cachedHeight?;
    render(): JSX.Element;
    private renderCharCount;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private setTextAreaRef;
    private setTextAreaContainerRef;
    private handleInputKeyPress;
    private handleInputFocus;
    private handleInputChange;
    private resize;
    private adjustRowCount;
}
