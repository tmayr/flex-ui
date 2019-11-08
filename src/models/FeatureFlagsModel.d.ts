export declare type FeatureEndpointResponse = {
    features: Feature[];
};
export declare enum FeatureFlag {
    TestFeature = "test-feature",
    TestPilotFeature = "test-pilot-feature",
    MarkdownSupport = "markdown-support"
}
export declare enum FeatureStage {
    Private = "private",
    Pilot = "pilot",
    Beta = "beta",
    ForceEnable = "force-enable",
    ForceDisable = "force-disable"
}
export interface Feature {
    id: FeatureFlag;
    enabled: boolean;
    name: string;
    description: string;
    stage: FeatureStage;
    doc_url?: string;
}
export declare const FEATURE_FLAGS_UPDATE = "FLEX_FEATURE_FLAGS_UPDATE";
export declare const FEATURE_FLAGS_OVERRIDES_UPDATE = "FLEX_FEATURE_FLAGS_OVERRIDES_UPDATE";
export declare const FEATURE_FLAG_OVERRIDE = "FLEX_FEATURE_FLAG_OVERRIDE";
export declare type FeatureFlagsAction = {
    type: typeof FEATURE_FLAGS_UPDATE;
    payload: Feature[];
} | {
    type: typeof FEATURE_FLAGS_OVERRIDES_UPDATE;
    payload: FeatureOverrideDict;
} | {
    type: typeof FEATURE_FLAG_OVERRIDE;
    payload: Partial<Feature>;
};
export declare type FeatureDict = {
    [id in FeatureFlag | string]: Feature;
};
export declare type FeatureOverrideDict = {
    [id in FeatureFlag | string]: Partial<Feature>;
};
