import * as React from "react";
export interface AgentsByActivityChartTileProps {
    availableAgents?: number;
    unavailableAgents?: number;
    offlineAgents?: number;
}
export declare class AgentsByActivityChartTile extends React.PureComponent<AgentsByActivityChartTileProps> {
    render(): JSX.Element;
}
