import * as React from "react";
import { CSSProps } from "../CSSProps";
/**
 * Available types for FiltersListItem
 *
 * @enum {"multiValue"} FiltersListItemType
 * @memberOf FiltersList
 * @property {"multiValue"} multiValue - Renders a type of filter input supporting multiple options
 */
export declare enum FiltersListItemType {
    multiValue = "multiValue"
}
/**
 * @typedef FiltersList.CustomFilterItemStructure
 * Interface defining the necessary React Elements for using a custom FilterListItem selector.
 * @property {React.ReactElement} field - input field that will provide the filter value. Make sure to trigger `props.handleChange` on field change.
 * @property {React.ReactElement} label - textual content to be displayed as FilterListItem summary. It receives `props.currentValue`, for single value filters, and `props.activeOption`, for multiple choice filters, that can both be used to dynamically change its content.
 */
export interface CustomFilterItemStructure {
    field: React.ReactElement;
    label: React.ReactElement;
}
/**
 * Actions with payload
 *
 * @typedef FiltersList.FilterDefinition
 * @property {string} id - Filter id, subject of the filter query
 * @property {React.ReactChild} title - Display of the filter group
 * @property {FiltersList.FiltersListItemType} type - Depending on this variable a different input field will be rendered in the component.
 * @property {string} fieldName - name of the checkbox fields.
 * @property {FiltersList.FilterDefinitionOption[]} [options] - For multiValue type, it provides the filter options
 * @property {string} [condition] - Optional parameter to define comparison operator. Ie. IN, NOT_IN, CONTAINS
 * @property {FiltersList.CustomFilterItemStructure} [customStructure] - Define to use non-native types of field to be display
 */
export interface FilterDefinition {
    id: string;
    title: React.ReactChild;
    fieldName: string;
    type?: FiltersListItemType;
    options?: Array<FilterDefinitionOption>;
    customStructure?: CustomFilterItemStructure;
    condition?: string;
}
/**
 * Object describing a single Filter option
 *
 * @typedef FiltersList.FilterDefinitionOption
 * @property {string} value - Value of the filter option
 * @property {string} name - Friendly name of the option
 * @property {boolean} default - Whether the option should be selected by default
 */
export interface FilterDefinitionOption {
    value: string;
    label: string;
    default?: boolean;
}
/**
 * @typedef FiltersList.FiltersListProps
 * @property {FiltersList.FilterDefinition[]} filters - Value of the filter option
 * @property {React.ReactChild} headerLabel - Textual content rendered in the header
 * @property {React.ReactChild} resetLabel - Textual content rendered 'reset' button
 * @property {React.ReactChild} applyLabel - Textual content rendered 'apply' button
 * @property {function} handleResetClick - Callback invoked on 'reset' button click
 * @property {function} handleApplyClick - Callback invoked on 'apply' button click and form submit
 * @property {boolean} [actionsDisabled] - Boolean to force main buttons to be disabled
 */
export interface FiltersListProps {
    filters: Array<FilterDefinition>;
    appliedFilters: FiltersData;
    headerLabel: React.ReactChild;
    resetLabel: React.ReactChild;
    applyLabel: React.ReactChild;
    handleResetClick: (data?: object) => void;
    handleApplyClick: (data: object) => void;
    actionsDisabled?: boolean;
}
/**
 * @typedef FiltersList.FiltersListThemeProps
 * @property {CSSProps} ApplyButton - main 'apply' button
 * @property {CSSProps} ResetButton - secondary 'reset' button
 * @property {CSSProps} ItemContainer - Filter item wrapper element
 * @property {CSSProps} ItemContainerExpanded - Filter item wrapper element when in expanded state
 */
export interface FiltersListThemeProps {
    ApplyButton: CSSProps;
    ResetButton: CSSProps;
    ItemContainer: CSSProps;
    ItemContainerExpanded: CSSProps;
}
interface FiltersData {
    [filterKey: string]: any;
}
interface FiltersListState {
    currentFilters: FiltersData;
    defaultFilters: FiltersData;
    expandedFilterId: string;
}
/**
 * @class FiltersList
 * @classdesc A component rendering a list of dynamic filters.
 * Can be themed with [theme.FiltersList]{@link FiltersList.FiltersListThemeProps}
 *
 * @category Components / Basic
 * @hideconstructor
 * @param {FiltersList.FiltersListProps}
 * @extends {React.PureComponent}
 */
export declare class FiltersList extends React.PureComponent<FiltersListProps, FiltersListState> {
    state: FiltersListState;
    static defaultProps: Partial<FiltersListProps>;
    static getDerivedStateFromProps(props: FiltersListProps, state: FiltersListState): {
        currentFilters: FiltersData;
        defaultFilters: FiltersData;
        expandedFilterId: string;
    };
    static getDefaultFilterValues(filters: Array<FilterDefinition>): FiltersData;
    render(): JSX.Element;
    private hasFilterApplied;
    private hasAllChangesApplied;
    private handleFilterChange;
    private handleSubmit;
    private applyFilters;
    private handleReset;
    private handleExpandClick;
}
export {};
