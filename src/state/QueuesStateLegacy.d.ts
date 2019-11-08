import { Dispatch } from "redux";
interface ActivityStatistic {
    workers: number;
    friendly_name: string;
    sid: string;
    available?: boolean;
    offline?: boolean;
}
interface TaskQueueRealTimeStatsResponseInterface {
    tasks_by_status: {
        assigned: number;
        wrapping: number;
        reserved: number;
        pending: number;
    };
    workspace_sid: string;
    total_available_workers: number;
    account_sid: string;
    total_eligible_workers: number;
    tasks_by_priority: object;
    url: string;
    activity_statistics: Array<ActivityStatistic>;
    task_queue_sid: string;
    longest_task_waiting_age: number;
    total_tasks: number;
}
export interface TaskQueueInterface extends TaskQueueRealTimeStatsResponseInterface {
    friendly_name: string;
}
export interface QueuesStateInterface {
    queuesList: {
        [key: string]: TaskQueueInterface;
    };
    aggregatedData: AggregatedData;
    hasFetchedList: boolean;
}
interface LongestWaitQueueData {
    time: number;
    friendlyName: string;
}
export declare const initialState: QueuesStateInterface;
interface ActionInterface {
    type: string;
    payload: any;
}
export declare const UPDATE_QUEUES = "FLEX_UPDATE_QUEUES";
export declare const NO_QUEUE_FOUND = "FLEX_NO_QUEUE_FOUND";
export declare function reduce(state: QueuesStateInterface, action: ActionInterface): QueuesStateInterface;
export declare class Actions {
    private static _dispatcher;
    private static workspaceSid;
    private static accountSid;
    private static isPollingData;
    private static pollingInterval;
    private static baseUrl;
    private static activities;
    private static fetchedQueuesList;
    static dispatcher: Dispatch<any>;
    static startPolling(): Promise<void>;
    static handleFetchedQueues(): Promise<void | {
        type: string;
    }>;
    static stopPolling(): void;
    private static fetchTaskQueuesList;
    private static fetchTaskQueueRealTimeStats;
    private static fetchWorkspaceRealTimeStats;
    private static fetchTaskQueue;
    private static fetchWorkspace;
    private static makeAuthenticatedGetCall;
    private static setQueueActivitiesDetails;
    private static getActivityDetails;
}
interface AgentsByActivity {
    availableAgents: number;
    unavailableAgents: number;
    offlineAgents: number;
}
export interface AggregatedData {
    activeTasks: number;
    waitingTasks: number;
    agentByActivity: AgentsByActivity;
    longestWaitQueue: LongestWaitQueueData;
}
export declare class AggregatedDataHelpers {
    static getWorkspaceRealtimeStats(workspaceRealtimeStats: any, queues: {
        [key: string]: TaskQueueInterface;
    }): AggregatedData;
    private static getLongestQueueWaitFriendlyName;
    static getQueueAgentsByActivity(acc: AgentsByActivity, queue: TaskQueueInterface): AgentsByActivity;
    static getWorkspaceAgentsByActivity(realtime: any): AgentsByActivity;
    private static isOfflineActivity;
}
export {};
