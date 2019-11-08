import * as React from "react";
import { ViewAdditionalProps } from "../../ViewCollection";
import { DynamicContentStore } from "@twilio/frame-ui";
import { FlexContextType } from "../../../core/ContextProvider";
export declare const displayName = "QueueStatsView";
export declare const Content: DynamicContentStore;
export interface QueuesStatsViewImplProps {
    isLoading: boolean;
    hasNoData: boolean;
    context?: FlexContextType;
}
export declare class QueueStatsViewImpl extends React.PureComponent<ViewAdditionalProps & QueuesStatsViewImplProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private isAdmin;
}
