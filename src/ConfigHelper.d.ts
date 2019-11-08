import { Config, SSOConfig } from "./state/AppConfig";
export interface PublicConfigAttributes {
    loginPopup: boolean;
}
export interface PublicConfiguration {
    runtime_domain: string;
    public_attributes: PublicConfigAttributes;
    account_sid: string;
}
export declare function fetchRuntimeDomainInfo(domain: string, options?: {
    mapDomainToLookup: (domain: string) => string;
}): Promise<PublicConfiguration>;
export declare function fetchPublicConfiguration(accountSid: string, useCache?: boolean, ssoConfig?: SSOConfig): Promise<PublicConfiguration>;
export declare function getStoredConfig(): Config;
export declare function clearStoredConfig(): void;
export declare function storeConfig(config: Config): void;
