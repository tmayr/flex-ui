import * as React from "react";
import { ViewAdditionalProps } from "../../ViewCollection";
import { AggregatedQueuesDataTiles, QueuesDataTable } from "../../queuesStatsLegacy";
import { QueuesStatsViewImplProps } from "./QueueStatsViewImpl";
export declare class QueueStatsView extends React.PureComponent<ViewAdditionalProps & Partial<QueuesStatsViewImplProps>> {
    static readonly displayName = "QueueStatsView";
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static readonly Tiles: typeof AggregatedQueuesDataTiles;
    static readonly Table: typeof QueuesDataTable;
    render(): JSX.Element;
}
