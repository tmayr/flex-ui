import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { LiveCommsBarChildrenProps } from "../LiveCommsBar";
/**
 * Properties of LiveCommsBarItem.
 * @typedef {LiveCommsBar.LiveCommsBarItemProps} LiveCommsBarItem.LiveCommsBarItemChildrenProps
 */
export interface LiveCommsBarItemChildrenProps extends LiveCommsBarItemProps {
}
/**
 * Properties of LiveCommsBarItem.
 * @typedef LiveCommsBarItem.LiveCommsBarItemProps
 * @property {DynamicComponentChildren<LiveCommsBarItem.LiveCommsBarItemChildrenProps>} [children] - children
 */
export interface LiveCommsBarItemProps extends LiveCommsBarChildrenProps {
}
/**
 * @classdesc This is a container for LiveCommsBarItem.
 * @param {LiveCommsBar.LiveCommsBarItemProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 * @category Components / Programmable
 */
export declare class LiveCommsBarItem extends React.PureComponent<LiveCommsBarItemProps> {
    private static readonly friendlyName;
    static readonly displayName = "LiveCommsBarItem";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<LiveCommsBarItem.LiveCommsBarItemChildrenProps>}
     * @readonly
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
    private getMessage;
    private getActions;
}
