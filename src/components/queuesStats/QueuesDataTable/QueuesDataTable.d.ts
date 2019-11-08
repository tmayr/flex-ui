import * as React from "react";
import { QueuesDataTableImplOwnProps } from "./QueuesDataTableImpl";
/**
 * QueuesDataTable Props.
 * @typedef QueuesDataTableProps
 * @memberof QueuesStats
 *
 * @property {React.ReactElement<ContentFragment>} [children=undefined] - Add
 * additional columns using {@link ColumnDefinition} components wrapped in {@link ContentFragment}.
 * Content renderer function passed to {@link ColumnDefinition} will receive {@link QueuesStats.WorkerQueue} as an argument.
 */
export declare type QueuesDataTableProps = Omit<QueuesDataTableImplOwnProps, "sortable">;
/**
 * @class QueuesDataTable
 * @classdesc Renders a table with realtime queues statistics
 * @component
 * @hideconstructor
 * @memberof QueuesStats
 *
 * @param {QueuesStats.QueuesDataTableProps} props - QueuesDataTable props
 * @category Components / Programmable
 */
export declare class QueuesDataTable extends React.PureComponent<QueuesDataTableProps> {
    private static friendlyName;
    static readonly displayName = "QueuesDataTable";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<{}>}
     * @readonly
     * @memberof QueuesStats
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    private static isSortable;
    private static instance;
    /**
     * The table can be sorted by clicking the column headers.
     * Set this to false to disable this behavior.
     *
     * @type {boolean}
     * @default true
     * @memberof QueuesStats.QueuesDataTable
     */
    static sortable: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
