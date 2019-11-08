/// <reference types="react" />
import { TaskCanvasChildrenProps } from "../TaskCanvas";
import { DynamicContentStore, CSSProps } from "@twilio/frame-ui";
/**
 * Properties of taks details panel theme.
 * @typedef TaskDetailsPanel.TaskDetailsPanelThemeProps
 * @property {CSSProps} Container - Styles task details panel container.
 * @property {CSSProps} IconContainer - Styles icon container in task details panel.
 * @property {CSSProps} SecondLine - Styles second line container in task details panel.
 */
export interface TaskDetailsPanelThemeProps {
    Container: CSSProps;
    IconContainer: CSSProps;
    SecondLine: CSSProps;
}
/**
 * Properties of Task Details Panel.
 * @typedef {TaskCanvas.TaskCanvasChildrenProps} TaskDetailsPanel.TaskDetailsPanelProps
 * @property {TaskDetailsPanel.TaskDetailsPanelThemeProps} [theme.TaskDetailsPanel] - theme.
 * @property {DynamicContentStore<TaskDetailsPanel.TaskDetailsPanelChildrenProps>} content - Represents dynamic content store.
 * @property {string} [titleLine] - Title string shown in the task details panel.
 * @property {string} [firstLine] - First line shown in the task details panel.
 * @property {string} [secondLine] - Second line shown in the task details panel.
 * @property {React.ComponentType<Partial<TaskCanvasChildrenProps>>} [IconComponent] - Represents the icon.
 * @property {React.ComponentType<Partial<TaskCanvasChildrenProps>>} [ActionsComponent] - Represents the actions component.
 * @property {React.ReactElement} [contentComponent] - Represents the content of the taks details panel.
 */
export interface TaskDetailsPanelProps extends TaskCanvasChildrenProps {
    content: DynamicContentStore;
    titleLine?: string;
    firstLine?: string;
    secondLine?: string;
    IconComponent?: React.ComponentType<Partial<TaskCanvasChildrenProps>>;
    ActionsComponent?: React.ComponentType<Partial<TaskCanvasChildrenProps>>;
    contentComponent?: React.ReactElement<any>;
}
/**
 * Properties of children in participants canvas.
 * @typedef {TaskDetailsPanel.TaskDetailsPanelProps} TaskDetailsPanel.TaskDetailsPanelChildrenProps
 * @property {TaskDetailsPanel.TaskDetailsPanelThemeProps} [theme.TaskDetailsPanel] - theme.
 */
export interface TaskDetailsPanelChildrenProps extends TaskDetailsPanelProps {
}
