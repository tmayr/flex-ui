import * as React from "react";
import { TaskListItemChildrenProps } from "../TaskListItem";
export declare class TaskListBaseItemImpl extends React.PureComponent<TaskListItemChildrenProps> {
    static defaultProps: Partial<TaskListItemChildrenProps>;
    private refreshTimer;
    static readonly displayName = "TaskListBaseItem";
    render(): JSX.Element;
    componentWillMount(): void;
    componentWillUnmount(): void;
    private handleContainerClick;
}
