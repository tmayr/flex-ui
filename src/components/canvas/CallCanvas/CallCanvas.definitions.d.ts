import { CSSProps } from "@twilio/frame-ui";
import { TaskContextProps } from "../../context/TaskContext";
import { ThemeProps } from "../../theme";
import { DialpadState } from "./CallCanvasDialpad/CallCanvasDialpad.definitions";
/**
 * Properties of call canvas theme.
 * @typedef CallCanvas.CallCanvasThemeProps
 * @property {CSSProps} Button - Styles buttons in call canvas.
 * @property {CSSProps} HangUpButton - Styles Hangup button in call canvas.
 */
export interface CallCanvasThemeProps {
    Button: CSSProps;
    HangUpButton: CSSProps;
}
/**
 * Properties of children in call canvas.
 * @typedef {TaskContextProps} CallCanvas.CallCanvasChildrenProps
 * @property {CallCanvas.CallCanvasThemeProps} [theme.CallCanvas] - theme.
 * @property {DialpadState} dialpadState - Represents the state of the dialpad.
 */
export interface CallCanvasChildrenProps extends TaskContextProps, ThemeProps {
    dialpadState: DialpadState;
}
