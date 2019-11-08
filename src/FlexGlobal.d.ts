import * as Flex from "./index";
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
declare type FlexType = typeof Flex;
declare type ReactType = typeof React;
declare type ReactDOMType = typeof ReactDOM;
declare type ReduxType = typeof Redux;
declare type ReactReduxType = typeof ReactRedux;
declare global {
    interface Window {
        Twilio: {
            Flex: FlexType;
        };
        React: ReactType;
        ReactDOM: ReactDOMType;
        Redux: ReduxType;
        ReactRedux: ReactReduxType;
    }
}
declare type GlobalDeps = {
    [key: string]: any;
};
export declare const isConflictingDependency: (name: string, all: GlobalDeps) => boolean;
export { Flex };
