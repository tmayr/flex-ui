import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ViewCollectionChildrenProps } from "./ViewCollection";
export declare const displayName = "ViewCollection";
export declare const contentStore: DynamicContentStore;
export declare class ViewCollectionImpl extends React.PureComponent<ViewCollectionChildrenProps, any> {
    private keysOfViewsThatHaveBeenMounted;
    private getPathnameFromProps;
    private getRouteFromView;
    private isActiveView;
    private shallRenderView;
    private registerViewHavingBeenMounted;
    private renderRouteChildren;
    private updateChildren;
    render(): JSX.Element;
}
