import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { WorkerProfileProps } from "./WorkerProfile";
export declare const displayName = "WorkerCanvasProfile";
export declare const contentStore: DynamicContentStore;
export declare class WorkerProfileImpl extends React.PureComponent<WorkerProfileProps> {
    render(): JSX.Element;
    private renderDetails;
    private handleChange;
}
