import * as React from "react";
import { PropsWithTheme } from "../theme";
import { DynamicContentStore } from "@twilio/frame-ui";
import { MainHeaderChildrenProps } from "./MainHeader.definitions";
export declare const displayName = "MainHeader";
export declare const contentStore: DynamicContentStore;
export declare class MainHeaderImpl extends React.PureComponent<PropsWithTheme<MainHeaderChildrenProps>> {
    render(): JSX.Element;
    private onSidebarButtonClick;
    private onSidebarButtonBlur;
}
