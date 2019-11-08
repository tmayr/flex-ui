import { Action, Dispatch } from "redux";
import { Channel } from "twilio-chat/lib/channel";
import { Member } from "twilio-chat/lib/member";
import { Message } from "twilio-chat/lib/message";
import { Paginator } from "twilio-chat/lib/interfaces/paginator";
import { User } from "twilio-chat/lib/user";
export declare type MembersType = Map<string, MemberState>;
/**
 * A state of remote client in a Channel.
 * @typedef {Object} ChannelsState.MemberState
 * @property {ChannelsState.MemberState} source - Represents the remote client in a Channel.
 * @property {string} friendlyName - It represents the friendly name of the remote client.
 * @property {boolean} online - It represents if the member is online or not.
 */
export interface MemberState {
    readonly source: Member;
    readonly friendlyName: string;
    readonly online: boolean;
}
/**
 * An object which represents a state of a single message.
 * @typedef {Object} ChannelsState.MessageState
 * @property {boolean} isFromMe - Is the message from me.
 * @property {ChannelsState.MessageState} source - Represents the message object.
 * @property {boolean} groupWithNext - should the message be grouped with the next message.
 * @property {boolean} groupWithPrevious - should the message be grouped with the previous message.
 * @property {number} index - index of the message within the remote messages array
 */
export interface MessageState {
    readonly isFromMe: boolean;
    readonly source: Message;
    readonly groupWithNext: boolean;
    readonly groupWithPrevious: boolean;
    readonly index: number;
}
/**
 * An object which represents a state of a channel.
 * @typedef {Object} ChannelsState.ChannelState
 * @property {Paginator} [currentPaginator] Paginator class to reqeust messages on previous or next pages
 * @property {number} selectionStart=0 Index of the selection start
 * @property {boolean} isLoadingMessages=false Indicates if messages are currently loading
 * @property {boolean} isLoadingMembers=false Indicates if members are currently loading
 * @property {boolean} isLoadingChannel=false Indicates if channel is currently loading
 * @property {number} lastConsumedMessageIndex=0 Index of the last read message
 * @property {MembersType} members Members of the chat
 * @property {ChannelsState.MessageState[]} messages=Map() Messages in the channel
 * @property {Channel} [source] Reference to the channel
 * @property {Array.<ChannelsState.MemberState>} typers Members, who are currently typing a message
 * @property {boolean} errorWhileLoadingChannel=false Indicates if there was an error while loading a channel
 */
export interface ChannelState {
    readonly currentPaginator?: Paginator<Message>;
    readonly inputText: string;
    readonly selectionStart: number;
    readonly isLoadingMessages: boolean;
    readonly isLoadingMembers: boolean;
    readonly lastConsumedMessageIndex: number;
    readonly listener?: ChannelListener;
    readonly members: MembersType;
    readonly unconsumedMessages: Array<MessageState>;
    readonly messages: Array<MessageState>;
    readonly source?: Channel;
    readonly typers: Array<MemberState>;
    readonly isLoadingChannel: boolean;
    readonly errorWhileLoadingChannel: boolean;
}
export interface InitChannelPayload {
    channel: Channel;
    identity: string;
    listener: ChannelListener;
}
export declare type ChannelActionPayload = InitChannelPayload | MembersType | Paginator<Message> | Message | MemberState | string;
export interface ChannelAction extends Action {
    payload?: any;
    meta: {
        channelSid: string;
    };
}
export declare const ACTION_ADDED_MESSAGE = "CHANNEL_ADD_MESSAGE";
export declare const ACTION_ADDED_MEMBER = "CHANNEL_ADD_MEMBER";
export declare const ACTION_USER_UPDATED = "CHANNEL_USER_UPDATED";
export declare const ACTION_INIT_CHANNEL = "CHANNEL_INIT";
export declare const ACTION_UNLOAD_CHANNEL = "CHANNEL_UNLOAD";
export declare const ACTION_INIT_CHANNEL_MEMBERS = "CHANNEL_INIT_MEMBERS";
export declare const ACTION_CONSUME_MESSAGE = "ACTION_CONSUME_MESSAGE";
export declare const ACTION_LOAD_CHANNEL_MESSAGES = "CHANNEL_LOAD_MESSAGES";
export declare const ACTION_REMOVED_MESSAGE = "CHANNEL_REMOVE_MESSAGE";
export declare const ACTION_REMOVED_MEMBER = "CHANNEL_REMOVE_MEMBER";
export declare const ACTION_UPDATED_MEMBER = "CHANNEL_UPDATED_MEMBER";
export declare const ACTION_UPDATED_MESSAGE = "CHANNEL_UPDATE_MESSAGE";
export declare const ACTION_TYPING_STARTED = "CHANNEL_TYPING_STARTED";
export declare const ACTION_TYPING_ENDED = "CHANNEL_TYPING_ENDED";
export declare const ACTION_UPDATE_CHANNEL = "CHANNEL_UPDATE";
export declare const ACTION_LOAD_CHANNEL = "CHANNEL_LOAD";
export declare function reduce(state: ChannelState, action: ChannelAction): ChannelState;
export declare class Actions {
    private static readonly MESSAGE_LOAD_COUNT;
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static dispatchChannelAction(sid: string, type: string, payload: any): void;
    static init(channel: Channel): Promise<void>;
    static unload(channelSid: string): void;
    static loadMessagesFromHistory(channel: ChannelState): false | Promise<void>;
    private static loadUserDescriptorForMissingMembers;
    static deprecatedSetInputText(channel: ChannelState, body: string, selectionStart?: number): void;
    static updateLastConsumedMessageIndex(channel: ChannelState, newIndex: number): void;
    static removeAllListeners(): void;
    static initWithChannelSid(sid: string): void;
}
export declare class ChannelListener {
    private _channel;
    private _listening;
    private _users;
    constructor(channel: Channel);
    start(): void;
    stop(): void;
    startListeningUser(user: User): void;
    stopListeningUser(user: User): void;
    private dispatchMessageOrMemberAction;
    private handleMessageAdded;
    private handleMessageUpdated;
    private handleMessageRemoved;
    private handleMemberJoined;
    private handleMemberLeft;
    private handleMemberUpdated;
    private handleTypingStarted;
    private handleTypingEnded;
    private handleUserUpdated;
    private handleChannelUpdated;
    private showNewMessageNotification;
    isListening(): boolean;
}
export declare class ChannelHelper {
    static isUserMemberOfChannel(channel: ChannelState): boolean;
}
