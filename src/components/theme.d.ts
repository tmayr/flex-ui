import { OptionalThemeProps } from "emotion-theming";
import { Theme as ControlsTheme, ButtonThemeProps, CSSProps, MenuThemeProps, CoreThemeColors } from "@twilio/frame-ui";
import { CallCanvasThemeProps } from "./canvas/CallCanvas/CallCanvas.definitions";
import { IncomingTaskCanvasThemeProps } from "./canvas/IncomingTaskCanvas/IncomingTaskCanvas.definitions";
import { NoTasksCanvasThemeProps } from "./canvas/NoTaskCanvas/NoTasksCanvas";
import { ParticipantsCanvasThemeProps } from "./canvas/ParticipantsCanvas/ParticipantsCanvas.definitions";
import { TaskCanvasThemeProps } from "./canvas/TaskCanvas/TaskCanvas.definitions";
import { TaskCanvasThemeProps as SupervisorTaskCanvasThemeProps } from "./supervisor/TaskCanvas/TaskCanvas";
import { TaskDetailsPanelThemeProps } from "./canvas/TaskDetailsPanel/TaskDetailsPanel.definitions";
import { TaskInfoPanelThemeProps } from "./canvas/TaskInfoPanel/TaskInfoPanel.definitions";
export interface ChannelColors {
    inactive: string;
    call: string;
    video: string;
    sms: string;
    chat: string;
    facebook: string;
    line: string;
    whatsapp: string;
    custom: string;
}
export interface BaseThemeColors {
    holdColor: string;
    declineColor: string;
    acceptColor: string;
    declineTextColor: string;
    acceptTextColor: string;
    completeTaskColor: string;
    flexBlueColor: string;
    agentAvailableColor: string;
    agentBusyColor: string;
    agentUnavailableColor: string;
    agentOfflineColor: string;
}
/**
 * Theme interface
 *
 * @interface Theme
 * @extends {ControlsTheme}
 */
export interface Theme extends ControlsTheme {
    colors: CoreThemeColors & BaseThemeColors;
    name?: string;
    UserActivityControls: {
        Divider: CSSProps;
    } & MenuThemeProps;
    LoginView: {
        Container: CSSProps;
        LoginButton: CSSProps;
        Logo: CSSProps;
    };
    RuntimeLoginView: {
        Container: CSSProps;
        LoginButton: CSSProps;
    };
    LoginFormView: {
        Container: CSSProps;
        LoginButton: CSSProps;
    };
    RootContainer: CSSProps;
    AgentDesktopView: {
        Panel1: CSSProps;
        Panel2: CSSProps;
        ContentSplitter: CSSProps;
    };
    MainHeader: {
        Container: CSSProps;
        Button: ButtonThemeProps;
    };
    MainContainer: CSSProps;
    SideNav: {
        Container: CSSProps;
        Button: ButtonThemeProps;
        Icon: ButtonThemeProps;
    };
    TaskCanvas: TaskCanvasThemeProps;
    TaskCanvasHeader: {
        Container: CSSProps;
        EndTaskButton: ButtonThemeProps;
        WrapupTaskButton: ButtonThemeProps;
    };
    IncomingTaskCanvas: IncomingTaskCanvasThemeProps;
    CallCanvas: CallCanvasThemeProps;
    TaskInfoPanel: TaskInfoPanelThemeProps;
    TaskDetailsPanel: TaskDetailsPanelThemeProps;
    TaskList: {
        Filter: {
            Container: CSSProps;
            EntryButton: CSSProps;
            Menu: MenuThemeProps;
        };
        Item: {
            Container: CSSProps;
            SelectedContainer: CSSProps;
            Icon: CSSProps;
            Buttons: {
                DefaultButton: CSSProps;
                AcceptButton: CSSProps;
                RejectButton: CSSProps;
            };
        };
    };
    TaskCard: {
        Container: {
            Default: CSSProps;
            Selected: CSSProps;
            Hover: CSSProps;
        };
        IconArea: {
            Default: CSSProps;
        };
        ContentArea: {
            Default: CSSProps;
            Inactive: CSSProps;
        };
    };
    TaskCardPlaceholder: CSSProps;
    NoTasksCanvas: NoTasksCanvasThemeProps;
    CRMContainer: {
        Container: CSSProps;
        Placeholder: {
            Container: CSSProps;
            Icon: CSSProps;
            Button: CSSProps;
            Hint: CSSProps;
        };
    };
    Supervisor: {
        Container: CSSProps;
        TaskCanvas: SupervisorTaskCanvasThemeProps;
        WorkerCanvas: {
            Container: CSSProps;
            Header: CSSProps;
            SectionCaption: CSSProps;
        };
        FilterButton: CSSProps;
        Search: {
            Container: CSSProps;
            Button: CSSProps;
        };
    };
    WorkerDirectory: {
        Container: CSSProps;
        Header: {
            Button: CSSProps;
            Container: CSSProps;
        };
        ItemsContainer: CSSProps;
        Item: CSSProps;
        ItemActionButton: CSSProps;
        QueueItem: {
            Avatar: CSSProps;
        };
    };
    WorkerSkills: {
        SaveButton: CSSProps;
        CancelButton: CSSProps;
        DeleteButton: CSSProps;
    };
    LoadingView: {
        Container: CSSProps;
    };
    ParticipantsCanvas: ParticipantsCanvasThemeProps;
    QueueStats: {
        Container: CSSProps;
        TilesGrid: CSSProps;
        TableContainer: CSSProps;
    };
    QueuesStats: {
        Container: CSSProps;
        TilesGrid: CSSProps;
        TableContainer: CSSProps;
    };
    ToggleLoggingPanel: {
        IconButton: CSSProps;
        Button: CSSProps;
        Panel: CSSProps;
    };
}
declare const _default: import("react-emotion").CreateStyled<Theme>;
export default _default;
export declare type PropsWithTheme<P> = OptionalThemeProps<P, Theme>;
/**
 * @typedef ThemeProps
 * @property {Theme} [theme]
 */
export declare type ThemeProps = {
    theme?: Theme;
};
export declare const withTheme: <P, C>(Component: C) => C;
