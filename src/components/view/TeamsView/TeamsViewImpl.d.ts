import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
import { ITask, IWorker } from "../../../models";
import { TeamsViewChildrenProps } from "./TeamsView";
export declare const displayName = "TeamsView";
export declare const contentStore: DynamicContentStore;
interface TeamsViewImplState {
    isFilterPanelOpen: boolean;
    searchText: string;
    selectedTask?: ITask;
    selectedWorker?: IWorker;
}
export declare class TeamsViewImpl extends React.PureComponent<TeamsViewChildrenProps, TeamsViewImplState> {
    state: TeamsViewImplState;
    private static getTaskSidFromRoute;
    componentDidMount(): void;
    componentDidUpdate(oldProps: TeamsViewChildrenProps, oldState: TeamsViewImplState): void;
    static getDerivedStateFromProps(props: TeamsViewChildrenProps, state: TeamsViewImplState): {
        selectedTask: ITask;
        selectedWorker: IWorker<any>;
    };
    private static getWorkerSidFromRoute;
    private loadChatChannel;
    private loadWorkers;
    private renderDataTable;
    render(): JSX.Element;
    private renderFilters;
    private rendersResultsSummary;
    private applyFilters;
    private resetFilters;
    private onSearchTextChange;
    private onSearchClear;
    private onSearchSubmit;
    private onFilterButtonClick;
    openFiltersPanel: () => void;
    closeFiltersPanel: (callback?: () => void) => void;
    private handleTaskSelection;
    private handleWorkerSelection;
}
export {};
