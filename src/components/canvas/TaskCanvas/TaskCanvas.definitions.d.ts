import { CSSProps } from "@twilio/frame-ui";
import { TaskContextProps } from "../../context/TaskContext";
import { ThemeProps } from "../../theme";
/**
 * Properties of task canvas theme.
 * @typedef TaskCanvas.TaskCanvasThemeProps
 * @property {CSSProps} Container - Styles task canvas container.
 */
export interface TaskCanvasThemeProps {
    Container: CSSProps;
}
/**
 * Properties of children in task canvas.
 * @typedef {TaskContextProps} TaskCanvas.TaskCanvasChildrenProps
 * @property {TaskCanvas.TaskCanvasThemeProps} [theme.TaskCanvas] - theme.
 */
export interface TaskCanvasChildrenProps extends TaskContextProps, ThemeProps {
}
