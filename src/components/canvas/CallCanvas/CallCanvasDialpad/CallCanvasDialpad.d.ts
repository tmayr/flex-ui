/// <reference types="hoist-non-react-statics" />
import * as React from "react";
import { CallCanvasDialpadImpl } from "./CallCanvasDialpadImpl";
import { CallCanvasDialpadProps } from "./CallCanvasDialpad.definitions";
/**
 * @classdesc This component renders a dialpad on call canvas.
 * @component
 * @hideconstructor
 * @param {CallCanvasDialpad.CallCanvasDialpadProps} props - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class CallCanvasDialpad extends React.PureComponent<CallCanvasDialpadProps> {
    static readonly displayName = "CallCanvasDialpad";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<CallCanvasDialpad.CallCanvasDialpadChildrenProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    render(): JSX.Element;
}
export declare const Connected: {
    new (props: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<import("./CallCanvasDialpad.definitions").CallCanvasDialpadChildrenProps, "dialpadState">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    readonly displayName: string;
    contextType?: React.Context<any>;
} & import("hoist-non-react-statics").NonReactStatics<typeof CallCanvasDialpadImpl, {}>;
