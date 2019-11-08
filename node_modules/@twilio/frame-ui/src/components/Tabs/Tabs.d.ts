import * as React from "react";
import { CSSProps } from "../CSSProps";
import { ButtonThemeProps } from "../Button";
import { Alignments } from "./TabHeader";
export interface TabsState {
    lastSelectedTabIndex: number;
}
/**
 * @typedef Tabs.TabsThemeProps
 * @property {CSSProps} Container container
 * @property {CSSProps} LabelsContainer container for label tab headers
 * @property {ButtonThemeProps} Button icon based tab headers
 * @property {CSSProps} Active active tab header properties
 * @property {CSSProps} Inactive inactive tab header properties
 */
export interface TabsThemeProps {
    Container: CSSProps;
    LabelsContainer: CSSProps;
    Button: ButtonThemeProps;
    Active: CSSProps;
    Inactive: CSSProps;
}
/**
 * @callback TabSelectedFunction
 * @param {string} tabName uniqueName of selected Tab
 * @returns {void}
 * @memberof Tabs
 */
export declare type TabSelectedFunction = (tabName: string) => void;
/**
 * Properties of the Tabs
 * @typedef Tabs.TabsProps
 * @property {string} [className] - An additional class name for the tabs component
 * @property {Alignments} [alignment] - Define the tabs alignment - "left" or "center"
 * @property {string} [selectedTabName] - if provided, Tabs will select the Tab with uniqueName equal to this property value
 * @property {Tabs.TabSelectedFunction} [onTabSelected] - if provided, when user clicks on a Tab, this callback will be called instead of trying to internally change the tab
 */
export interface TabsProps {
    className?: string;
    alignment?: Alignments;
    selectedTabName?: string;
    onTabSelected?: TabSelectedFunction;
}
/**
 * This component renders a tab container
 * Can be themed with [theme.Tabs]{@link Tabs.TabsThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Tabs.TabsProps} props
 * @extends {React.Component}
 */
export declare class Tabs extends React.Component<TabsProps, TabsState> {
    static defaultProps: {
        alignment: string;
    };
    state: {
        lastSelectedTabIndex: number;
    };
    private isChildTabVisible;
    private getFirstVisibleTabIndex;
    render(): JSX.Element;
    private handleTabClick;
}
