import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { RootContainerChildrenProps } from "./RootContainer.definitions";
export declare const displayName = "RootContainer";
export declare const contentStore: DynamicContentStore;
export declare class RootContainerImpl extends React.PureComponent<RootContainerChildrenProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
