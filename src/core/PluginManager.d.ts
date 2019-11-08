import { Manager } from "./Manager";
import { Flex } from "../FlexGlobal";
/**
 * Flex Plugin
 *
 * @typedef {Object} Plugin
 * @property {string} name name of the plugin
 * @property {PluginManager.InitCallback} init init function of the plugin. Instance of {@link Flex} and {@link Manager} will be passed as arguments.
 * @memberof PluginManager
 */
interface Plugin {
    name: string;
    init(flexComponents: typeof Flex, manager: Manager, plugins?: Array<PluginManagerDefinition>): Promise<void>;
}
/**
 * Plugin constructor type. Plugins must nave new() operator defined.
 *
 * @typedef {Object} PluginConstructor
 * @property {PluginManager.Plugin} new() constructor of a plugin
 * @memberof PluginManager
 */
export interface PluginConstructor {
    new (): Plugin;
}
/**
 * Plugin definition
 *
 * @private
 * @interface PluginDefinition
 */
interface PluginDefinition {
    name: string;
    flexVersion: string | Array<string>;
    src: string;
    version: string;
    phase: number;
}
interface PluginManagerDefinition extends PluginDefinition {
    uuid: string;
    state: PluginState;
}
export declare enum PluginState {
    NotStarted = "NotStarted",
    Loaded = "Loaded",
    Initialising = "Initialising",
    Initialized = "Initialized",
    Failed = "Failed"
}
declare type Callback = () => void;
interface PluginManagerListener {
    callback: Callback;
    uuid: string;
}
/**
 * @classdesc Flex Plugin Manager
 * @package
 * @category Core
 */
export declare class PluginManager {
    private _manager;
    private _flexComponents;
    private _plugins;
    private _phase;
    private _listeners;
    readonly plugins: Array<PluginManagerDefinition>;
    readonly phase: number;
    readonly listeners: Array<PluginManagerListener>;
    /**
     * Set up Plugin manager by providing Flex instance params
     *
     * @private
     * @param {*} flexComponents
     * @param {Manager} manager
     */
    setup(flexComponents: any, manager: Manager): void;
    /**
     * Creates an instance of Flex plugin and initializes it.
     * Must be called from Plugin main script after Flex has fetched and loaded the plugin.
     *
     * @param {PluginManager.PluginConstructor} Plugin    plugin type
     */
    init(Plugin: PluginConstructor): void;
    /**
     * Stores the list of plugin definition
     * @param {Array<PluginManagerDefinition>} plugins  the list of plugins
     * @private
     */
    storePluginDefinition(plugins: Array<PluginManagerDefinition>): void;
    /**
     * Updates the plugin state
     * @param uuid              the unique identifier of this plugin
     * @param state             the state to update to
     */
    updatePluginState(uuid: string, state: PluginState): void;
    /**
     * Creates an instance of Flex plugin and initializes it.
     * Must be called from Plugin main script after Flex has fetched and loaded the plugin.
     *
     * @param {PluginConstructor} Plugin    Plugin type
     * @param {string} uuid                 the unique identifier of this plugin
     * @private
     */
    private doInit;
    /**
     * Checks whether the currentScript can be initialized.
     * It checks the phase of the script against the phase that is currently initializing.
     * If all the previous plugins in that phase have initialized, then it returns true, otherwise false.
     *
     * @param {string} uuid     the unique identifier of this plugin
     * @return whether the script can be initialized
     * @private
     */
    private canInitPlugin;
    /**
     * Increments the phase
     * @private
     */
    private incrementPhase;
    /**
     * Notifies all the listener of a change in state
     * @private
     */
    private notifyListeners;
    /**
     * Creates a listener on state changes
     * @param {Callback} callback  the listener callback
     * @private
     */
    private createListener;
}
/**
 * @constant {PluginManager} Plugins Instance of Flex Plugin Manager
 * @category Core
 */
export declare const Plugins: PluginManager;
/**
 * Loads all plugins.
 * Request plugins from plugin service and loads all plugin scripts to page.
 * Plugin script must call Flex.Plugins.init() method.
 *
 * @private
 * @param {*} flexComponents
 * @param {Manager} manager
 * @returns {Promise<void>}
 */
export declare function loadPlugins(flexComponents: any, manager: Manager): Promise<void>;
export {};
