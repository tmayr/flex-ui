import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { CallCanvasChildrenProps } from "./CallCanvas.definitions";
export declare const displayName = "CallCanvas";
export declare const contentStore: DynamicContentStore;
export declare class CallCanvasImpl extends React.PureComponent<CallCanvasChildrenProps> {
    componentDidUpdate(): void;
    render(): JSX.Element;
}
