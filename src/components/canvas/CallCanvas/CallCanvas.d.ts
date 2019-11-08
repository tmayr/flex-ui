/// <reference types="react-redux" />
/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { CallCanvasChildrenProps } from "./CallCanvas.definitions";
/**
 * @classdesc This component renders a canvas for call based task.
 * Can be themed with [theme.CallCanvas]{@link CallCanvas.CallCanvasThemeProps}
 * @component
 * @hideconstructor
 * @category Components / Programmable
 */
export declare class CallCanvas extends React.PureComponent {
    static readonly friendlyName = "CallCanvas";
    static readonly displayName = "CallCanvas";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<CallCanvas.CallCanvasChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, "theme" | "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<React.ComponentClass<Pick<CallCanvasChildrenProps, "theme" | "call" | "task" | "conference" | "chatChannel" | "channelDefinition"> & Partial<CallCanvasChildrenProps>, any> & {
    WrappedComponent: React.ComponentType<CallCanvasChildrenProps>;
}, {}>;
