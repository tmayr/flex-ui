import { ITask, IWorker } from "../models";
export declare const SupervisorStateHelper: {
    getTaskBySid(sid: string): ITask;
    getTaskByTaskSid(taskSid: string): ITask;
    getWorkerBySid(sid: string): IWorker<any>;
};
