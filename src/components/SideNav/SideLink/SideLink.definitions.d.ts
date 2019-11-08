import * as React from "react";
import { TaskContextProps } from "../../context";
import { ComponentBadgeProps, BadgePropsWithDefaultPropsAsOptional } from "../../ComponentBadgeProps.definitions";
/**
 * @typedef {TaskContextProps} SideLink.SideLinkProps
 * @property {string | React.ReactNode} icon - the name of a default Icon, see {@tutorial available-icons}.
 * @property {string | React.ReactNode} [iconActive] - the name of a active Icon, see {@tutorial available-icons}.
 * @property {boolean} [showLabel] - Identifies if the label is shown.
 * @property {Function} [onClick] - Callback called when link is clicked.
 * @property {boolean} [isActive] - Represents if current link is active.
 * @property {string} [activeView] - Represents the active view.
 * @property {ComponentBadgeProps<SideLink.SideLinkProps>} [Badge] - Set of properties for internal Badge element.
 */
export interface SideLinkProps extends TaskContextProps {
    icon: string | React.ReactNode;
    iconActive?: string | React.ReactNode;
    showLabel?: boolean;
    onClick?: () => void;
    isActive?: boolean;
    activeView?: string;
    Badge?: ComponentBadgeProps<SideLinkProps>;
}
/**
 * @typedef {SideLink.SideLinkProps} SideLink.SideLinkChildrenProps
 * @property {BadgePropsWithDefaultPropsAsOptional} [Badge] - Set of properties for internal Badge element.
 */
export interface SideLinkChildrenProps extends SideLinkProps {
    Badge?: BadgePropsWithDefaultPropsAsOptional;
}
/**
 * @typedef {SideLink.SideLinkItemChildrenProps} SideLink.SideLinkItemProps
 * @property {boolean} showLabel - Identifies if the label is shown.
 * @property {string} activeView - Represents the active view.
 */
export interface SideLinkItemProps extends SideLinkItemChildrenProps {
    showLabel: boolean;
    activeView: string;
}
/**
 * @typedef SideLink.SideLinkItemChildrenProps
 * @property {ComponentBadgeProps<SideLink.SideLinkProps>} [Badge] - Set of properties for internal Badge element.
 */
export interface SideLinkItemChildrenProps {
    Badge?: ComponentBadgeProps<SideLinkProps>;
}
/**
 * @typedef {SideLink.SideLinkItemProps} SideLink.SideLinkQueuesStatsProps
 * @property {string} viewName - Represents the current view name.
 */
export interface SideLinkQueuesStatsProps extends SideLinkItemProps {
    viewName: string;
}
