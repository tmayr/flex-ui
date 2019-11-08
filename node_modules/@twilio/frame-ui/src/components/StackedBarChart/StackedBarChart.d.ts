import * as React from "react";
/**
 * Properties for StackedBarChart component items
 * @typedef StackedBarChart.StackedBarChartItemInterface
 * @property {number} value - numeric value of the item. This influences the width of the item's bar.
 * @property {string} color - background color of the item bar
 * @property {string} label - descriptive label for the item. Defines title and aria-label
 */
export interface StackedBarChartItemInterface {
    value: number;
    color: string;
    label: string;
}
/**
 * Properties for StackedBarChart component
 * @typedef StackedBarChart.StackedBarChartProps
 * @property {Array<StackedBarChart.StackedBarChartItemInterface>} items - list of items to display
 * @property {string} [className] - extra css classes
 */
export interface StackedBarChartProps {
    items: Array<StackedBarChartItemInterface>;
    className?: string;
}
/**
 * This component renders a horizontal, stacked bar chart
 * @category Components / Basic
 * @hideconstructor
 * @param {StackedBarChart.StackedBarChartProps} props
 * @extends {React.PureComponent}
 */
export declare class StackedBarChart extends React.PureComponent<StackedBarChartProps> {
    static defaultProps: Partial<StackedBarChartProps>;
    render(): JSX.Element;
}
