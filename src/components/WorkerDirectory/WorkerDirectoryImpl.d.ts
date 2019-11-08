import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { WorkerDirectoryChildrenProps } from "./WorkerDirectory";
export declare const displayName = "WorkerDirectory";
export declare const contentStore: DynamicContentStore;
export declare class WorkerDirectoryImpl extends React.PureComponent<WorkerDirectoryChildrenProps> {
    private onCloseClick;
    render(): JSX.Element;
}
