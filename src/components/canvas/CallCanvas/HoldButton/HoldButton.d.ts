import * as React from "react";
import { ButtonProps } from "@twilio/frame-ui";
export interface HoldButtonProps extends Partial<ButtonProps> {
    isOnHold?: boolean;
}
export declare class HoldButton extends React.PureComponent<HoldButtonProps> {
    render(): JSX.Element;
}
