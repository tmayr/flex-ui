import * as React from "react";
import { ThemeProps } from "../../theme";
import { ContentFragment, DynamicContentStore } from "@twilio/frame-ui";
import { WorkerQueue } from "../../../state/QueuesState";
export declare const displayName = "QueuesDataTable";
export declare const Content: DynamicContentStore;
export interface QueuesDataTableImplStateProps {
    queuesList: WorkerQueue[];
}
export interface QueuesDataTableImplOwnProps {
    children?: React.ReactElement<ContentFragment>;
    sortable: boolean;
}
export declare class QueuesDataTableImpl extends React.PureComponent<QueuesDataTableImplStateProps & QueuesDataTableImplOwnProps & ThemeProps> {
    render(): JSX.Element;
    private getTaskQueueSid;
    private renderFriendlyName;
    private renderActiveTasks;
    private renderWaitingTasks;
    private renderLongestWaitingTime;
    private renderAgents;
}
