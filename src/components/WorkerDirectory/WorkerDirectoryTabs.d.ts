import * as React from "react";
import { TaskContextProps } from "../context/TaskContext";
export interface WorkerDirectoryTabsProps extends TaskContextProps {
    isWarmTransferEnabled: boolean;
}
export declare class WorkerDirectoryTabs extends React.PureComponent<WorkerDirectoryTabsProps> {
    static readonly friendlyName = "WorkerDirectoryTabs";
    static readonly displayName = "WorkerDirectoryTabs";
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
