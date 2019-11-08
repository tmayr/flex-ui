import * as React from "react";
/**
 * LegendItemProps
 * @typedef Legend.LegendItemProps
 * @property {string} label - the subject of the item
 * @property {number} value - the numeric value of the data
 * @property {string} color - the described color
 * @property {string} [displayValue] - optional, formatted value. If sets, it gets shown instead of "value"
 * private @property {boolean} [showLabel] - it sets whether to show the item label
 */
export interface LegendItemProps {
    label: string;
    value: number;
    color: string;
    displayValue?: string;
    showLabel?: boolean;
}
/**
 * LegendProps
 * @typedef Legend.LegendProps
 * @property {Array<LegendItemProps>} items - the list of items to display
 * @property {boolean} [showLabels=true] - it sets whether to show the items labels
 */
export interface LegendProps {
    items: Array<LegendItemProps>;
    showLabels?: boolean;
}
/**
 * This component renders a legend - a list of colors, values and an optional descriptive label.
 * @category Components / Basic
 * @hideconstructor
 * @param {Legend.LegendProps} props
 * @extends React.PureComponent
 */
export declare class Legend extends React.PureComponent<LegendProps> {
    static defaultProps: Partial<LegendProps>;
    render(): JSX.Element;
}
