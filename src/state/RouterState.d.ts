import { AnyAction } from "redux";
import * as AppConfigReducer from "./AppConfig.Actions";
import * as PhoneReducer from "./PhoneState";
import { RouterState } from "react-router-redux";
import { Config } from "./AppConfig";
export declare type RootAction = AnyAction & AppConfigReducer.AppConfigAction & PhoneReducer.PhoneAction;
export declare const FLEX_LOCATION_CHANGE = "@@flex/LOCATION_CHANGE";
export declare const createReducer: (config: Config) => (state: RouterState, action: RootAction) => any;
