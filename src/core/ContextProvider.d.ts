import * as React from "react";
import { Manager } from "./Manager";
/**
 * Flex context interface
 * @typedef {Object} FlexContextType
 * @property {Manager} manager - an instance of Flex Manager class
 * @property {boolean} [legacy] - force compatibility mode in case of differing react-redux versions
 * @memberof ContextProvider
 */
export interface FlexContextType {
    manager: Manager;
    legacy?: boolean;
}
/**
 * Context Provider props interface
 * @typedef {ContextProvider.FlexContextType} ContextProviderProps
 * @memberof ContextProvider
 */
export interface ContextProviderProps extends FlexContextType {
}
/**
 * Flex Context
 *
 * @const {React.Context<ContextProvider.FlexContextType>} FlexContext
 * @category Core
 */
export declare const FlexContext: React.Context<FlexContextType>;
/**
 * @classdesc Flex Context Provider component
 * @component
 * @hideconstructor
 * @param {ContextProvider.ContextProviderProps} props properties to be passed to configure this component.
 * @category Components / Context
 */
export declare class ContextProvider extends React.PureComponent<ContextProviderProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
