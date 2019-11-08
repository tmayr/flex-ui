import { Action, Dispatch } from "redux";
import { SSOLoginHandler } from "../core/SSOLoginHandler";
import { SSOTokenPayload } from "../core/SSOLoginHandler.definitions";
import { WorkerLogoutPayload } from "../actions/WorkerActions";
/**
 * Login states
 * @enum {"UNKNOWN" | "LOGGING_IN" | "LOGGED_IN" | "LOGGED_OUT" | "ERROR"} LoginState
 * @property {"UNKNOWN"} Unknown
 * @property {"LOGGING_IN"} LoggingIn
 * @property {"LOGGED_IN"} LoggedIn
 * @property {"LOGGED_OUT"} LoggedOut
 * @property {"ERROR"} Error
 * @memberOf SessionState
 */
export declare enum LoginState {
    Unknown = "UNKNOWN",
    LoggingIn = "LOGGING_IN",
    LoggedIn = "LOGGED_IN",
    LoggedOut = "LOGGED_OUT",
    Error = "ERROR"
}
/**
 * Active session state
 * @name SessionState
 * @property {string} [identity] identity of a logged in user
 * @property {any} [loginError] last error that occurred when logging in
 * @property {LoginState} [loginState] current state of the session
 * @property {SSOTokenPayload} [ssoTokenPayload] SSO token payload
 * @category State
 */
export interface SessionState {
    readonly identity: string;
    readonly loginHandler: SSOLoginHandler;
    readonly loginError: any;
    readonly loginState: LoginState;
    readonly ssoTokenPayload: SSOTokenPayload;
}
interface SessionStateAction extends Action {
    readonly payload?: any;
}
export declare const ACTION_LOGGED_OUT = "FLEX_ACTION_LOGGED_OUT";
export declare function reduce(state: SessionState, action: SessionStateAction): SessionState;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static init(): void;
    static ssoLogin(loginHandler: SSOLoginHandler): Promise<void>;
    private static handleTokenUpdated;
    private static handleTokenExpired;
    private static initClients;
    static logout(logoutPayload: WorkerLogoutPayload): Promise<void>;
}
export {};
