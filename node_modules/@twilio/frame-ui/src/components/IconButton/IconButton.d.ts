import * as React from "react";
import { IconProps } from "../Icons";
import { ButtonProps } from "../Button";
/**
 * IconButtonProps
 * @typedef IconButton.IconButtonProps
 * @extends {Button.ButtonProps}
 */
export interface IconButtonProps extends ButtonProps, IconProps {
}
/**
 * This component renders an icon button
 * @category Components / Basic
 * @hideconstructor
 * @param {IconButton.IconButtonProps} IconButtonProps - props
 * @extends React.PureComponent
 */
export declare class IconButton extends React.PureComponent<IconButtonProps> {
    render(): JSX.Element;
}
