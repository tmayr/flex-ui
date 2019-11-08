import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @typedef Menu.MenuThemeProps
 * @property {CSSProps} - Items container for menu items
 * @property {CSSProps} - Item properties for an item
 */
export interface MenuThemeProps {
    Items: CSSProps;
    Item: CSSProps;
}
/**
 * @typedef Menu.MenuProps
 * @property {string} [className] - extra css classes
 * @property {Menu.MenuThemeProps} - extra css styles
 */
export interface MenuProps {
    className?: string;
    styleOverride?: MenuThemeProps;
}
/**
 * This component renders the main navigation
 * Can be themed with [theme.Menu]{@link Menu.MenuThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {Menu.MenuProps} props
 * @extends React.PureComponent
 */
export declare class Menu extends React.PureComponent<MenuProps> {
    render(): JSX.Element;
}
