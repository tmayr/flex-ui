import * as React from "react";
import { ConnectionState } from "twilio-sync/lib/client";
export interface QueueStatsConnectionStatusInfoImplStateProps {
    connectionState: ConnectionState;
}
export declare class QueueStatsConnectionStatusInfoImpl extends React.PureComponent<QueueStatsConnectionStatusInfoImplStateProps> {
    componentDidMount(): void;
    componentDidUpdate(prevProps: QueueStatsConnectionStatusInfoImplStateProps): void;
    componentWillUnmount(): void;
    render(): null;
}
