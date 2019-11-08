/// <reference types="react" />
/// <reference types="create-emotion" />
import { IconButtonProps, ButtonProps } from "@twilio/frame-ui";
export declare const Panel: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const ButtonContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
interface StyledIconButtonProps {
    isModalOpen: boolean;
}
export declare const StyledIconButton: import("@twilio/frame-ui").StyledOtherComponent<StyledIconButtonProps & IconButtonProps, IconButtonProps, import("../../theme").Theme>;
export declare const StyledButton: import("@twilio/frame-ui").StyledOtherComponent<ButtonProps, ButtonProps, import("../../theme").Theme>;
export {};
