import * as React from "react";
import { ButtonThemeProps } from "./Button";
/**
 * Properties of the Link
 * @typedef Link.LinkProps
 * @property {string} [className=""] - An additional class name for the link component
 * @property {ButtonThemeProps} [themeOverride={}] - Overwrite the default LinkThemeProps
 * @property {boolean} [roundCorners=true] - If set, it renders the link with round corners
 * @property {string} [title] - An optional title for the link
 * @property {string} [href] - 'Href' attribute for 'a' tag
 * @property {string} [target] - 'Target' attribute for 'a' tag
 */
export interface LinkProps {
    className?: string;
    themeOverride?: ButtonThemeProps;
    innerRef?: any;
    roundCorners?: boolean;
    title?: string;
    href?: string;
    target?: string;
}
/**
 * This component renders a link
 * Can be themed with [theme.Button]{@link Button.ButtonThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Link.LinkProps} props
 * @extends {React.PureComponent}
 */
export declare class Link extends React.PureComponent<LinkProps> {
    static displayName: string;
    render(): JSX.Element;
    static defaultProps: Partial<LinkProps>;
}
