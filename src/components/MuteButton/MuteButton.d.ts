import * as React from "react";
import { ButtonProps } from "@twilio/frame-ui";
export interface MuteButtonProps extends Partial<ButtonProps> {
    large?: boolean;
}
export interface MuteButtonImplProps extends MuteButtonProps {
    muted?: boolean;
}
export declare class MuteButton extends React.PureComponent<MuteButtonProps> {
    render(): JSX.Element;
}
