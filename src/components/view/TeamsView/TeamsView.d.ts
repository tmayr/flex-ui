/// <reference types="react-redux" />
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { AppState } from "../../../state";
import { IWorker } from "../../../models";
import { SupervisorWorkerState } from "../../../state/State.definition";
import { ThemeProps } from "../../theme";
import { ViewAdditionalProps } from "../../ViewCollection";
import { ActiveFilters } from "../../../state/ViewState";
import { FilterDefinition } from "@twilio/frame-ui";
/**
 * The type of filters on teams view
 * @enum {"teams-view-search" | "teams-view-filter"} FiltersType
 * @property {"teams-view-search"} search
 * @property {"teams-view-filter"} filter
 * @memberOf TeamsView
 */
export declare enum FiltersType {
    search = "teams-view-search",
    filter = "teams-view-filter"
}
/**
 * @typedef {Function} TeamsView.FilterDefinitionFactory
 */
export declare type FilterDefinitionFactory = (appState: AppState, ownProps: TeamsViewProps) => FilterDefinition;
/**
 * Properties of Teams view.
 * @typedef {ViewCollection.ViewAdditionalProps} TeamsView.TeamsViewProps
 * @property {IWorker} [selectedWorker] Represents the selected worker.
 * @property {RouteComponentProps<TeamsView.TeamsViewRouteParams>} [route] Represents route params.
 * @property {boolean} [filtersEnabled] Represents if filters are enabled.
 * @property {ActiveFilters} [appliedFilters] Represents applied filters.
 * @property {Array<FiltersList.FilterDefinition | TeamsView.FilterDefinitionFactory>} [filters] - list of filter or filterFactories function
 */
export interface TeamsViewProps extends ViewAdditionalProps {
    selectedWorker?: IWorker;
    route: RouteComponentProps<TeamsViewRouteParams>;
    filtersEnabled?: boolean;
    appliedFilters?: ActiveFilters;
    filters?: Array<FilterDefinition | FilterDefinitionFactory>;
}
/**
 * @typedef {TeamsView.TeamsViewProps} TeamsView.TeamsViewChildrenProps
 * @property {string} [monitoredTaskSid] - Represents current monitoring task
 * @property {Array<SupervisorWorkerState>} [workers] - Represents list of workers.
 * @property {SupervisorWorkerState} [stickyWorker] - Represents selected worker.
 */
export interface TeamsViewChildrenProps extends TeamsViewProps {
    filters: Array<FilterDefinition>;
    monitoredTaskSid?: string;
    workers?: Array<SupervisorWorkerState>;
    stickyWorker?: SupervisorWorkerState;
    isLoadingWorkers?: boolean;
}
/**
 * Properties of routes in teams view.
 * @typedef TeamsView.TeamsViewRouteParams
 * @property {("tasks" | "workers")} [resources] Represents if task or worker is part of route resource.
 * @property {string} [sid] Represents the indentification of the task or worker
 */
export interface TeamsViewRouteParams {
    resource?: "tasks" | "workers";
    sid?: string;
}
/**
 * @classdesc This renders teams page.
 * @class TeamsView
 * @component
 * @hideconstructor
 * @param {TeamsView.TeamsViewProps} - Properties to be passed to configure this component.
 * @category Components / Programmable
 */
export declare class TeamsView extends React.PureComponent<TeamsViewProps & ThemeProps> {
    static readonly displayName = "TeamsView";
    /**
     * Dynamic content store
     * @static
     * @type {DynamicContentStore<TeamsView.TeamsViewProps>}
     * @readonly
     */
    static readonly Content: import("@twilio/frame-ui").DynamicContentStore;
    static activitiesFilter: (appState: AppState) => FilterDefinition;
    /**
     * Default properties
     * @static
     * @type {Partial<TeamsView.TeamsViewProps>}
     * @readonly
     */
    static readonly defaultProps: Partial<TeamsViewProps>;
    private getBaseRoute;
    render(): JSX.Element;
    private renderChildrenFromRoute;
}
export declare const Connected: React.ComponentClass<Pick<TeamsViewChildrenProps, never> & TeamsViewProps, any> & {
    WrappedComponent: React.ComponentType<TeamsViewChildrenProps>;
};
