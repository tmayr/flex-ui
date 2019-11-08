import { ThemeProps } from "../../theme";
import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui/";
import { IncomingTaskCanvasProps } from "./IncomingTaskCanvas.definitions";
export declare const displayName = "IncomingTaskCanvas";
export declare const contentStore: DynamicContentStore;
export declare class IncomingTaskCanvasImpl extends React.PureComponent<IncomingTaskCanvasProps & ThemeProps> {
    render(): JSX.Element;
}
