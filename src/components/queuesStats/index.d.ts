export { AggregatedQueuesDataTilesProps, AggregatedQueuesDataTiles } from "./AggregatedQueuesDataTiles";
export { QueuesDataTableProps, QueuesDataTable } from "./QueuesDataTable";
export { ActivityStatistic, WorkerQueue, WorkspaceStats } from "../../state/QueuesState";
import { QueuesFilterFunction } from "../../state/QueuesState";
/**
 * Sets global filter for QueuesStats.
 * Takes a [filter function]{@link QueuesStats.QueuesFilterFunction} as an argument.
 * Each Queue is evaluated and displayed, if the return value is <code>true</code>.
 *
 * For more information and examples please refer to [Twilio Flex Docs]{@link https://www.twilio.com/docs/flex}.
 *
 * @param {QueuesStats.QueuesFilterFunction} filter
 * @memberof QueuesStats
 */
declare const setFilter: (filter: QueuesFilterFunction) => void;
export { setFilter };
