/// <reference types="react" />
/// <reference types="create-emotion" />
import { CSSProps } from "@twilio/frame-ui";
export interface TaskListBaseItemComponentProps {
    large?: boolean;
    selected?: boolean;
    vertical?: boolean;
    iconColor?: string;
}
export interface TaskListBaseItemIconProps extends TaskListBaseItemComponentProps {
    styleOverride?: CSSProps;
    icon: string | React.ReactNode;
}
export declare const TaskListIcon: import("@twilio/frame-ui").StyledOtherComponent<TaskListBaseItemIconProps, import("@twilio/frame-ui").IconProps, import("../../theme").Theme>;
export declare const Container: import("@twilio/frame-ui").StyledOtherComponent<TaskListBaseItemComponentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const UpperArea: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const Content: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const LowerArea: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const ActionsContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const SecondLineContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const SecondLineStyledTemplate: import("@twilio/frame-ui").StyledOtherComponent<object, import("@twilio/frame-ui").TemplateProps, import("../../theme").Theme>;
export declare const FirstLineContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const IconAreaContainer: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
