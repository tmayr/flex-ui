/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { IncomingTaskCanvasImpl } from "./IncomingTaskCanvasImpl";
/**
 * @classdesc This component renders a canvas for incoming task.
 * Can be themed with [theme.IncomingTaskCanvas]{@link IncomingTaskCanvas.IncomingTaskCanvasThemeProps}
 * @component
 * @hideconstructor
 * @param {IncomingTaskCanvas.IncomingTaskCanvasProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class IncomingTaskCanvas extends React.PureComponent {
    private static readonly friendlyName;
    static readonly displayName = "IncomingTaskCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<IncomingTaskCanvas.IncomingTaskCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./IncomingTaskCanvas.definitions").IncomingTaskCanvasProps & import("../../theme").ThemeProps, "theme" | "firstLine" | "secondLine" | "titleLine">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof IncomingTaskCanvasImpl, {}>;
