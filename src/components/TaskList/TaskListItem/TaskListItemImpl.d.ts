import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskListItemChildrenProps } from "./TaskListItem";
export declare const displayName = "TaskListItem";
export declare const contentStore: DynamicContentStore;
export declare class TaskListItemImpl extends React.PureComponent<TaskListItemChildrenProps> {
    render(): JSX.Element;
}
