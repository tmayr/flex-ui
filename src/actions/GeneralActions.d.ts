import { ActiveFilter } from "../state/ViewState";
/**
 * @package
 * @typedef {Object} SelectViewPayload
 * @property {string} viewName
 * @memberof GeneralActions
 */
export interface SelectViewPayload {
    viewName: string;
}
/**
 * @package
 * @typedef ToggleSidebarPayload
 * @property {boolean} [open]
 * @memberof GeneralActions
 */
export interface ToggleSidebarPayload {
    open?: boolean;
}
/**
 * @package
 * @typedef SetComponentStatePayload
 * @property {string} name
 * @property {any} state
 * @memberof GeneralActions
 */
export interface SetComponentStatePayload {
    name: string;
    state: any;
}
/**
 * @package
 * @typedef ApplyListFiltersPayload
 * @property {string} key
 * @property {ActiveFilter[]} filters
 * @memberof GeneralActions
 */
export interface ApplyListFiltersPayload {
    key: string;
    filters: Array<ActiveFilter>;
}
/**
 * @package
 * @class GeneralActions
 * @hideconstructor
 * @category Actions
 */
export declare class GeneralActions {
    static registerActions(): void;
    private static navigateToView;
    private static showDirectory;
    private static hideDirectory;
    private static toggleSidebar;
    private static setComponentState;
    private static applyListFilters;
    private static removeListFilters;
}
