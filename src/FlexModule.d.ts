import { Store } from "redux";
import { MapDispatchToPropsParam, Options } from "react-redux";
import * as TwilioChat from "twilio-chat";
import { Supervisor } from "twilio-taskrouter";
import { SyncClient } from "twilio-sync";
import { AppState } from "./state/AppState";
import { FlexState } from "./Store";
import { FlexEventEmitter } from "./FlexEvents";
export declare type FlexStateCallback = (storeState: FlexState) => AppState;
export declare class FlexModule {
    private static store;
    static stateCallback: FlexStateCallback;
    static events: FlexEventEmitter;
    static init(store: Store<FlexState>, stateCb?: FlexStateCallback): void;
    static readonly state: AppState;
    static dispatch(action: any): any;
    private static _chatClient;
    static chatClient: TwilioChat.Client;
    private static _workerClient;
    static workerClient: Supervisor;
    private static _insightsClient;
    static insightsClient: SyncClient;
    private static _voiceClient;
    static readonly voiceClient: any;
}
/**
 * "connect" function from "react-redux", respecting the location of a chat store in redux store.
 * State for mapStateToProps will be evaluated to ChatState
 * @private
 */
export declare function connect<StateProps, DispatchProps = {}, OwnProps = {}>(mapStateToProps: (appState: AppState, ownProps: OwnProps) => StateProps, mapDispatchToProps?: null | MapDispatchToPropsParam<DispatchProps, OwnProps>, mergeProps?: any, options?: Options<{}, StateProps, OwnProps, FlexState>): import("react-redux").InferableComponentEnhancerWithProps<StateProps & DispatchProps, OwnProps>;
