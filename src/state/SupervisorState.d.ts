import { Action, Dispatch } from "redux";
import { SyncClient } from "twilio-sync";
import { ITask } from "../models";
import { SupervisorWorkerState } from "./State.definition";
/**
 * Maximum number of workers returned by Insights on first load
 * @type number
 * @private
 */
export declare const maxWorkersNumberFromInitialLoad = 200;
/**
 * Status of call monitoring
 * @enum {0 | 1 | 2} CallMonitoringStatus
 * @private for now private, JS would have to use 0, 1, 2 values
 * @property {0} none
 * @property {1} waiting
 * @property {2} monitoring
 */
export declare enum CallMonitoringStatus {
    none = 0,
    waiting = 1,
    monitoring = 2
}
/**
 * Call monitoring state
 * @typedef CallMonitoring
 * @property {string} [taskSid] SID of a task that is being monitored
 */
export interface CallMonitoring {
    readonly status: CallMonitoringStatus;
    readonly taskSid?: string;
}
/**
 * State of the supervisor view
 * @name SupervisorState
 * @property {CallMonitoring} callMonitoring state of call monitoring
 * @property {SupervisorWorkerState} [stickyWorker] currently selected worker state
 * @property {Array<SupervisorWorkerState>} [workers] currently showing worker states
 * @category State
 */
export interface SupervisorState {
    readonly callMonitoring: CallMonitoring;
    readonly listener?: SupervisorWorkersListener;
    readonly stickyWorker?: SupervisorWorkerState;
    readonly workers?: Array<SupervisorWorkerState>;
    readonly isLoadingWorkers?: boolean;
}
export interface SupervisorStateAction extends Action {
    readonly payload?: any;
}
export declare const ACTION_UPDATE_STATE = "SUPERVISOR_UPDATE";
export declare const ACTION_MONITORING_SUCCEEDED = "SUPERVISOR_INCOMING_CALL";
export declare function reduce(state: SupervisorState, action: SupervisorStateAction): SupervisorState;
export declare class Actions {
    private static _dispatcher;
    private static listenedConferences;
    private static callMonitoringStart;
    private static stateUpdateThrottler;
    private static pendingStateUpdate;
    private static dispatchStateUpdate;
    static dispatcher: Dispatch<any>;
    static assignInsights(insightsClient: any): void;
    static monitorCall(task: ITask): Promise<void>;
    private static manageConferenceListening;
    static updateStateWorkers(workers: Array<SupervisorWorkerState>): void;
    static startLoadingWorkers(): void;
    static updateStateStickyWorker(stickyWorker: SupervisorWorkerState): void;
    static setActiveFilterQuery(query: string, taskFilter: string): void;
    static setStickyWorkerSid(sid: string, taskSid: string): void;
    static shutdown(): void;
}
declare class SupervisorWorkersListener {
    private insightsClient;
    private workersLiveQuery;
    private stickyWorkerLiveQuery;
    private workerListeners;
    private activeFilterQuery;
    private stickyWorker;
    private stickyWorkerSid;
    private stickyTaskSid;
    private lastStickyWorkerQueryUUID;
    private taskFilter;
    constructor(insightsClient: SyncClient);
    setActiveFilterQuery(query: string, taskFilter: string): void;
    setStickyWorkerSid(workerSid: string, taskSid?: string): void;
    initInsights(): void;
    unInit(): void;
    private updateCurrentWorkers;
    private onWorkerTasksChanged;
    private loadInitialWorkers;
    private onWorkerItemUpdated;
    private onWorkerItemRemoved;
    private initStickyWorker;
    private unInitStickyWorker;
    private loadInitialStickyWorker;
    private onStickyWorkerUpdate;
    private onStickyWorkerRemoved;
}
export {};
