import * as React from "react";
import { ThemeProps } from "../theme";
import { CSSProps } from "../CSSProps";
/**
 * @typedef Avatar.AvatarThemeProps
 * @property {CSSProps} Container container
 * @property {CSSProps} AvailabilityIcon availability icon
 */
export interface AvatarThemeProps {
    Container: CSSProps;
    AvailabilityIcon: CSSProps;
}
/**
 * Properties of the Avatar
 * @typedef Avatar.AvatarProps
 * @property {string} [className] - An additional class name for the avatar component
 * @property {string} [imageUrl] - A URL for the avatar image
 * @property {boolean} [available] - Used for changing the availability icon state
 * @property {boolean} [large] - If set, it doubles the size of the icon
 * @property {boolean} [showAvailabilityIcon=true] - If set, it shows the availability icon
 * @property {boolean} [noStyling] - If set, it returns an unstyled version of AvatarContainer
 */
export interface AvatarProps {
    className?: string;
    imageUrl?: string;
    available?: boolean;
    large?: boolean;
    showAvailabilityIcon?: boolean;
    noStyling?: boolean;
}
export interface AvatarState {
    verifiedImages: {
        [key: string]: boolean;
    };
}
/**
 * This component renders an avatar component
 * Can be themed with [theme.Avatar]{@link Avatar.AvatarThemeProps}
 *
 * @category Components / Basic
 * @extends {React.PureComponent}
 * @param {Avatar.AvatarProps} props
 * @hideconstructor
 */
export declare class Avatar extends React.PureComponent<AvatarProps & ThemeProps, AvatarState> {
    state: AvatarState;
    static readonly defaultProps: {
        showAvailabilityIcon: boolean;
    };
    constructor(props: AvatarProps);
    componentWillReceiveProps(nextProps: AvatarProps): void;
    private validateImageUrl;
    render(): JSX.Element;
}
