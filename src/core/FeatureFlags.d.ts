import { Manager } from "./Manager";
import { FeatureFlag } from "../models/FeatureFlagsModel";
export declare class FeatureFlags {
    static manager: Manager;
    static init(manager: Manager): void;
    static isEnabled(flag: FeatureFlag): boolean | undefined;
    static set(flag: FeatureFlag, enabled: boolean): void;
}
