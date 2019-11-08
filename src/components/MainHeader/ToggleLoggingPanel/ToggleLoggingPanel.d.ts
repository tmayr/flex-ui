import * as React from "react";
interface ToggleLoggingControlsState {
    isLogging: boolean;
}
export declare class ToggleLoggingPanel extends React.PureComponent<any, ToggleLoggingControlsState> {
    state: {
        isLogging: boolean;
    };
    private modalPopup;
    componentDidMount(): this;
    handlePageLeave(e: Event): Event;
    handleClick: () => void;
    render(): JSX.Element;
    private renderTriggerButton;
    private setModalPopupRef;
}
export {};
