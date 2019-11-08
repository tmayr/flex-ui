import { AnyAction } from "redux";
import { Activity, Reservation, Worker } from "twilio-taskrouter";
import { Conference } from "./ConferencesState";
import { ITask, IWorker } from "../models";
/**
 * Worker state based on Worker SDK
 * @name WorkerState
 * @property {Map<string, ITask>} tasks map of active tasks by reservation SID
 * @property {Activity} activity current {@link https://twilio.github.io/twilio-taskrouter.js/Activity.html} of the worker
 * @property {Map<string, Activity>} activities map of all {@link https://twilio.github.io/twilio-taskrouter.js/Activity.html} instances by SID
 * @property {Object} attributes attributes of the {@link https://twilio.github.io/twilio-taskrouter.js/Worker.html}
 * @property {IWorker} worker current worker instance
 * @category State
 */
export interface WorkerState {
    readonly tasks: Map<string, ITask>;
    readonly listener: WorkerListener;
    readonly activity: Activity;
    readonly activities: Map<string, Activity>;
    readonly attributes: any;
    readonly source: Worker;
    readonly worker: IWorker;
}
export declare function reduce(state: WorkerState, action: AnyAction): WorkerState;
export declare class Actions {
    private static previousEndConferenceOnExits;
    static dispatchWorkerAction(type: string, payload: any): void;
    static init(worker: Worker): void;
    static addReservation(reservation: Reservation): void;
    static setCurrentActivity(activitySid: string): Promise<any>;
    static setCurrentActivityByName(activityName: string): Promise<void>;
    static updateEndConferenceOnExitForTask(task: ITask, newConference?: Conference): void;
    static shutdown(): void;
}
export declare class WorkerListener {
    private _worker;
    private _listening;
    private _reservationListeners;
    private currentMediaIds;
    constructor(worker: Worker);
    start(): void;
    stop(): void;
    private initAndLoadReservations;
    private stopAllReservationListeners;
    private dispatchAction;
    private stopReservationListeners;
    private initReservationListeners;
    private handleActivityUpdated;
    private handleAttributesUpdated;
    private handleWorkerReady;
    private handleReservationCreated;
    private handleReservationUpdated;
    private playSound;
    private handlePlayError;
    private stopSound;
    private handleTaskUpdated;
    isListening(): boolean;
}
