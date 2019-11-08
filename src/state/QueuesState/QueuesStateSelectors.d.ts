import { AppState } from "../AppState";
import { WorkerQueue, QueuesFilterFunction } from "./QueuesStateTypes";
export declare const queuesListSelector: (state: AppState) => {
    [key: string]: WorkerQueue;
};
export declare const queuesListFilterSelector: (state: AppState) => QueuesFilterFunction;
export declare const workspaceStatsSelector: (state: AppState) => import("./QueuesStateTypes").WorkspaceStats;
export declare const queuesListArraySelector: import("reselect").OutputSelector<AppState, WorkerQueue[], (res1: {
    [key: string]: WorkerQueue;
}, res2: QueuesFilterFunction) => WorkerQueue[]>;
export declare const workspaceActiveTasksSelector: import("reselect").OutputSelector<AppState, number, (res: WorkerQueue[]) => number>;
export declare const workspaceWaitingTasksSelector: import("reselect").OutputSelector<AppState, number, (res: WorkerQueue[]) => number>;
export declare const workspaceLongestQueueSelector: import("reselect").OutputSelector<AppState, WorkerQueue, (res: WorkerQueue[]) => WorkerQueue>;
