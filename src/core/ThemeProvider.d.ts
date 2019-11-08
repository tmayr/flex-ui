/// <reference types="react-redux" />
import * as React from "react";
import { ThemeConfigProps } from "../state/AppConfig";
export interface ThemeProviderProps {
    themeConf: ThemeConfigProps;
}
export declare class StorelessThemeProvider extends React.PureComponent<ThemeProviderProps> {
    render(): JSX.Element;
    private static getMergedTheme;
}
/**
 * @classdesc Provides a theme for rest to the UI by rendering MuiThemeProvider and Emotion's ThemeProvider. Merges theme specified in configuration colorTheme property with overrides from configuration themeOverride property.
 * @class ThemeProvider
 * @package
 * @extends {React.PureComponent}
 *
 * @see {@link Theme}
 * @category Theme
 */
export declare const ThemeProvider: React.ComponentClass<Pick<ThemeProviderProps, never>, any> & {
    WrappedComponent: React.ComponentType<ThemeProviderProps>;
};
