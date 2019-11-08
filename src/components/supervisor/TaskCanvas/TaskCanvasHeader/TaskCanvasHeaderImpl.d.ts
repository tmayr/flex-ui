import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ThemeProps } from "../../../theme";
import { TaskContextProps } from "../../../context";
export declare const displayName = "SupervisorTaskCanvasHeader";
export declare const contentStore: DynamicContentStore;
export declare class TaskCanvasHeaderImpl extends React.PureComponent<ThemeProps & TaskContextProps> {
    private refreshTimer;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleCloseTask;
}
