/// <reference types="react" />
/// <reference types="create-emotion" />
import { MessageState } from "../../../state/ChannelState";
import { MessageStyle } from "../MessagingCanvas/MessagingCanvas";
import { SpikeProps } from "./Spike";
export interface ChannelItemStyleProps {
    message?: MessageState;
    messageStyle?: MessageStyle;
}
export declare const Container: import("create-emotion-styled/types/react").StyledOtherComponent<ChannelItemStyleProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../..").Theme>;
export interface BubbleContainerProps {
    isFromMe: boolean;
    messageStyle: MessageStyle;
}
export declare const BubbleContainer: import("create-emotion-styled/types/react").StyledOtherComponent<BubbleContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../..").Theme>;
export declare const StyledSpike: import("create-emotion-styled/types/react").StyledOtherComponent<SpikeProps, SpikeProps, import("../..").Theme>;
export declare const MessageReadContainer: import("create-emotion-styled/types/react").StyledOtherComponent<object, import("../..").FlexBoxProperties, import("../..").Theme>;
