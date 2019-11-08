import { ITask } from "../models";
/**
 * @package
 * @typedef VoiceActionPayload
 * @property {ITask} [task]
 * @property {string} [sid]
 * @memberof VoiceActions
 */
export interface VoiceActionPayload {
    task?: ITask;
    sid?: string;
}
/**
 * @package
 * @typedef {VoiceActionPayload} VoiceActionCallHoldPayload
 * @property {string} holdCallMusicUrl
 * @memberof VoiceActions
 */
export interface VoiceActionCallHoldPayload extends VoiceActionPayload {
    holdCallMusicUrl?: string;
}
/**
 * @package
 * @class VoiceActions
 * @hideconstructor
 * @category Actions
 */
export declare class VoiceActions {
    static registerActions(): void;
    private static toggleMute;
    private static holdCall;
    private static unholdCall;
    private static hangupCall;
    private static updateVoiceActionPayload;
}
export declare const isValidVoiceActionPayload: (task: ITask) => (payload: any) => boolean;
