import * as React from "react";
export interface DataTableColumnDefinition<T, C> {
    header: React.ReactNode;
    style?: React.CSSProperties;
    content: ((item: T, context: C) => React.ReactNode) | React.ReactNode;
    sortingFn?: (a: T, b: T) => number;
}
export declare type ColumnDefinitionElement<T, C> = React.ReactElement<DataTableColumnDefinition<T, C>>;
export declare class ColumnDefinition<T = any, C = any> extends React.Component<DataTableColumnDefinition<T, C>> {
    render(): null;
}
