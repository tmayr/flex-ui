/// <reference types="node" />
import { EventEmitter } from "events";
import { SSOTokenPayload } from "./core/SSOLoginHandler.definitions";
export declare enum FlexEvent {
    /**
     * Flex splitter resized
     * @event FlexEventEmitter#flexSplitterResize
     */
    flexSplitterResize = "flexSplitterResize",
    /**
     * User logged in. Fired during @see {Manager} creation
     * @event FlexEventEmitter#userLoggedIn
     */
    userLoggedIn = "userLoggedIn",
    /**
     * Selected view changed
     * @event FlexEventEmitter#selectedViewChanged
     * @param {string} newViewName name of the view
     */
    selectedViewChanged = "selectedViewChanged",
    /**
     * Token updated
     * @event FlexEventEmitter#tokenUpdated
     * @param {SSOTokenPayload} tokenPayload new token payload
     */
    tokenUpdated = "tokenUpdated",
    /**
     * Token expired
     * @event FlexEventEmitter#tokenExpired
     */
    tokenExpired = "tokenExpired",
    /**
     * All plugins are loaded
     * @event FlexEventEmitter#pluginsLoaded
     */
    pluginsLoaded = "pluginsLoaded"
}
/**
 * @classdesc Emits Flex events
 *
 * @extends {EventEmitter}
 * @category Core
 */
export declare class FlexEventEmitter extends EventEmitter {
    emit(event: FlexEvent, ...args: Array<any>): boolean;
    emitSplitterResize(): void;
    emitUserLoggedIn(): void;
    emitSelectedViewChanged: (newViewName: string) => void;
    emitTokenUpdated(tokenPayload: SSOTokenPayload): void;
    emitTokenExpired(): void;
    emitPluginsLoaded(): void;
}
