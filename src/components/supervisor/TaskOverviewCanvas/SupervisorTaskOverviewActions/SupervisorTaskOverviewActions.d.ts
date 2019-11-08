/// <reference types="react-redux" />
import { TaskCanvasChildrenProps } from "../../../canvas/TaskCanvas";
import { ThemeProps } from "../../../theme";
import { CallMonitoringStatus } from "../../../../state/SupervisorState";
import * as React from "react";
export interface SupervisorTaskOverviewActionsImplProps extends TaskCanvasChildrenProps, ThemeProps {
    monitorStatus?: CallMonitoringStatus;
}
export declare class SupervisorTaskOverviewActions extends React.Component<TaskCanvasChildrenProps> {
    render(): JSX.Element;
}
export declare const Connected: React.ComponentClass<Pick<SupervisorTaskOverviewActionsImplProps, never>, any> & {
    WrappedComponent: React.ComponentType<SupervisorTaskOverviewActionsImplProps>;
};
