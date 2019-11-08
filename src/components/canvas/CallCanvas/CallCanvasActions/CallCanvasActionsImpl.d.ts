import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { CallCanvasActionsChildrenProps } from "./CallCanvasActions";
export declare const displayName = "CallCanvasActions";
export declare const contentStore: DynamicContentStore;
export declare class CallCanvasActionsImpl extends React.PureComponent<CallCanvasActionsChildrenProps> {
    private onHoldClick;
    private onHangupClick;
    private onDirectoryClick;
    private onDialpadClick;
    private getThemeForButtons;
    render(): JSX.Element;
}
