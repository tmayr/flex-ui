import { DynamicContentStore } from "@twilio/frame-ui";
import * as React from "react";
import { IQueue, IWorker } from "../../models";
import { WorkerDirectoryTabsProps } from "./WorkerDirectoryTabs";
export declare const displayName = "WorkerDirectoryTabs";
export declare const contentStore: DynamicContentStore;
export interface WorkerDirectoryState {
    workers: Array<IWorker>;
    queues: Array<IQueue>;
}
export declare class WorkerDirectoryTabsImpl extends React.PureComponent<WorkerDirectoryTabsProps> {
    private queueSearchInputElementRef;
    private workerSearchInputElementRef;
    private workersSearch;
    private queuesSearch;
    private queueSearchTimer;
    private workerSearchTimer;
    private onTransferQueueClick;
    private onTransferClick;
    private onWorkerSearchInputChange;
    private onQueueSearchInputChange;
    state: WorkerDirectoryState;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
