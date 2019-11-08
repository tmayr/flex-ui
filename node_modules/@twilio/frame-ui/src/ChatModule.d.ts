import { Store } from "redux";
import { ChatState } from "./state/ChatState";
import { ChatEventEmitter } from "./ChatEvents";
export declare type ChatStateCallback = (storeState: any) => ChatState;
export declare class ChatModule {
    private static _store;
    private static _stateCallback;
    private static _events;
    static init(store: Store<any>, stateCb?: ChatStateCallback): void;
    static readonly state: ChatState;
    static dispatch(action: any): any;
    static readonly events: ChatEventEmitter;
    static readonly stateCallback: ChatStateCallback;
}
/**
 * "connect" function from "react-redux", respecting the location of a chat store in redux store.
 * State for mapStateToProps will be evaluated to ChatState
 *
 * @ignore
 */
export declare function connect(mapStateToProps: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): any;
