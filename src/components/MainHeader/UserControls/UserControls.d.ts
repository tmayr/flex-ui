/// <reference types="react-redux" />
import * as React from "react";
import { WorkerState } from "../../../state/WorkerState";
export * from "./UserControls.Components";
/**
 * Properties of UserControls.
 * @typedef {object} UserControls.UserControlsChildrenProps
 * @property {WorkerState} [worker] - Worker state.
 */
export interface UserControlsChildrenProps {
    worker: WorkerState;
}
/**
 * @classdesc This is a container for UserControls.
 * @component
 * @hideconstructor
 * @category Components / Basic
 */
export declare class UserControls extends React.PureComponent {
    render(): JSX.Element;
}
export declare const Connected: React.ComponentClass<Pick<UserControlsChildrenProps & import("../..").ThemeProps, "theme">, any> & {
    WrappedComponent: React.ComponentType<UserControlsChildrenProps & import("../..").ThemeProps>;
};
