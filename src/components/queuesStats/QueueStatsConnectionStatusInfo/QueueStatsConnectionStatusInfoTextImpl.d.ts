import * as React from "react";
export interface QueueStatsConnectionStatusInfoTextImplStateProps {
    timestampLastConnected: number;
}
export declare class QueueStatsConnectionStatusInfoTextImpl extends React.PureComponent<QueueStatsConnectionStatusInfoTextImplStateProps> {
    private intervalHandle;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
