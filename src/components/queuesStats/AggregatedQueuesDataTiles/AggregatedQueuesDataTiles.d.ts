import * as React from "react";
import { DynamicContentStore, ContentFragment, Theme } from "@twilio/frame-ui";
/**
 * AggregatedQueuesDataTilesProps Props.
 * @typedef AggregatedQueuesDataTilesProps
 * @memberof QueuesStats
 *
 * @property {React.ReactElement<ContentFragment>} [children=undefined] - Add
 * additional tiles using {@link AggregatedDataTile} components wrapped in {@link ContentFragment}
 */
export interface AggregatedQueuesDataTilesProps {
    children?: React.ReactElement<ContentFragment>;
}
/**
 * Props passed to children of AggregatedQueuesDataTiles
 * @typedef QueuesStats.AggregatedQueuesDataTilesChildProps
 * @memberof QueuesStats
 *
 * @property {Theme} theme
 */
export declare type AggregatedQueuesDataTilesChildProps = Omit<AggregatedQueuesDataTilesProps, "children"> & {
    theme: Theme;
};
/**
 * @class AggregatedQueuesDataTiles
 * @classdesc Renders a collection of tiles displaying aggregated queues data
 * @component
 * @hideconstructor
 * @memberof QueuesStats
 *
 * @param {QueuesStats.AggregatedQueuesDataTilesProps} props - AggregatedQueuesDataTiles props
 * @category Components / Programmable
 */
export declare class AggregatedQueuesDataTiles extends React.PureComponent<AggregatedQueuesDataTilesProps> {
    static readonly displayName = "AggregatedQueuesDataTiles";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<QueuesStats.AggregatedQueuesDataTilesChildProps>}
     * @readonly
     * @memberof QueuesStats
     */
    static readonly Content: DynamicContentStore;
    render(): JSX.Element;
}
