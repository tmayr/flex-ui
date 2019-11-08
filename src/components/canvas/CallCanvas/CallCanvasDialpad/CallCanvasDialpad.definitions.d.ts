import { TaskContextProps } from "../../../context/TaskContext";
export interface DialpadState {
    digits: string;
}
/**
 * Properties of call canvas dialpad.
 * @typedef {TaskContextProps} CallCanvas.CallCanvasChildrenProps
 * @property {DialpadState} dialpadState - Represents the state of the dialpad.
 */
export interface CallCanvasDialpadProps {
    dialpadState: DialpadState;
}
/**
 * Properties of children in call canvas dialpad.
 * @typedef {TaskContextProps} CallCanvas.CallCanvasChildrenProps
 */
export interface CallCanvasDialpadChildrenProps extends CallCanvasDialpadProps, TaskContextProps {
}
