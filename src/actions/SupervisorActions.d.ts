import { ITask, IWorker } from "../models";
/**
 * @package
 * @typedef SelectWorkerInSupervisorPayload
 * @property {IWorker} [worker]
 * @property {string} workerSid
 * @memberof SupervisorActions
 */
export interface SelectWorkerInSupervisorPayload {
    worker?: IWorker;
    workerSid?: string;
}
/**
 * @package
 * @typedef TaskInSupervisorPayload
 * @property {ITask} [task]
 * @property {string} [sid]
 * @memberof SupervisorActions
 */
export interface TaskInSupervisorPayload {
    task?: ITask;
    sid?: string;
}
/**
 * @package
 * @typedef {TaskInSupervisorPayload} MonitorTaskPayload
 * @property {any} [extraParams]
 * @memberof SupervisorActions
 */
export interface MonitorTaskPayload extends TaskInSupervisorPayload {
    extraParams?: any;
}
/**
 * @package
 * @class SupervisorActions
 * @hideconstructor
 * @category Actions
 */
export declare class SupervisorActions {
    static registerActions(): void;
    private static monitorCall;
    private static stopMonitoringCall;
    private static selectTaskInSupervisor;
    private static selectWorkerInSupervisor;
    private static updateSelectWorkerActionPayload;
    private static updateTaskActionPayload;
}
