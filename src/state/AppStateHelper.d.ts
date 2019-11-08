import { AppState } from "./AppState";
import { ITask } from "../models";
export declare class AppStateHelper {
    private appState;
    constructor(appState: AppState);
    getUnconsumedMessagesCount(): number;
    getPendingTasks(): number;
    getUnconsumedMessagesCountForTask(task: ITask): number;
    isAgentView(): boolean;
}
