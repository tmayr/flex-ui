import * as React from "react";
export interface LongestWaitTimeTileProps {
    waitTime?: number;
    queueName?: string;
}
export declare class LongestWaitTimeTile extends React.PureComponent<LongestWaitTimeTileProps> {
    static defaultProps: {
        waitTime: number;
    };
    render(): JSX.Element;
}
