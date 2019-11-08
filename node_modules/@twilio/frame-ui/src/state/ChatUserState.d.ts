import { UserDescriptor } from "twilio-chat/lib/userdescriptor";
import { Action, Dispatch } from "redux";
/**
 * @category State
 * @class ChatUserState
 * @hideconstructor
 */
/**
 * A state of chat users value UserDescriptor from Twilio Chat SDK.
 * @typedef {Object} ChatUserState.ChatUserState
 * @property {UserDescriptor} sid User descriptor of the user by sid
 */
export interface ChatUserState {
    [sid: string]: UserDescriptor;
}
export declare const ACTION_CACHE_USERS = "CHAT_CACHE_USERS";
interface ChatUserStateAction extends Action {
    readonly payload?: any;
}
export declare function reduce(state: ChatUserState, action: ChatUserStateAction): ChatUserState;
export declare class Actions {
    static readonly dispatcher: Dispatch<any>;
    static dispatchCachedUsers(users: Array<UserDescriptor>): void;
    private static userDescriptorRequestCache;
    static fetchUserDescriptor(identity: string): Promise<UserDescriptor | null>;
}
export {};
