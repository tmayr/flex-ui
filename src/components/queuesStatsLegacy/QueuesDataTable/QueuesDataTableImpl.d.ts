import * as React from "react";
import { ThemeProps } from "../../theme";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskQueueInterface } from "../../../state/QueuesStateLegacy";
export declare const displayName = "QueuesDataTable";
export declare const Content: DynamicContentStore;
export interface QueuesDataTableImplProps {
    queuesList: Array<TaskQueueInterface>;
}
export declare class QueuesDataTableImpl extends React.PureComponent<Partial<QueuesDataTableImplProps & ThemeProps>> {
    constructor(props: any);
    render(): JSX.Element;
    private getTaskQueueSid;
    private renderFriendlyName;
    private renderActiveTasks;
    private renderWaitingTasks;
    private renderLongestWaitingTime;
    private mappedColors;
    private renderAgents;
}
