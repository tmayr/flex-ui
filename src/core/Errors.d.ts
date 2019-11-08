/**
 * Flex Errors
 * @namespace FlexError
 */
/**
 * Configuration error keys
 *
 *  @enum {"accountSid" | "sso"} ConfigErrorKeys
 *  @property {"accountSid"} accountSid - accountSid missing from configuration
 *  @property {"sso"} sso - sso configuration missing
 *  @memberOf FlexError.ConfigError
 */
export declare enum ConfigErrorKeys {
    accountSid = "accountSid",
    sso = "sso"
}
/**
 * @classdesc Error thrown by configuration / setup validation
 * @param {FlexError.ConfigError.ConfigErrorKeys} key error key
 * @memberof FlexError
 * @category Errors
 */
export declare class ConfigError extends Error {
    key: ConfigErrorKeys;
    constructor(key: ConfigErrorKeys, ...params: Array<any>);
}
/**
 * Validation error keys
 * @enum {"accountSid" | "sso" | "untrustedDomain"} ValidationErrorKeys
 * @property {"accountSid"} accountSid - failed to determine the account sid
 * @property {"sso"} sso - failed to determine sso configuration
 * @property {"untrustedDomain"} untrustedDomain - domain not whitelisted
 * @memberOf FlexError.ValidationError
 */
export declare enum ValidationErrorKeys {
    accountSid = "accountSid",
    sso = "sso",
    untrustedDomain = "untrustedDomain",
    invalidCertificate = "invalidCertificate"
}
/**
 * @classdesc Error thrown by user configuration / setup validation
 * @param {FlexError.ValidationError.ValidationErrorKeys} key error key
 * @memberof FlexError
 * @category Errors
 */
export declare class ValidationError extends Error {
    key: ValidationErrorKeys;
    constructor(key: ValidationErrorKeys, ...params: Array<any>);
}
/**
 * Browser error keys
 *
 * @enum {"windowClosed" | "popupBlocked" | "noWindowOpener" | "redirecting"} BrowserErrorKeys
 * @property {"windowClosed"} windowClosed - user closed the login window
 * @property {"popupBlocked"} popupBlocked - popup was blocked by browser
 * @property {"noWindowOpener"} noWindowOpener - login window has no window.opener set
 * @property {"redirecting"} redirecting -  browser is being redirected
 * @memberOf FlexError.BrowserError
 */
export declare enum BrowserErrorKeys {
    windowClosed = "windowClosed",
    popupBlocked = "popupBlocked",
    noWindowOpener = "noWindowOpener",
    redirecting = "redirecting"
}
/**
 * @classdesc Error that is thrown if there is something problem with web browser.
 * @param {FlexError.BrowserError.BrowserErrorKeys} key error key
 * @memberof FlexError
 * @category Errors
 */
export declare class BrowserError extends Error {
    key: BrowserErrorKeys;
    constructor(key: BrowserErrorKeys, ...params: Array<any>);
}
/**
 * @classdesc Error that is throw if there is some internal problem with Flex.
 * @memberof FlexError
 * @category Errors
 */
export declare class InternalError extends Error {
    constructor(...params: Array<any>);
}
/**
 * Client error keys
 * @enum {"loginWindowOpenedFromLoginWindow" | "metaNoReferrerMissing"} ClientErrorKeys
 * @property {"loginWindowOpenedFromLoginWindow"} loginWindowOpenedFromLoginWindow - new login window opened from login window</li>
 * @property {"metaNoReferrerMissing"} metaNoReferrerMissing - element meta with attributes name="referrer" content="no-referrer" is missing from document head section</li>
 * @memberOf FlexError.ClientError
 */
export declare enum ClientErrorKeys {
    loginWindowOpenedFromLoginWindow = "loginWindowOpenedFromLoginWindow",
    metaNoReferrerMissing = "metaNoReferrerMissing"
}
/**
 * @classdesc Error that is thrown if there is some problem with customization code.
 * @param {FlexError.ClientError.ClientErrorKeys} key error key
 * @memberof FlexError
 * @category Errors
 */
export declare class ClientError extends Error {
    key: ClientErrorKeys;
    constructor(key: ClientErrorKeys, ...params: Array<any>);
}
