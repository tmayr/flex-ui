import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { AgentDesktopViewChildrenProps } from "../AgentDesktopView";
/**
 * @classdesc Second panel of AgentDesktopView
 * @component
 * @hideconstructor
 * @param {AgentDesktopView.AgentDesktopViewChildrenProps} props - props
 * @category Components / Programmable
 */
export declare class Panel2 extends React.PureComponent<AgentDesktopViewChildrenProps> {
    private static readonly friendlyName;
    static readonly displayName = "AgentDesktopView.Panel2";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<AgentDesktop.AgentDesktopViewChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
