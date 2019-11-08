import { ComponentBadgeProps, BadgePropsWithDefaultPropsAsOptional } from "../ComponentBadgeProps.definitions";
/**
 * Properties of MainHeader.
 * @typedef MainHeader.MainHeaderProps
 * @property {string} [logoUrl=undefined] - Logo URL shown in the main header.
 * @property {ComponentBadgeProps<MainHeader.MainHeaderProps>} [Badge] - Set of properties for internal Badge element.
 * @property {DynamicComponentChildren<MainHeader.MainHeaderChildrenProps>} [children] - children
 */
export interface MainHeaderProps {
    logoUrl?: string;
    Badge?: ComponentBadgeProps<MainHeaderProps>;
}
/**
 * Properties of MainHeader.
 * @typedef {MainHeader.MainHeaderProps} MainHeader.MainHeaderChildrenProps
 * @property {boolean} [incomingTasks] - Deprecated - Whether there are any incoming tasks or not.
 * @property {BadgePropsWithDefaultPropsAsOptional} [Badge] - Set of properties for internal Badge element.
 */
export interface MainHeaderChildrenProps extends MainHeaderProps {
    incomingTasks?: boolean;
    Badge?: BadgePropsWithDefaultPropsAsOptional;
}
