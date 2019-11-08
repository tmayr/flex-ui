export interface QueuesStateInterface {
    queuesList: {
        [key: string]: WorkerQueue;
    };
    hasFetchedList: boolean;
    workspaceStats?: WorkspaceStats;
    filter?: QueuesFilterFunction;
}
/**
 * @typedef ActivityStatistic
 * @memberof QueuesStats
 *
 * @property {string} sid
 * @property {number} workers
 * @property {string} friendly_name
 * @property {number} available_workers
 */
export interface ActivityStatistic {
    sid: string;
    workers: number;
    friendly_name: string;
    available_workers: number;
}
export interface Queue {
    key: string;
    activity_statistics: ActivityStatistic[];
    tasks_by_priority: {
        [key: string]: number;
    };
    tasks_by_status: {
        reserved: number;
        pending: number;
        assigned: number;
        wrapping: number;
    };
    total_tasks: number;
    longest_task_waiting_sid: string | null;
    longest_task_waiting_from: string | null;
}
/**
 * @typedef WorkerQueue
 * @memberof QueuesStats
 *
 * @property {string} friendly_name
 * @property {string} key
 * @property {number} total_available_workers
 * @property {number} total_eligible_workers
 * @property {Array<QueuesStats.ActivityStatistic>} activity_statistics
 * @property {Object.<string, number>} tasks_by_priority
 * @property {Object.<{ reserved: number, pending: number, assigned: number, wrapping: number }>} tasks_by_status
 * @property {number} total_tasks
 * @property {string|null} longest_task_waiting_sid
 * @property {number} longest_task_waiting_age
 */
export interface WorkerQueue extends Queue {
    friendly_name: string;
    total_available_workers: number;
    total_eligible_workers: number;
}
export interface WorkspaceStats extends Queue {
    total_workers: number;
}
/**
 * An alias for a function used as a parameter for {@link QueuesStats.setFilter}.
 * <pre>(queue: [WorkerQueue]{@link QueuesStats.WorkerQueue}) => boolean</pre>
 * @typedef QueuesFilterFunction
 * @memberof QueuesStats
 */
export declare type QueuesFilterFunction = (queue: WorkerQueue) => boolean;
export declare const SET_QUEUES = "FLEX_SET_QUEUES";
export declare const ADD_QUEUE = "FLEX_ADD_QUEUE";
export declare const UPDATE_QUEUE = "FLEX_UPDATE_QUEUE";
export declare const REMOVE_QUEUE = "FLEX_REMOVE_QUEUE";
export declare const SET_WORKSPACE_STATS = "FLEX_SET_WORKSPACE_STATS";
export declare const UPDATE_FILTER = "FLEX_UPDATE_QUEUES_FILTER";
export declare type QueuesStateActionTypes = {
    type: typeof SET_QUEUES;
    payload: WorkerQueue[];
} | {
    type: typeof ADD_QUEUE;
    payload: WorkerQueue;
} | {
    type: typeof UPDATE_QUEUE;
    payload: WorkerQueue;
} | {
    type: typeof REMOVE_QUEUE;
    payload: string;
} | {
    type: typeof SET_WORKSPACE_STATS;
    payload: WorkspaceStats;
} | {
    type: typeof UPDATE_FILTER;
    payload: QueuesFilterFunction;
};
