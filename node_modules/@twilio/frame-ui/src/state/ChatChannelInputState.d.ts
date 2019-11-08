import { Action, Dispatch } from "redux";
import * as ChannelState from "./ChannelState";
/**
 * @typedef {Object} ChatChannelInputState.MessageState
 * @property {string} inputText="" Text of the message
 * @property {number} selectionStart=0 Start of the message selection
 */
export interface MessageState {
    readonly inputText: string;
    readonly selectionStart: number;
}
/**
 * @category State
 * @class ChatChannelInputState
 * @hideconstructor
 */
/**
* @typedef {Object} ChatChannelInputState.ChatChannelInputState
* @property {ChatChannelInputState.MessageState} sid Message state for a sid
*/
export interface ChatChannelInputState {
    [sid: string]: MessageState;
}
export interface ChatChannelInputAction extends Action {
    payload?: any;
    meta: {
        channelSid: string;
    };
}
export declare const ACTION_UPDATE_CHANNEL_INPUT = "CHANNEL_INPUT_UPDATE";
export declare function reduce(state: ChatChannelInputState, action: ChatChannelInputAction): ChatChannelInputState;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static setInputText(channel: ChannelState.ChannelState, body: string, selectionStart?: number): void;
}
