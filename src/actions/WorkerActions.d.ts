import { ITask } from "../models";
import { ConferenceParticipant } from "../state/ConferencesState";
/**
 * @package
 * @typedef WorkerActionPayload
 * @property {ITask} [task]
 * @property {string} [sid]
 * @memberof WorkerActions
 */
export interface WorkerActionPayload {
    task?: ITask;
    sid?: string;
}
/**
 * @package
 * @typedef {WorkerActions.WorkerActionPayload} TransferTaskPayload
 * @property {string} targetSid - sid of the worker or the queue to be transferred to
 * @property {any} [options] - transfer options (see Taskrouter docs for options)
 * @memberof WorkerActions
 */
export interface TransferTaskPayload extends WorkerActionPayload {
    targetSid: string;
    options?: any;
}
/**
 * @package
 * @typedef {WorkerActions.WorkerActionPayload} WorkerParticipantActionPayload
 * @property {string} [targetSid] - sid of the participant (either this or participant has to be provided)
 * @property {ConferenceParticipant} [participant] - participant object (either this or participant has to be provided)
 * @memberof WorkerActions
 */
export interface WorkerParticipantActionPayload extends WorkerActionPayload {
    targetSid?: string;
    participant?: ConferenceParticipant;
}
/**
 * @package
 * @typedef WorkerSetActivityPayload
 * @param {boolean} [activityAvailable]
 * @param {string} [activityName]
 * @param {string} [activitySid]
 * @param {boolean} [options.rejectPendingReservations]
 * @memberof WorkerActions
 */
export interface WorkerSetActivityPayload {
    activityAvailable?: boolean;
    activityName?: string;
    activitySid?: string;
    options?: {
        rejectPendingReservations?: boolean;
    };
}
/**
 * @package
 * @typedef WorkerLogoutPayload
 * @param {boolean} [forceLogout] - supress an error in case offline activity cannot be set for the worker
 * @param {string} [activitySid] - sid of the custom offline activity
 * @memberof WorkerActions
 */
export interface WorkerLogoutPayload {
    forceLogout?: boolean;
    activitySid?: string;
}
/**
 * @package
 * @typedef WorkerAcceptTaskActionPayload
 * @property {any} conferenceOptions
 * @memberof WorkerActions
 */
export interface WorkerAcceptTaskActionPayload extends WorkerActionPayload {
    conferenceOptions: any;
}
export interface ToggleDTMFDialpadPayload extends WorkerActionPayload {
    open?: boolean;
}
export interface DTMFDIalpadDigitsPayload extends WorkerActionPayload {
    digits: string;
}
/**
 * @package
 * @class WorkerActions
 * @hideconstructor
 * @category Actions
 */
export declare class WorkerActions {
    static registerActions(): void;
    private static blockActionUntilReservationEvent;
    private static acceptTask;
    private static rejectTask;
    private static completeTask;
    private static wrapupTask;
    private static selectTask;
    private static setActivity;
    private static transferTask;
    private static cancelTransfer;
    private static kickParticipant;
    private static holdParticipant;
    private static unholdParticipant;
    private static toggleDTMFDialpad;
    private static setDTMFDialpadDigits;
    private static updateWorkerActionPayload;
    private static updateWorkerParticipantActionPayload;
    private static updateAcceptTaskPayload;
    private static updateWorkerSetActivityPayload;
    private static logout;
}
export declare const isValidTaskPayload: (task: ITask) => (payload: any) => boolean;
export declare const isValidWorkerActionPayload: (task: ITask) => (payload: any) => boolean;
export declare const isValidWorkerParticipantActionPayload: (task: ITask, targetSid: string) => (payload: WorkerParticipantActionPayload) => boolean;
