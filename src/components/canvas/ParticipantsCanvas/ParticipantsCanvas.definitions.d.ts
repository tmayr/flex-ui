import { CSSProps } from "@twilio/frame-ui";
import { TaskCanvasChildrenProps } from "../TaskCanvas";
import { ParticipantCanvasThemeProps } from "../ParticipantCanvas/ParticipantCanvas.definitions";
/**
 * Properties of participants canvas theme.
 * @typedef ParticipantsCanvas.ParticipantsCanvasNotificationThemeProps
 * @property {CSSProps} Container - Styles participants container.
 */
interface ParticipantsCanvasNotificationThemeProps {
    Container: CSSProps;
}
/**
 * @typedef ParticipantsCanvas.ParticipantsCanvasThemeProps
 * @property {ParticipantCanvas.ParticipantCanvasThemeProps} ParticipantCanvas - Styles for a single participant.
 * @property {ParticipantsCanvas.ParticipantsCanvasNotificationThemeProps} Notification - Styles for notification in participants canvas.
 */
export interface ParticipantsCanvasThemeProps {
    ParticipantCanvas: ParticipantCanvasThemeProps;
    Notification: ParticipantsCanvasNotificationThemeProps;
}
/**
 * Properties of children in participants canvas.
 * @typedef ParticipantsCanvas.ParticipantsCanvasProps
 * @property {boolean} [includeMyself] - Identifies if current logged in worker is included.
 * @property {boolean} [hideActions] - Identifies if the participant actions are hidden
 */
export interface ParticipantsCanvasProps {
    includeMyself?: boolean;
    hideActions?: boolean;
}
/**
 * Properties of children in participants canvas.
 * @typedef {ParticipantsCanvas.ParticipantsCanvasProps} ParticipantsCanvas.ParticipantsCanvasChildrenProps
 * @property {ParticipantsCanvas.ParticipantsCanvasThemeProps} [theme.ParticipantsCanvas] - theme.
 */
export interface ParticipantsCanvasChildrenProps extends ParticipantsCanvasProps, TaskCanvasChildrenProps {
}
export {};
