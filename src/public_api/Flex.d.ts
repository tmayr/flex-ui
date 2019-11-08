import { Config } from "../state/AppConfig";
import { Manager } from "../core/Manager";
import { SSOConfig } from "../core/SSOLoginHandler";
/**
 * @module Flex
 */
/**
 * Creates an instance FlexHelper that can be used to render Flex
 *
 * @param {Config} config configuration object
 * @returns {Promise<FlexHelper>} if Flex was successfully initialized
 */
export declare function create(config: Config): Promise<FlexHelper>;
/**
 * Renders a progress spinner
 *
 * @param {string | Element} [nodeOrSelector="body"] selector of element where to render the component
 * @returns {this}
 */
export declare function progress<T>(this: T, nodeOrSelector?: string | Element): T;
/**
 * Renders a login form if needed to provide account information and log user in.
 * Updates the provided configuration object.
 *
 * Renders a LoginFormView component if accountSid is not provided or there are problems with signing user in.
 *
 * @param {Config} config configuration object
 * @param {string | Element} [nodeOrSelector="body"] DOM node or selector where to render the component
 * @returns {Promise<void>} if resolved, then Flex instance can be created with provided config object
 */
export declare function provideLoginInfo(config?: Config, nodeOrSelector?: string | Element): Promise<void>;
/**
 * Runs Flex with default setup.
 * Renders a loading spinner and prompts for login information if needed.
 *
 * @param {Config} [config] configuration object
 * @param {string | Element} [nodeOrSelector="body"] DOM node or selector string where to render Flex
 * @returns {Promise<void>}
 */
export declare function runDefault(config?: Config, nodeOrSelector?: string | Element): Promise<void>;
/**
 * Tries to log user in to Flex.
 * Can redirect the current browser window to the identity provider URL or
 * open a new window to navigate to IdP URL if config.loginPopup is set.
 *
 * @param {Config.SSOConfig} [config={}] SSO configuration object
 * @return {Promise<boolean>} true if there is valid token and user can be logged in.
 */
export declare function tryLogin(config?: SSOConfig): Promise<boolean>;
/**
 * @classdesc Helper class to run flex
 * @package
 */
declare class FlexHelper {
    private _manager;
    private constructor();
    static create(config: Config): Promise<FlexHelper>;
    /**
     * Gets the instance of Manager
     *
     * @readonly
     * @type {Manager} Flex Manager instance
     */
    readonly manager: Manager;
    /**
     * Renders an instance of Flex to the container specified by selector.
     * Renders {@link ContextProvider} with created {@link Manager} instance and {@link RootContainer}.
     *
     * @param {string | Element} [nodeOrSelector="body"] DOM node or selector string where to render the component
     */
    init(nodeOrSelector?: string | Element): void;
}
export {};
