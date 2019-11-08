import * as React from "react";
import { TaskContextProps } from "../../context/TaskContext";
/**
 * The size of the task
 * @typedef {"Small" | "Large" | "LargeSelected"} TaskListItem.TaskListItemSize
 */
export declare type TaskListItemSize = "Small" | "Large" | "LargeSelected";
/**
 * Properties of TaskListItem.
 * @typedef TaskListItem.TaskListItemProps
 * @property {boolean} [visible] - Whether the task list item is visible or not.
 * @property {boolean} [selected] - Whether the task list item is selected or not.
 * @property {string} [selectedTaskSid] - Sid of the selected task.
 * @property {Function} [onSelected] - Callback when the task is selected.
 * @property {string | React.ReactNode} [icon] - Task list item icon.
 * @property {string} [iconColor] - Icon color.
 * @property {Array<React.ReactElement<any>>} [actions] - Override default accept or reject actions.
 * @property {React.ReactNode} [firstLine] - First line displayed in the task list item.
 * @property {React.ReactNode} [secondLine] - Second line displayed in the task list item.
 * @property {React.ReactNode} [extraInfo] - Additional info displayed in the task list item.
 * @property {boolean} [large] - Whether the item is large or not. If true, the lower area is displayed.
 * @property {TaskListItem.TaskListItemSize} [itemSize] - Task list item size.
 * @property {DynamicComponentChildren<TaskListItem.TaskListItemChildrenProps>} [children] - children
 */
export interface TaskListItemProps {
    readonly visible?: boolean;
    readonly selected?: boolean;
    readonly selectedTaskSid?: string;
    readonly onSelected?: (taskSid: string) => void;
    readonly icon?: string | React.ReactNode;
    readonly iconColor?: string;
    readonly actions?: Array<React.ReactElement<any>>;
    readonly firstLine?: React.ReactNode;
    readonly secondLine?: React.ReactNode;
    readonly extraInfo?: React.ReactNode;
    readonly large?: boolean;
    readonly itemSize?: TaskListItemSize;
}
/**
 * Properties of TaskListItem.
 * @typedef {TaskListItem.TaskListItemProps | TaskContextProps} TaskListItem.TaskListItemChildrenProps
 * @property { { children: number } } [Badge] Set of properties for internal Badge element customisable by TaskChannel
 */
export interface TaskListItemChildrenProps extends TaskListItemProps, TaskContextProps {
    readonly Badge: {
        children: number;
    };
}
/**
 * @classdesc This is a container for TaskListItem.
 * @component
 * @hideconstructor
 * @param {TaskListItem.TaskListItemProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TaskListItem extends React.PureComponent<TaskListItemProps> {
    static displayName: string;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<TaskListItem.TaskListItemChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static updateAll(): void;
    /**
     * Default properties
     *
     * @static
     * @type {TaskListItem.TaskListItemProps}
     * @readonly
     */
    static readonly defaultProps: {
        itemSize: string;
    };
    render(): JSX.Element;
}
