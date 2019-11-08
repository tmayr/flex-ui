import * as React from "react";
/**
 * @typedef Icon.IconProps
 * @property {string | React.ReactNode} icon - the name of a predefined Icon, see {@tutorial available-icons}.
 * @property {string} [className] - extra css classes
 * @property {number} [sizeMultiplier] - numerical value that influences the size of the svg icon
 */
export interface IconProps {
    icon: string | React.ReactNode;
    className?: string;
    sizeMultiplier?: number;
}
/**
 * This component renders an svg Icon. To see the list
 * of available icons, please refer to {@tutorial available-icons}.
 *
 * @category Components / Basic
 * @hideconstructor
 * @param {Icon.IconProps} iconProps - props
 * @extends {React.PureComponent}
 */
export declare class Icon extends React.PureComponent<IconProps> {
    render(): JSX.Element;
}
