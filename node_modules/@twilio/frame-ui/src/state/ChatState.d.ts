import { ChannelsState } from "./ChannelsState";
import { ChatSessionState } from "./ChatSessionState";
import { ChatUserState } from "./ChatUserState";
import { ChatChannelInputState } from "./ChatChannelInputState";
/**
 * @category State
 * @class ChatState
 * @hideconstructor
 */
/**
 * Chat state
 * @typedef {Object} ChatState.ChatState
 * @property {ChannelsState.ChannelsState} channels State of chat channels
 * @property {ChatSessionState.ChatSessionState} session State of the user session
 * @property {ChatUserState.ChatUserState} users State of chat users
 * @property {ChatChannelInputState.ChatChannelInputState} channelInput Chat text input state
 */
export interface ChatState {
    readonly channels: ChannelsState;
    readonly session: ChatSessionState;
    readonly users: ChatUserState;
    readonly channelInput: ChatChannelInputState;
}
