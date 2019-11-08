/// <reference types="react" />
/// <reference types="create-emotion" />
import { MenuItemProps } from "@twilio/frame-ui";
export interface UserControlsUserCardContainerProps {
    large: boolean;
}
export declare const Container: import("@twilio/frame-ui").StyledOtherComponent<UserControlsUserCardContainerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import("../../theme").Theme>;
export declare const UserActivityControls: import("@twilio/frame-ui").StyledOtherComponent<object, import("@twilio/frame-ui").MenuProps, import("../../theme").Theme>;
export declare const AccountMenuItem: import("@twilio/frame-ui").StyledStatelessComponent<MenuItemProps, MenuItemProps, import("../../theme").Theme>;
export declare const AccountMenuItemLogout: import("@twilio/frame-ui").StyledStatelessComponent<object, MenuItemProps, import("../../theme").Theme>;
export declare const AccountMenuDivider: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, import("../../theme").Theme>;
export declare const AccountMenuTitle: import("@twilio/frame-ui").StyledOtherComponent<object, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, import("../../theme").Theme>;
