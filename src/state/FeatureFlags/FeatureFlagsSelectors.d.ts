import { AppState } from "../AppState";
import { FeatureDict, FeatureOverrideDict } from "../../models/FeatureFlagsModel";
export declare const featureFlagsSelector: import("reselect").OutputSelector<AppState, FeatureDict, (res1: FeatureDict, res2: FeatureOverrideDict) => FeatureDict>;
