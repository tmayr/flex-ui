/// <reference types="react" />
/// <reference types="create-emotion" />
import { CSSProps } from "@twilio/frame-ui";
export interface TaskCardComponentsProps {
    selected?: boolean;
    iconAreaStyleOverride?: CSSProps;
    contentAreaStyleOverride?: CSSProps;
}
export declare const Container: import("@twilio/frame-ui").StyledOtherComponent<TaskCardComponentsProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../theme").Theme>;
export declare const SecondLineContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../theme").Theme>;
export declare const FirstLineContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../theme").Theme>;
export declare const Content: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../../theme").Theme>;
export declare const IconContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("@twilio/frame-ui").IconProps, import("../../../theme").Theme>;
export declare const StyledButton: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, import("../../../theme").Theme>;
