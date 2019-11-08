import { BaseThemeColors } from "../components/theme";
import { CoreThemeColors } from "@twilio/frame-ui";
/**
 * @memberOf ThemeColorsDefinitionCreator
 */
export interface ThemeColorsDefinition {
    colors: BaseThemeColors & CoreThemeColors;
    lightTheme: boolean;
}
/**
 * Static class used to create a theme colors object
 * @category Theme
 */
export declare class ThemeColorsDefinitionCreator {
    static getPredefined(name: string): ThemeColorsDefinition;
}
/**
 * @deprecated use ThemeColorsDefinition instead
 * @category Theme
 */
export interface ThemeDef extends ThemeColorsDefinition {
}
/**
 * @deprecated use ThemeColorsDefinitionCreator instead
 * @category Theme
 */
export declare class ThemeDefCreator {
    /**
     * @deprecated use ThemeColorsDefinitionCreator.getPredefined instead
     */
    static getPredefinedTheme(name: string): ThemeDef;
}
