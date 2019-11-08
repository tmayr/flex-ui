import { ITask, IWorker } from "../models";
/**
 * State of a worker
 * @typedef SupervisorWorkerState
 * @property {IWorker} worker worker instance
 * @property {Array<ITask>} tasks tasks of the worker
 */
export interface SupervisorWorkerState {
    worker: IWorker;
    tasks: Array<ITask>;
}
