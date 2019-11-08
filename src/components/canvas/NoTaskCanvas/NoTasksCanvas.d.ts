/// <reference types="react-redux" />
import * as React from "react";
import { WorkerState } from "../../../state/WorkerState";
import { CSSProps } from "@twilio/frame-ui";
/**
 * Properties of no task canvas theme.
 * @typedef NoTasksCanvas.NoTasksCanvasThemeProps
 * @property {CSSProps} Container - Styles container.
 * @property {CSSProps} Hint - Styles hint text container.
 */
export interface NoTasksCanvasThemeProps {
    Container: CSSProps;
    Hint: CSSProps;
}
/**
 * Properties of children in no task Canvas.
 * @typedef NoTasksCanvas.NoTasksCanvasChildrenProps
 * @property {NoTasksCanvas.NoTasksCanvasThemeProps} [theme.NoTasksCanvas] - theme.
 * @property {WorkerState} [worker] - current worker.
 */
export interface NoTasksCanvasChildrenProps {
    worker?: WorkerState;
}
/**
 * @classdesc This component renders a canvas if no tasks are available.
 * Can be themed with [theme.NoTasksCanvas]{@link NoTasksCanvas.NoTasksCanvasThemeProps}
 * @component
 * @hideconstructor
 * @category Components / Programmable
 */
export declare class NoTasksCanvas extends React.PureComponent {
    private static readonly friendlyName;
    static readonly displayName = "NoTasksCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<NoTasksCanvas.NoTasksCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: React.ComponentClass<Pick<NoTasksCanvasChildrenProps, never>, any> & {
    WrappedComponent: React.ComponentType<NoTasksCanvasChildrenProps>;
};
