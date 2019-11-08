import { DeepPartial, CoreThemeColors } from "@twilio/frame-ui";
import { LogLevelDesc } from "loglevel";
import { HistoryBuildOptions } from "../history";
import { Theme, BaseThemeColors } from "../components/theme";
import { ITask } from "../models";
import { CompatibilityOptions } from "../core/CompatibilityChecker";
/**
 * @class Config
 */
/**
 * Task filter callback
 * @callback TaskFilterCallback
 * @deprecated
 * @returns {boolean} whether task should be included
 */
export declare type TaskFilterCallback = (task: ITask) => boolean;
/**
 * Task filter definition
 * @typedef TaskFilter
 * @property {TaskFilterCallback} callback callback to filter the tasks
 * @property {string} [text] label to be shown for the filter
 * @deprecated
 */
export interface TaskFilter {
    callback: TaskFilterCallback;
    text?: string;
}
/**
 * Theme configuration
 * @typedef Config.ThemeConfigProps
 * @property {Config.PredefinedThemeName} [baseName] predefined theme name to take as base
 * @property {CoreThemeColors | BaseThemeColors} [colors] color overrides to be applied
 * @property {boolean} [light] whether theme is light or not
 * @property {Theme} [theme] Overrides for the theme object
 */
export interface ThemeConfigProps {
    baseName?: PredefinedThemeName;
    colors?: Partial<CoreThemeColors & BaseThemeColors>;
    light?: boolean;
    overrides?: DeepPartial<Theme>;
}
/**
 * Options for Twilio SDKs used by Flex
 * @typedef Config.SDKOptions
 * @property {Object} [worker] options to pass to TaskRouter Worker SDK. See {@link https://twilio.github.io/twilio-taskrouter.js/Worker.html#Worker__anchor}
 * @property {Object} [chat] options to pass to Chat SDK. See {@link http://media.twiliocdn.com/sdk/js/chat/releases/3.2.3/docs/Client.html#.create__anchor}
 * @property {Object} [voice] options to pass to Voice SDK. See {@link https://www.twilio.com/docs/voice/client/javascript/device#constructor}
 * @property {Object} [insights] options to pass to Sync SDK. See {@link https://media.twiliocdn.com/sdk/js/sync/releases/0.11.1/docs/Client.html#Client__anchor}
 */
export interface SDKOptions {
    worker?: object;
    chat?: object;
    voice?: object;
    insights?: object;
}
declare type DeprecatedThemeName = "MediumTheme" | "DarkTheme" | "BlueMediumTheme" | "BlueDarkTheme";
/**
 * Predefined theme name
 * @typedef {"GreyLight" | "GreyDark" | "FlexLight" | "FlexDark"} Config.PredefinedThemeName
 */
export declare type PredefinedThemeName = DeprecatedThemeName | "GreyLight" | "GreyDark" | "FlexLight" | "FlexDark";
/**
 * Logger type
 * @enum {"file"} LoggerType
 * @property {"file"} file - Store the logs in .txt file
 * @memberOf Config
 */
export declare enum LoggerType {
    /**
     * To be implemented:
     *
     * rollbar = "rollbar",
     * console = "console",
     */
    file = "file"
}
/**
 * Plugin Service interface
 * @typedef PluginService
 * @property {boolean} [enabled] Whether the plugin service is enabled or not
 */
export interface PluginService {
    enabled?: boolean;
}
/**
 * Notifications interface
 * @typedef Notifications
 * @property {boolean} [browser] Whether browser notifications are enabled
 */
export interface Notifications {
    browser?: boolean;
}
/**
 * Configuration interface
 *
 * @interface Config
 * @property {string} [language] language code, not used
 * @property {"silent" | "error" | "warning" | "info" | "debug" | "trace"} [logLevel="error"] level for logger
 * @property {ThemeConfigProps | PredefinedThemeName} [colorTheme] color theme configuration
 * @property {Config.SDKOptions} [sdkOptions] SDK options
 * @property {Config.SSOConfig} [sso] SSO configuration
 * @property {Object} [componentProps] Props to be set for React components. Key of the object is component name. e.g. { AgentDesktopView: { showPanel2: false } }
 * @property {Config.LoggerType} [logger.type] type of the logger
 * @property {"browser" | "memory"} [router.type] type of the router
 * @property {Object} [router.history] history object to use for routing
 * @property {boolean} [router.isolate] whether to isolate Flex routing from other routing. Makes Flex to use memory router.
 * @property {boolean} [disableBrowserVoice] whether to disable Twilio Voice SDK instantiation
 * @property {boolean} [rejectPendingReservations] whether to reject all pending reservations if user goes to an offline activity
 * @category State
 */
export interface Config {
    language?: string;
    logLevel?: LogLevelDesc;
    colorTheme?: ThemeConfigProps | PredefinedThemeName;
    serviceBaseUrl?: string;
    sdkOptions?: SDKOptions;
    sso?: SSOConfig;
    pluginService?: PluginService;
    componentProps?: any;
    logger?: {
        type?: LoggerType;
    };
    router?: {
        type: "browser" | "memory";
        history?: HistoryBuildOptions;
        isolate?: boolean;
    };
    disableBrowserVoice?: boolean;
    rejectPendingReservations?: boolean;
    warmTransfers?: {
        enabled?: boolean;
    };
    notifications?: Notifications;
}
/**
 * Skill definition
 *
 * @typedef Manager.SkillDefinition
 * @property {string} name name of the skill
 * @property {boolean} multivalue whether skill may have a numerical level
 * @property {number} [minimum] maximum value for level
 * @property {number} [maximum] minimum value for level
 */
export interface SkillDefinition {
    name: string;
    multivalue: boolean;
    minimum?: number;
    maximum?: number;
}
interface IntegrationsConfig {
    name: string;
    type: string;
    active: boolean;
    config: any;
    logo?: string;
    author?: string;
}
/**
 * Service configuration
 *
 * @typedef {Object} Manager.ServiceConfiguration
 * @property {string} account_sid account SID
 * @property {string} chat_service_instance_sid chat service instance SID
 * @property {string} runtime_domain Twilio Runtime Domain
 * @property {string} taskrouter_workspace_sid Task Router Workspace SID for Flex
 * @property {string} taskrouter_target_taskqueue_sid Task Router Task Queue SID
 * @property {string} taskrouter_target_workflow_sid Task Router Workflow SID
 * @property {Array<Manager.SkillDefinition>} taskrouter_skills all possible skills that can be assigned
 */
export interface ServiceConfiguration {
    account_sid: string;
    attributes: any;
    call_recording_enabled: boolean;
    chat_service_instance_sid: string;
    crm_attributes: any;
    integrations?: Array<IntegrationsConfig>;
    crm_callback_url: string;
    crm_enabled: boolean;
    crm_fallback_url: string;
    crm_type: string;
    date_created: string;
    date_updated: string;
    identity_realm_sid: string;
    identity_sso_login_url: string;
    identity_sso_logout_url: string;
    messaging_service_instance_sid: string;
    runtime_domain: string;
    service_version: string;
    status: string;
    taskrouter_offline_activity_sid?: string;
    taskrouter_skills?: Array<SkillDefinition>;
    taskrouter_target_taskqueue_sid: string;
    taskrouter_target_workflow_sid: string;
    taskrouter_taskqueues: any;
    taskrouter_worker_attributes: any;
    taskrouter_worker_channels: any;
    taskrouter_workspace_sid: string;
    ui_attributes: Partial<Config> & {
        version_compatibility?: CompatibilityOptions;
        version_message?: string;
    };
    ui_language: string;
    ui_version: string;
    url: string;
}
/**
 * SSO Configuration interface
 *
 * @typedef {Object} Config.SSOConfig
 * @property {string} [accountSid] account SID
 * @property {boolean} [loginPopup=false] whether to launch IdP login in a new window
 * @property {string} [loginPopupFeatures] standard window.open() features param to be applied to popup window
 * @property {string} [redirectUrl=window.location.href] redirect url where to return back from identity provider to log in to Flex
 */
export interface SSOConfig {
    accountSid?: string;
    idpUrl?: string;
    loginPopup?: boolean;
    loginPopupFeatures?: string;
    products?: Array<string>;
    redirectUrl?: string;
    tokenRefreshThresholdMs?: number;
}
export {};
