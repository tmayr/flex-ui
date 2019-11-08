import * as React from "react";
import { SideLinkItemChildrenProps, SideLinkQueuesStatsProps } from "../SideLink/SideLink.definitions";
/**
 * @class SideLinkQueuesStats
 * @classdesc This component renders side link for queues stats view.
 * @component
 * @hideconstructor
 * @category Components / Basic
 * @param {SideLink.SideLinkItemProps} props - Properties to be passed to configure this component.
 */
export declare class SideLinkQueuesStats extends React.PureComponent<SideLinkQueuesStatsProps> {
    /**
     * Default properties
     *
     * @static
     * @type {SideLink.SideLinkItemChildrenProps}
     * @readonly
     */
    static defaultProps: SideLinkItemChildrenProps;
    private gotoView;
    render(): JSX.Element;
}
