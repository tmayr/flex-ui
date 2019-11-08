import { Config, ServiceConfiguration, SSOConfig } from "../state/AppConfig";
export interface PrivateServiceConfiguration extends ServiceConfiguration {
    call_recording_callback_url: string;
}
export declare const flexPublicConfigServiceUrl: string;
export declare const twilioServiceLoginUrl: string;
export declare const deprecatedFlexLookupServiceUrl: string;
export declare function getTwilioTaskQueuesUrl(workspaceSid: string): string;
export declare function getFlexServiceUrl(config: Config): string;
export declare function getChatOrchestrationServiceUrl(config: Config): string;
export declare function getFlexConfigServiceUrl(config: Config): string;
export declare function getCallRecordingCallbackUrl(config: ServiceConfiguration): string;
export declare function getSSOLoginUrl(config: SSOConfig, accountSid: string): string;
export declare function getSSOTokenRefreshUrl(config: SSOConfig, accountSid: string): string;
export declare function getPluginServiceUrl(config: Config): string;
export declare function getPublicConfigServiceUrl(accountSid: string, config?: SSOConfig): string;
export declare function getSessionUrl(config: Config): string;
