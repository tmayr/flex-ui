import { WorkerQueue, WorkspaceStats, QueuesStateInterface, QueuesFilterFunction } from "./QueuesStateTypes";
export declare const FlexActivityUnavailable: {
    available: boolean;
    name: string;
    sid: string;
};
export declare const FlexActivityAvailable: {
    available: boolean;
    name: string;
    sid: string;
};
export declare const FlexActivityBreak: {
    available: boolean;
    name: string;
    sid: string;
};
export declare const FlexActivityOffline: {
    available: boolean;
    name: string;
    sid: string;
};
export declare const queue1: WorkerQueue;
export declare const queue2: WorkerQueue;
export declare const queue3: WorkerQueue;
export declare const queueAdded: WorkerQueue;
export declare const queue3Updated: WorkerQueue;
export declare const workspaceStats: WorkspaceStats;
export declare function getQueuesState(): QueuesStateInterface;
export declare function getQueuesStateAfterSET_QUEUES(): QueuesStateInterface;
export declare function getQueuesStateAfterSET_WORKSPACE_STATS(): QueuesStateInterface;
export declare function getQueuesStateAfterADD_QUEUE(): QueuesStateInterface;
export declare function getQueuesStateAfterUPDATE_QUEUE(): QueuesStateInterface;
export declare function getQueuesStateAfterUPDATE_FILTER(filter: QueuesFilterFunction): QueuesStateInterface;
export declare function getQueuesStateAfterREMOVE_QUEUE(): QueuesStateInterface;
export declare function getInitialState(): QueuesStateInterface;
