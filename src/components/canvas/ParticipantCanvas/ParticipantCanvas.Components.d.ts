/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../../theme";
import { ParticipantCanvasProps } from "./ParticipantCanvas.definitions";
export interface ContainerProps extends Partial<ParticipantCanvasProps> {
    isDisabled: boolean;
}
export declare const Container: import("@twilio/frame-ui").StyledOtherComponent<ContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Name: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Status: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export interface StyledAvatarProps extends ThemeProps {
    hold: boolean;
}
export declare const StyledAvatar: import("@twilio/frame-ui").StyledOtherComponent<StyledAvatarProps, import("@twilio/frame-ui").AvatarProps, import("../../theme").Theme>;
export declare const AvatarHover: import("@twilio/frame-ui").StyledOtherComponent<object, import("@twilio/frame-ui").FlexBoxProperties, import("../../theme").Theme>;
export declare const ActionsContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
