import { Dispatch } from "redux";
import { QueuesStateActionTypes, QueuesStateInterface, QueuesFilterFunction } from "./QueuesStateTypes";
export declare const WORKSPACE_KEY = "workspace";
export declare const initialState: QueuesStateInterface;
export declare function reduce(state: QueuesStateInterface, action: QueuesStateActionTypes): QueuesStateInterface;
export declare class Actions {
    private static _map?;
    private static _dispatcher;
    static dispatcher: Dispatch<QueuesStateActionTypes>;
    static init(): Promise<void>;
    static close(): void;
    static setFilter(filter: QueuesFilterFunction): void;
    private static fetchWorkerQueues;
    private static registerMapListeners;
    private static handleItemAdded;
    private static handleItemUpdated;
    private static handleItemRemoved;
}
