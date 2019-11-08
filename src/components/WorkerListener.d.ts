import { SyncClient } from "twilio-sync";
import { IWorker } from "../models";
import { SupervisorWorkerState } from "../state/State.definition";
export declare class WorkerListener {
    private _state;
    private liveQuery;
    private lastQueryUUID;
    private taskFilter;
    private onTasksUpdated;
    constructor(worker: IWorker, insightsClient: SyncClient, onTasksUpdated: (item: WorkerListener) => void, taskFilter: string);
    readonly state: SupervisorWorkerState;
    updateWorker(worker: IWorker): void;
    private getTasksFromItems;
    private updateTasksInState;
    private onTasksItemsUpdated;
    private onTaskItemUpdated;
    private onTaskItemRemoved;
    private initInsightsQuery;
    unInit(): void;
}
