import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * @typedef {CSSProps} CircularProgress.CircularProgressThemeProps
 * @property {string} staticBackgroundBorderColor color for static background border
 * @property {string} animatingBackgroundBorderColor color for animating background border
 * @property {string} animatingForegroundBorderColor color for animating foreground border
 */
export interface CircularProgressThemeProps extends Partial<CSSProps> {
    staticBackgroundBorderColor?: string;
    animatingBackgroundBorderColor?: string;
    animatingForegroundBorderColor?: string;
}
/**
 * @typedef  CircularProgress.CircularProgressProps
 * @property {string} [className] - extra css classes
 * @property {number} [size=124] - component size in pixels
 * @property {Circular.CircularProgressThemeProps} [override] extra css styles
 * @property {boolean} [animating] - whether the components should animate or not
 * @property {number} [borderWidth=2] - border width of the component in pixels
 */
export interface CircularProgressProps {
    className?: string;
    size?: number;
    override?: CircularProgressThemeProps;
    animating?: boolean;
    borderWidth?: number;
}
/**
 * This component renders the main navigation
 * Can be themed with [theme.Progress.Circular]{@link CircularProgress.CircularProgressThemeProps}
 * @category Components / Basic
 * @hideconstructor
 * @param {CircularProgress.CircularProgressProps} props
 * @extends React.PureComponent
 */
export declare class CircularProgress extends React.PureComponent<CircularProgressProps> {
    static defaultProps: {
        override: {};
        size: number;
        borderWidth: number;
    };
    render(): JSX.Element;
}
