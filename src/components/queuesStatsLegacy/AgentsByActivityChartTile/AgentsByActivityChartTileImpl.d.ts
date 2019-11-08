import * as React from "react";
import { ThemeProps } from "../../theme";
interface AgentData {
    value: number;
    label: string;
}
interface AgentsByActivityChartTileImplProps {
    availableAgents: AgentData;
    unavailableAgents: AgentData;
    offlineAgents: AgentData;
}
export declare class AgentsByActivityChartTileImpl extends React.PureComponent<AgentsByActivityChartTileImplProps & ThemeProps> {
    render(): JSX.Element;
}
export {};
