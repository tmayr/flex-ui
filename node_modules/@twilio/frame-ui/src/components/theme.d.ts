import { CreateStyled } from "react-emotion";
import { OptionalThemeProps } from "emotion-theming";
export * from "create-emotion-styled";
import { ThemeOptions as MuiThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { CircularProgressThemeProps } from "./CircularProgress";
import { ButtonThemeProps } from "./Button/Button";
import { MenuThemeProps } from "./Menu/Menu";
import { ChatTheme } from "./channel/theme";
import { DialpadThemeProps } from "./Dialpad/Dialpad";
import { AvatarThemeProps } from "./Avatar/Avatar";
import { TabsThemeProps } from "./Tabs/Tabs";
import { UserCardThemeProps } from "./UserCard/UserCard";
import { FormComponentsThemeProps } from "./formitems/theme";
import { SidePanelThemeProps } from "./SidePanel/SidePanel";
import { FiltersListThemeProps } from "./FiltersList/FiltersList";
import { DialerThemeProps } from "./Dialer/Dialer";
import { BadgeThemeProps } from "./Badge/Badge.definitions";
export declare const styled: CreateStyled<Theme>;
export declare type PropsWithTheme<P> = OptionalThemeProps<P, Theme>;
/**
 * Baseplate colors for a theme
 * @typedef CoreThemeBaseplates
 * @property {string} base1
 * @property {string} base2
 * @property {string} base3
 * @property {string} base4
 * @property {string} base5
 * @property {string} base6
 * @property {string} base7
 * @property {string} base8
 * @property {string} base9
 * @property {string} base10
 * @property {string} base11
 */
export interface CoreThemeBaseplates {
    base1: string;
    base2: string;
    base3: string;
    base4: string;
    base5: string;
    base6: string;
    base7: string;
    base8: string;
    base9: string;
    base10: string;
    base11: string;
}
/**
 * Core theme colors
 * @typedef {CoreThemeBaseplates} CoreThemeColors
 * @property {string} defaultButtonColor - The default button color
 * @property {string} lightTextColor - The color for the light texts
 * @property {string} darkTextColor - The color for the dark texts
 * @property {string} buttonHoverColor - The color for the buttons hover state
 * @property {string} tabSelectedColor - The color for the selected tabs
 * @property {string} connectingColor - The color for the connecting copy
 * @property {string} disconnectedColor - The color for the disconnected copy
 * @property {string} notificationBackgroundColorInformation - The color for the information notifications background
 * @property {string} notificationBackgroundColorSuccess - The color for the success notifications background
 * @property {string} notificationBackgroundColorError - The color for the error notifications background
 * @property {string} notificationIconColorWarning - The color for the icons in the warning notifications
 * @property {string} notificationBackgroundColorWarning - The color for the warning notifications background
 * @property {string} notificationIconColorError - The color for the icons in the error notifications
 * @property {string} userAvailableColor - The color for available users
 * @property {string} userUnavailableColor - The color for unavailable users
 * @property {string} errorColor - Error color
 * @property {string} errorGlow - Error glow
 * @property {string} circularProgressColor - Color of the circular progress bar
 * @property {string} disabledColor - Color the disabled elements
 * @property {string} focusColor - Color for the focused elements
 * @property {string} focusGlow - Color of the glow for the focused elements
 */
export interface CoreThemeColors extends CoreThemeBaseplates {
    defaultButtonColor: string;
    lightTextColor: string;
    darkTextColor: string;
    buttonHoverColor: string;
    tabSelectedColor: string;
    connectingColor: string;
    disconnectedColor: string;
    notificationBackgroundColorInformation: string;
    notificationBackgroundColorSuccess: string;
    notificationBackgroundColorError: string;
    notificationBackgroundColorWarning: string;
    notificationIconColorError: string;
    notificationIconColorWarning: string;
    userAvailableColor: string;
    userUnavailableColor: string;
    errorColor: string;
    errorGlow: string;
    disabledColor: string;
    focusColor: string;
    focusGlow: string;
}
/**
 * @typedef ThemeProps
 * @property {Theme} [theme]
 */
export interface ThemeProps {
    theme?: Theme;
}
/**
 * Theme options. Material UI theme options are also valid - see {@link https://material-ui.com/customization/themes/}
 * @typedef {Object} Theme
 * @property {CoreThemeColors} colors theme colors
 * @property {Object} calculated calculated properties
 * @property {boolean} calculated.lightTheme whether theme is dark or light
 * @property {string} calculated.textColor color for text
 * @property {Button.ButtonThemeProps} Button button theme properties
 * @property {Avatar.AvatarThemeProps} Avatar avatar theme properties
 * @property {Tabs.TabsThemeProps} Tabs tabs theme properties
 * @property {UserCard.UserCardThemeProps} UserCard user card theme properties
 * @property {ChatTheme} Chat chat components theme properties
 * @property {SidePanel.SidePanelThemeProps} SidePanel components theme properties
 * @property {FilterList.FilterListThemeProps} Filter list components theme properties
 * @property {Badge.BadgeThemeProps} Badge components theme properties
 * // private @property {FormComponents.FormComponentsThemeProps} FormComponents form components theme properties
 * // private @property {Menu.MenuThemeProps} Menu menu theme properties
 * // private @property {Progress.ProgressThemeProps} Progress.Circular circular progress bar theme properties
 */
export interface Theme extends MuiThemeOptions {
    colors: CoreThemeColors;
    calculated: {
        lightTheme: boolean;
        textColor: string;
    };
    FormComponents: FormComponentsThemeProps;
    Button: ButtonThemeProps;
    Menu: MenuThemeProps;
    Dialpad: DialpadThemeProps;
    Dialer: DialerThemeProps;
    Avatar: AvatarThemeProps;
    Tabs: TabsThemeProps;
    UserCard: UserCardThemeProps;
    Chat: ChatTheme;
    Progress: {
        Circular: CircularProgressThemeProps;
    };
    SidePanel: SidePanelThemeProps;
    FilterList: FiltersListThemeProps;
    Badge: BadgeThemeProps;
}
export interface ThemeSupport {
    theme?: Theme;
    className?: string;
}
export declare const withTheme: <P, C>(Component: C) => C;
export declare const getBackgroundWithHoverCSS: (background: string | number, lightHover: boolean, noHoverSelector?: boolean, disabled?: boolean) => string;
