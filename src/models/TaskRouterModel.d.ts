import { ITask, IWorker, TaskTransfer } from "./CommonModels";
import { Worker, Reservation } from "twilio-taskrouter";
/**
 * @private
 */
export declare class TaskRouterTask implements ITask {
    private _task;
    private _reservation;
    private _incomingTransferObject;
    private _outgoingTransferObject;
    constructor(reservation: Reservation);
    readonly source: any;
    readonly sourceObject: any;
    readonly addOns: any;
    readonly age: any;
    readonly attributes: any;
    readonly dateCreated: any;
    readonly dateUpdated: any;
    readonly priority: any;
    readonly queueName: any;
    readonly queueSid: any;
    readonly reason: any;
    readonly sid: any;
    readonly taskSid: any;
    readonly status: any;
    readonly taskStatus: any;
    readonly taskChannelSid: any;
    readonly taskChannelUniqueName: any;
    readonly timeout: any;
    readonly workflowName: any;
    readonly workflowSid: any;
    readonly workerSid: any;
    readonly defaultFrom: any;
    readonly channelType: any;
    readonly incomingTransferObject: TaskTransfer;
    readonly outgoingTransferObject: TaskTransfer;
    readonly conference: import("../state/ConferencesState").Conference;
    transfer: (to: string, options: any) => any;
    setAttributes: (attributes: object) => any;
    wrapUp: () => any;
    complete: () => any;
    hold: () => any;
    unhold: () => any;
    holdParticipant: (targetSid: string) => any;
    unholdParticipant: (targetSid: string) => any;
    kick: (targetSid: string) => any;
    cancelTransfer: () => any;
}
/**
 * @private
 */
export declare class TaskRouterWorker implements IWorker<Worker> {
    private _source;
    constructor(source: Worker);
    readonly source: any;
    readonly sid: any;
    readonly name: any;
    readonly fullName: any;
    readonly activityName: any;
    readonly attributes: any;
    readonly dateUpdated: any;
    readonly isAvailable: any;
    readonly activityDuration: string;
}
