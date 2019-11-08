import { Action } from "redux";
/**
 * Voice connection state
 * @typedef PhoneCallState
 * @property {Device.Connection} source source connection object {@link https://www.twilio.com/docs/voice/client/javascript/connection}
 */
export interface PhoneCallState {
    source: any;
    oldHold?: boolean;
}
/**
 * Voice connection state
 * @name PhoneState
 * @property {PhoneCallState} connection - active connection
 * @category State
 */
export interface PhoneState {
    readonly listener: DeviceListener;
    readonly connection: PhoneCallState;
}
export interface InitPhonePayload {
    token: string;
    listener: DeviceListener;
}
export declare type ChannelActionPayload = InitPhonePayload;
export interface PhoneAction extends Action {
    payload?: any;
    meta: {
        channelSid: string;
    };
}
export declare function reduce(state: PhoneState, action: PhoneAction): PhoneState;
export declare class Actions {
    static dispatchPhoneAction(type: string, payload: any): void;
    static init(data: string, options?: any): void;
    static oldHoldConnection(): void;
    static oldUnHoldConnection(): void;
    static shutdown(): void;
}
export declare class DeviceListener {
    private _listening;
    constructor(data: string, options?: any);
    start(): void;
    stop(): void;
    private handleDeviceReady;
    private handleDeviceError;
    private handleDeviceConnect;
    private handleDeviceDisconnect;
    private handleDeviceIncoming;
    private handleDeviceCancel;
    private handleConnectionMute;
    isListening(): boolean;
}
