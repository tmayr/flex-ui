import * as React from "react";
import { Theme } from "@twilio/frame-ui";
import { AggregatedQueuesDataTiles, QueuesDataTable } from "../../queuesStats";
import { QueuesStatsViewImplProps, QueuesStatsViewImplOwnProps } from "./QueuesStatsViewImpl";
/**
 * QueuesStatsView Props
 * @typedef QueuesStatsView.QueuesStatsViewProps
 *
 * @property {ContextProvider.FlexContextType} [context]
 * @property {React.ReactElement<ComponentFragment>} [children=undefined] - Children must be wrapped in {@link ContentFragment}
 * @property {RouteComponentProps} [route] - If you are using custom router and want to pass the route props to children
 */
export declare type QueuesStatsViewProps = Omit<QueuesStatsViewImplOwnProps, "isViewActive">;
/**
 * Props passed to children of QueuesStatsView
 * @typedef QueuesStatsView.QueuesStatsViewChildProps
 *
 * @property {boolean} isLoading Is realt-time queues stats data being fetched
 * @property {boolean} hasNoData If true, there are no queues set up
 * @property {boolean} [isViewActive=undefined] True/false if part of a {@link ViewCollection}, otherwise undefined
 * @property {RouteComponentProps} [route=undefined] Route component props if part of a {@link ViewCollection} or the route prop passed to {@link QueuesStatsView}
 * @property {Theme} theme
 */
export declare type QueuesStatsViewChildProps = Omit<QueuesStatsViewImplProps, "children"> & {
    theme: Theme;
};
/**
 * Renders the real-time queues dashboard
 * @alias QueuesStatsView
 * @component
 * @hideconstructor
 * @param {QueuesStatsView.QueuesStatsViewProps} props - QueuesStatsView props
 * @category Components / Programmable
 */
export declare class QueuesStatsViewComponent extends React.PureComponent<QueuesStatsViewProps> {
    static readonly displayName = "QueuesStatsView";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<QueuesStatsView.QueuesStatsViewChildProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    /**
     * Reference for the view's AggregatedQueuesDataTiles component
     * @static
     * @type {QueuesStats.AggregatedQueuesDataTiles}
     * @readonly
     */
    static readonly Tiles: typeof AggregatedQueuesDataTiles;
    /**
     * Reference for the view's QueuesDataTable component
     * @static
     * @type {QueuesStats.QueuesDataTable}
     * @readonly
     */
    static readonly Table: typeof QueuesDataTable;
    render(): JSX.Element;
}
