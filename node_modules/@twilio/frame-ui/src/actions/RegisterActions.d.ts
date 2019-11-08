import { ChannelState } from "../state/ChannelState";
/**
 * @typedef ChatActionPayload
 * @property {string} [channelSid] - Unique identifier of the channel.
 * @property {ChannelState} [channel] - Represents a remote chat channel.
 * @memberof ChatActions
 */
export interface ChatActionPayload {
    channelSid?: string;
    channel?: ChannelState;
}
/**
 * @typedef {ChatActions.ChatActionPayload} ChatActionInputTextPayload
 * @property {string} body - Content of the message.
 * @property {number} [selectionStart] - Represents the cursor position in the message body.
 * @property {boolean} [useLocalState] - Deprecated - If set to true, it keeps the message value in the local component state.
 * @property {boolean} [useSeparateInputStore] - If set to true, will store the message text in separate state and improves performance.
 * @memberof ChatActions
 */
export interface ChatActionInputTextPayload extends ChatActionPayload {
    body: string;
    selectionStart?: number;
    useLocalState?: boolean;
    useSeparateInputStore?: boolean;
}
/**
 * @typedef {ChatActions.ChatActionPayload} ChatActionSendMessageTextPayload
 * @property {string} body - Content of the message.
 * @property {any} [messageAttributes] - Represents chat message attributes to set.
 * @property {boolean} [useSeparateInputStore] - If set to true, will store the message text in separate state and improves performance.
 * @memberof ChatActions
 */
export interface ChatActionSendMessageTextPayload extends ChatActionPayload {
    body: string;
    messageAttributes?: any;
    useSeparateInputStore?: boolean;
}
/**
 * @static
 * @category Actions
 * @namespace ChatActions
 * @hideconstructor
 */
export declare class ChatActions {
    static registerActions(): void;
    private static sendMessage;
    private static sendTyping;
    private static inputTextDeprecationWarningShown;
    private static setInputText;
    private static dispatchInputTextAction;
    private static updateChatActionPayload;
}
