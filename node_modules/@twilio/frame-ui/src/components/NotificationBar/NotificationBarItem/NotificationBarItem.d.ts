import { Notification } from "../../../NotificationManager";
import * as React from "react";
export interface NotificationBarItemProps {
    notification: Notification;
}
export declare class NotificationBarItem extends React.Component<NotificationBarItemProps> {
    componentDidMount(): void;
    private closeIconOnClickHandler;
    private handleOnClick;
    render(): JSX.Element;
    private renderActionItem;
    private renderMessageContent;
}
