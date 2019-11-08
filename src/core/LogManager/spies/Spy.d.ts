import { Target, LogEntry } from ".";
/**
 * A function that a spy uses to pass on collected data
 * @typedef {function} NotifyCallback
 * @param {Log.LogEntry} arg data unit collected by a spy
 * @memberof Log
 */
export declare type NotifyCallback = (arg: LogEntry) => any;
/**
 * @typedef {function} OnStartCallback
 * @param {any} returnedValue a value returned from the `start` method of a spy
 * @memberof Log
 */
export declare type OnStartCallback = (returnedValue?: any) => void;
/**
 * Configurable options common to all spies
 * @package
 * @typedef {object} SpyCommonConfigurableOptions
 * @property {Log.Target} [target] an entity that is being tracked by spy
 * @property {string} [targetAlias] an human-readable description of a target
 * @property {Log.OnStartCallback} [onStart] allows to run some logic after a spy started
 * @memberof Log
 */
export interface SpyCommonConfigurableOptions {
    target?: Target;
    targetAlias?: string;
    onStart?: OnStartCallback;
}
/**
 * @package
 * @typedef {object} SpyConstructorOptions
 * @property {NotifyCallback} trigger
 * @mixes SpyCommonConfigurableOptions
 * @memberof Log
 */
export declare type SpyConstructorOptions = SpyCommonConfigurableOptions & {
    trigger: NotifyCallback;
};
/**
 * A base class to inherit from when creating a spy class for a specific domain.
 * A spy goal is to invoke a trigger function with a payload, containing logged data.
 * @memberof Log
 */
export declare abstract class Spy {
    protected target: Target;
    protected targetAlias: string | Target;
    protected trigger: NotifyCallback;
    protected onStart: OnStartCallback;
    /**
     * Will be executed when a related log manager starts
     * @method start
     * @memberof Log.Spy
     * @instance
     */
    abstract start(): void;
    /**
     * Will be executed when a related log manager stops
     * @method stop
     * @memberof Log.Spy
     * @instance
     */
    abstract stop(): void;
    /**
     * @param {Log.SpyConstructorOptions} options
     */
    constructor(options: SpyConstructorOptions);
}
