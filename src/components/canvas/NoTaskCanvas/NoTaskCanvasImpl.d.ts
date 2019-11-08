import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { NoTasksCanvasChildrenProps } from "./NoTasksCanvas";
export declare const displayName = "NoTasksCanvas";
export declare const contentStore: DynamicContentStore;
export declare class NoTasksCanvasImpl extends React.PureComponent<NoTasksCanvasChildrenProps> {
    render(): JSX.Element;
    private handleChange;
}
