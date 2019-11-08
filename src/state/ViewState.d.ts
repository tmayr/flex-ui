import { Action, Dispatch } from "redux";
import { Location } from "history";
import { ITask } from "../models";
import { ApplyListFiltersPayload } from "../actions/GeneralActions";
/**
 * Filter condition
 * @enum { "IN" | "NOT_IN" | "CONTAINS" } FilterConditions
 * @property {"IN"} IN
 * @property {"NOT_IN"} NOT_IN
 * @property {"CONTAINS"} CONTAINS
 */
export declare enum FilterConditions {
    IN = "IN",
    NOT_IN = "NOT_IN",
    CONTAINS = "CONTAINS"
}
/**
 * Active filter
 * @typedef ActiveFilter
 * @property {string} name name of the field to filter against
 * @property {FilterConditions} condition condition to use for the filter
 * @property {Array<string> | string} values value or an array of values to filter
 */
export interface ActiveFilter {
    name: string;
    condition: FilterConditions;
    values: Array<string> | string;
}
/**
 * Filters state
 * @typedef {Object} FiltersState
 * @property {ActiveFilters} [key] active filters by key
 */
export interface FiltersState {
    [key: string]: ActiveFilters;
}
/**
 * @classdesc Describes the state of active filter
 */
export declare class ActiveFilters {
    filters: Array<ActiveFilter>;
    /**
     * Represents the type of filter.
     */
    type: string;
    /**
     * @param {Array<ActiveFilter>} filters Represents array of active filter.
     * @param {string} type Represents the type of filter.
     */
    constructor(filters: Array<ActiveFilter>, type: string);
    /**
     * Represents the filter in query string.
     */
    readonly query: string;
    /**
     * Represents the number of filter values applied.
     */
    readonly count: number;
}
/**
 * State of the view
 * @name ViewState
 * @property {string} [activeView] name of the currently active view
 * @property {Object} [componentViewStates] component view states by component key
 * @property {FiltersState} [filters] Represents the list of active filters.
 * @category State
 */
export interface ViewState {
    readonly isSideNavOpen: boolean;
    readonly activeView?: string;
    readonly selectedTaskSid?: string;
    readonly selectedTaskInSupervisorSid?: string;
    readonly selectedWorkerInSupervisorSid?: string;
    readonly isDirectoryOpen?: boolean;
    readonly componentViewStates: {
        [k: string]: any;
    };
    readonly filters?: FiltersState;
}
export interface ViewStateAction extends Action {
    readonly payload?: any;
}
export declare const ACTION_TOGGLE_SIDEBAR = "VIEW_TOGGLE_SIDEBAR";
export declare const ACTION_UPDATE_VIEW = "VIEW_UPDATE";
export declare const ACTION_UPDATE_FILTER = "VIEW_UPDATE_FILTER";
export declare const ACTION_DELETE_FILTER = "VIEW_DELETE_FILTER";
export declare const ACTION_SET_COMPONENT_STATE = "VIEW_SET_COMPONENT_STATE";
export declare const ACTION_DELETE_COMPONENT_STATE = "VIEW_DELETE_COMPONENT_STATE";
export declare function reduce(state: ViewState, action: ViewStateAction): ViewState;
declare type HistoryLocation = string | Location;
declare type PushPayload = HistoryLocation;
declare type ReplacePayload = HistoryLocation;
declare type GoPayload = number;
export declare class Actions {
    private static _dispatcher;
    static dispatcher: Dispatch<any>;
    static setComponentState(name: string, state: any): void;
    static deleteComponentState(name: string): void;
    static toggleSidebar(): void;
    static hideSidebar(): void;
    static showSidebar(): void;
    static setActiveView(name: string): void;
    static showDirectory(task: ITask): void;
    static hideDirectory(): void;
    static selectTask(taskSid: string): void;
    static selectTaskInSupervisor(taskSid: string): void;
    static selectWorkerInSupervisor(workerSid: string): void;
    static push(location: PushPayload): Promise<void>;
    static replace(location: ReplacePayload): Promise<void>;
    static go(steps: GoPayload): Promise<void>;
    static goForward(...args: Array<any>): Promise<void>;
    static goBack(...args: Array<any>): Promise<void>;
    static applyListFilters(payload: ApplyListFiltersPayload): void;
    static removeListFilters(payload: ApplyListFiltersPayload): void;
}
export {};
