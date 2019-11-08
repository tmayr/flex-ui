import { ITask, TaskTaskStatus, IWorker, TaskReservationStatus, IQueue } from "./CommonModels";
/**
 * @private
 */
export interface InsightsWorkerData {
    worker_sid: string;
    friendly_name: string;
    activity_name: string;
    attributes: any;
    date_updated: string;
    date_activity_changed: string;
}
/**
 * @private
 */
export interface InsightsTaskData {
    key?: string;
    attributes: any;
    date_created: string;
    date_updated: string;
    queue_name: string;
    reservation_sid: string;
    status: TaskReservationStatus;
    task_age: number;
    task_channel_type: string;
    task_channel_unique_name: string;
    task_date_created: string;
    task_priority: number;
    task_sid: string;
    task_status: TaskTaskStatus;
    worker_name: string;
    worker_sid: string;
    workspace_sid: string;
}
/**
 * @private
 */
export interface InsightsQueueData {
    date_updated: string;
    queue_sid: string;
    queue_name: string;
    workspace_sid: string;
}
/**
 * @private
 */
export interface InsightsWorkerBySid {
    [sid: string]: InsightsWorkerData;
}
/**
 * @private
 */
export interface InsightsQueueBySid {
    [sid: string]: InsightsQueueData;
}
/**
 * @private
 */
export interface InsightsTaskBySid {
    [sid: string]: InsightsTaskData;
}
/**
 * @private
 */
export declare class InsightsTask implements ITask {
    complete: () => never;
    setAttributes: (attributes: object) => never;
    wrapUp: () => never;
    transfer: (to: string, options: any) => never;
    hold: () => never;
    unhold: () => never;
    holdParticipant: () => never;
    unholdParticipant: () => never;
    kick: () => never;
    cancelTransfer: () => never;
    private _source;
    constructor(source: InsightsTaskData);
    readonly source: InsightsTaskData;
    readonly sourceObject: InsightsTaskData;
    readonly addOns: any;
    readonly age: number;
    readonly attributes: any;
    readonly dateCreated: Date;
    readonly dateUpdated: Date;
    readonly priority: number;
    readonly queueName: string;
    readonly queueSid: any;
    readonly reason: any;
    readonly taskSid: string;
    readonly status: TaskReservationStatus;
    readonly taskStatus: TaskTaskStatus;
    readonly taskChannelSid: any;
    readonly taskChannelUniqueName: string;
    readonly timeout: any;
    readonly workflowName: any;
    readonly workflowSid: any;
    readonly sid: string;
    readonly workerSid: string;
    readonly defaultFrom: any;
    readonly channelType: any;
    readonly incomingTransferObject: any;
    readonly outgoingTransferObject: any;
    readonly conference: import("../state/ConferencesState").Conference;
}
/**
 * @private
 */
export declare class InsightsWorker implements IWorker<InsightsWorkerData> {
    private _source;
    constructor(source: InsightsWorkerData);
    private static _availabilityByNameCache;
    readonly source: InsightsWorkerData;
    readonly sid: string;
    readonly name: string;
    readonly fullName: any;
    readonly activityName: string;
    readonly attributes: any;
    readonly dateUpdated: Date;
    readonly activityDuration: string;
    readonly isAvailable: boolean;
    private static ensureAvailabilityCache;
    private findAvailabilityByActivityName;
}
/**
 * @private
 */
export declare class InsightsQueue implements IQueue<InsightsQueueData> {
    private _source;
    constructor(source: InsightsQueueData);
    readonly source: InsightsQueueData;
    readonly sid: string;
    readonly name: string;
    readonly dateUpdated: Date;
    readonly workspaceSid: string;
}
