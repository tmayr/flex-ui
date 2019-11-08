import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { MainContainerChildrenProps } from "./MainContainer";
export declare const displayName = "MainContainer";
export declare const contentStore: DynamicContentStore;
export declare class MainContainerImpl extends React.PureComponent<MainContainerChildrenProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handleWindowResize;
    private showSupervisor;
    render(): JSX.Element;
}
