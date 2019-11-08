import * as React from "react";
import { TaskDetailsPanelProps } from "./TaskDetailsPanel.definitions";
/**
 * @classdesc This component renders the task details panel.
 * Can be themed with [theme.TaskDetailsPanel]{@link TaskDetailsPanel.TaskDetailsPanelThemeProps}
 * @component
 * @hideconstructor
 * @param {TaskDetailsPanel.TaskDetailsPanelProps} props - Properties to be passed to configure this component.
 * @category Components / Basic
 */
export declare class TaskDetailsPanel extends React.PureComponent<TaskDetailsPanelProps> {
    private refreshTimer;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private renderContainer;
}
