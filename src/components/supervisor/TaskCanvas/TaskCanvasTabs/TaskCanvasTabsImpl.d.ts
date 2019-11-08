import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskCanvasTabsChildrenProps } from "../../../canvas/TaskCanvasTabs";
export declare const displayName = "SupervisorTaskCanvasTabs";
export declare const contentStore: DynamicContentStore;
export declare class TaskCanvasTabsImpl extends React.PureComponent<TaskCanvasTabsChildrenProps> {
    render(): JSX.Element;
    private handleTabSelection;
    private renderOverviewTab;
}
