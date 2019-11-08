import { ITask } from "./models";
/**
 * @enum {"AddToChatChannel" | "DeactivateChatChannel" | "LeaveChatChannel"} ChatOrchestration
 * @property {"AddToChatChannel"} AddToChatChannel
 * @property {"DeactivateChatChannel"} DeactivateChatChannel
 * @property {"LeaveChatChannel"} LeaveChatChannel
 * @memberof ChatOrchestrationManager
 */
export declare enum ChatOrchestration {
    AddToChatChannel = "AddToChatChannel",
    DeactivateChatChannel = "DeactivateChatChannel",
    LeaveChatChannel = "LeaveChatChannel"
}
/**
 * Callback that returns an array of orchestrations based on a task
 * @typedef ChatOrchestrator.ChatOrchestrationsCallback
 * @param {ITask} task task
 * @return {Array<ChatOrchestrator.ChatOrchestration>}
 */
export declare type ChatOrchestrationsCallback = (task: ITask) => Array<ChatOrchestration>;
/**
 * @typedef ChatOrchestrationsEvents
 * @property {Set<ChatOrchestrationManager.ChatOrchestration>} accepted orchestrations for reservation accepted events
 * @property {Set<ChatOrchestrationManager.ChatOrchestration>} wrapup orchestrations for reservation wrapup events
 * @property {Set<ChatOrchestrationManager.ChatOrchestration>} completed orchestrations for reservation completed events
 * @memberof ChatOrchestrationManager
 */
export interface ChatOrchestrationsEvents {
    accepted: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    wrapup: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    completed: Set<ChatOrchestration> | ChatOrchestrationsCallback;
    [k: string]: Set<ChatOrchestration> | ChatOrchestrationsCallback;
}
/**
 * Chat orchestration manager. Use to disable Flex UI chat orchestrations.
 * @class ChatOrchestrationManager
 * @category Framework
 */
export declare class ChatOrchestrationManager {
    private readonly events;
    private readonly mapEventToFunc;
    /**
     * Get orchestrations or orchestrations callback for a reservation event
     * @param {"accepted" | "wrapup" | "completed"} event to get orchestrations for
     * @returns {Array<ChatOrchestrationManager.ChatOrchestration> | ChatOrchestrationManager.ChatOrchestrationsCallback}
     */
    getOrchestrations(event: keyof ChatOrchestrationsEvents): Array<ChatOrchestration> | ChatOrchestrationsCallback;
    /**
     * Set orchestrations for a reservation event
     * @param {"accepted" | "wrapup" | "completed"} event to get orchestrations for
     * @param {Array<ChatOrchestrationManager.ChatOrchestration> | ChatOrchestrationManager.ChatOrchestrationsCallback } orchestrations to set for event
     */
    setOrchestrations(event: keyof ChatOrchestrationsEvents, orchestrations: Array<ChatOrchestration> | ChatOrchestrationsCallback): void;
    /**
     * Clears / disables all orchestrations for chat
     */
    clearAllOrchestrations(): void;
    /**
     * Orchestrates Task wrapup action
     * @param {ITask} task task to orchestrate
     * @returns {Promise<boolean>} promise with boolean indicating if orchestration happened
     */
    orchestrateWrapupTask(task: ITask): Promise<boolean>;
    /**
     * Orchestrates Task complete action
     * @param {ITask} task task to orchestrate
     * @returns {Promise<boolean>} promise with boolean indicating if orchestration happened
     */
    orchestrateCompleteTask(task: ITask): Promise<boolean>;
    /**
     * @private
     */
    handleReservationEvent(event: keyof ChatOrchestrationsEvents, task: ITask): Promise<boolean>;
    private addWorkerToChatChannelInternal;
    private deactivateChatChannelInternal;
    private leaveAgentFromChatInternal;
    private isChatOrchestrationsCallbackType;
    private getOrchestrationsSet;
    private validateOrchestrations;
}
/**
 * Singleton instance of ChatOrchestrationManager
 * @type {ChatOrchestrationManager}
 * @category Framework
 */
export declare const ChatOrchestrator: ChatOrchestrationManager;
