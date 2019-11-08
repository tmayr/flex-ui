import * as React from "react";
import { QueuesDataTableImplProps } from "./QueuesDataTableImpl";
export declare type QueuesDataTableProps = Partial<QueuesDataTableImplProps>;
export declare class QueuesDataTable extends React.PureComponent<QueuesDataTableProps> {
    static readonly displayName = "QueuesDataTable";
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
