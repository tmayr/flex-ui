import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { TaskCardChildrenProps } from "./TaskCard.definition";
import { ThemeProps } from "../../../theme";
export declare const displayName = "TaskCard";
export declare const contentStore: DynamicContentStore;
export declare class TaskCardImpl extends React.Component<TaskCardChildrenProps & ThemeProps> {
    static readonly defaultProps: {
        highlighted: boolean;
        selected: boolean;
    };
    render(): JSX.Element;
    private handleClick;
    private getIconAreaStyleOverride;
    private getContentAreaStyleOverride;
}
