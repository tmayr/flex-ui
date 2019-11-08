import * as React from "react";
/**
 * Properties of MainContainer.
 * @typedef MainContainer.MainContainerProps
 * @property {boolean} [keepSideNavOpen=false] - Whether the SideNav preview panel should be always visible. Default is false, which makes the preview show only after the whole app is wide enough.
 * @property {boolean} [showNotificationBar=true] - Whether notifications will be shown on the NotificationBar or not. If set to false, no notifications in NotificationBar will be shown.
 * @property {boolean} [showLiveCommsBar=true] - Whether to display an incoming call bar for views different from Agent Desktop or not.
 * @property {DynamicComponentChildren<MainContainer.MainContainerChildrenProps>} [children] - children
 */
export interface MainContainerProps {
    keepSideNavOpen?: boolean;
    showNotificationBar?: boolean;
    showLiveCommsBar?: boolean;
}
/**
 * Properties of MainContainer.
 * @typedef {MainContainer.MainContainerProps} MainContainer.MainContainerChildrenProps
 * @property {string} [activeView] - Represents the current active view.
 */
export interface MainContainerChildrenProps extends MainContainerProps {
    activeView?: string;
}
/**
 * @classdesc This is a container for MainContainer.
 * Can be themed with [theme.MainContainer]
 * @component
 * @hideconstructor
 * @param {MainContainer.MainContainerProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class MainContainer extends React.PureComponent<MainContainerProps> {
    static readonly displayName = "MainContainer";
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<MainContainer.MainContainerChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Default properties
     *
     * @static
     * @type {MainContainer.MainContainerProps}
     * @readonly
     */
    static readonly defaultProps: {
        keepSideNavOpen: boolean;
        showNotificationBar: boolean;
        showLiveCommsBar: boolean;
    };
    static updateAll(): void;
    render(): JSX.Element;
}
