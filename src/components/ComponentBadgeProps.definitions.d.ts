import { Badge, BadgeProps } from "@twilio/frame-ui";
import { AppState } from "../state";
/**
 * Badge props with default props as optional
 * @typedef {} BadgePropsWithDefaultPropsAsOptional
 */
export declare type BadgePropsWithDefaultPropsAsOptional = Partial<typeof Badge.defaultProps> & Omit<BadgeProps, keyof typeof Badge.defaultProps>;
/**
 * Component badge children callback
 * @callback ComponentBadgeChildrenCallback
 * @param {AppState} state - state of the application.
 * @param {T} props - properties of component T.
 * @returns {number} the numeric value to be displayed in the badge
 */
export declare type ComponentBadgeChildrenCallback<T> = (state: AppState, props: T) => number;
/**
 * Component badge props
 * @typedef {} ComponentBadgeProps
 * @property {number | ComponentBadgeChildrenCallback} children - The numeric value or a callback which returns a number to be displayed in the notification.
 */
export declare type ComponentBadgeProps<T> = Omit<BadgePropsWithDefaultPropsAsOptional, "children"> & {
    children: number | ComponentBadgeChildrenCallback<T>;
};
