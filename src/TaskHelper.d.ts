import { ChatChannelHelper, ChatMessageHelper } from "@twilio/frame-ui";
import { ITask } from "./models";
import { ConferenceParticipant } from "./state/ConferencesState";
/**
 * @classdesc Helper class for tasks
 * @category Framework
 */
export declare class TaskHelper {
    private task;
    private chatChannelHelper;
    /**
     * Creates an instance of TaskHelper.
     * @param {ITask} task task
     */
    constructor(task: ITask);
    /**
     * Gets the helper for last chat message.
     *
     * @readonly
     * @deprecated
     * @type {TaskHelper.ChatMessageHelper}
     */
    readonly lastChatMessage: ChatMessageHelper;
    /**
     * Gets the helper for associated chat channel.
     *
     * @readonly
     * @type {ChatChannelHelper}
     */
    readonly chat: ChatChannelHelper;
    /**
     * Duration since last update of a task. Uses `dateUpdated` property of a task.
     *
     * @readonly
     * @type {string}
     */
    readonly durationSinceUpdate: string;
    /**
     * Duration since last update of a task in short format. Uses `dateUpdated` property of a task.
     *
     * @readonly
     * @type {string}
     */
    readonly durationSinceUpdateShort: string;
    readonly jsonString: string;
    /**
     * Returns true if task is a live (accepted) call.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isLiveCall(task: ITask): boolean;
    /**
     * Returns true if call associated with a task is on hold
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isCallOnHold(task: ITask): boolean;
    /**
     * Returns true if current worker can kick the worker participant in the live call task
     *
     * @static
     * @param {ITask} task
     * @param {ConferenceParticipant} participant
     * @returns {boolean}
     */
    static canKickWorkerParticipant(task: ITask, participant: ConferenceParticipant): boolean;
    /**
     * Returns true if task is live call task and worker can hold this call task
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static canHold(task: ITask): boolean;
    /**
     * Returns true if task is conference call and worker is on hold
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static amIOnHold(task: ITask): boolean;
    /**
     * Returns true if task is live call task and worker can transfer this call task
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static canTransfer(task: ITask): boolean;
    /**
     * Returns true if task is regular Flex conference call, not a custom call task
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isRegularConferenceCall(task: ITask): boolean;
    /**
     * Returns true if task is Flex conference call with more than 2 participants
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isGroupCall(task: ITask): boolean;
    /**
     * Returns true if task is a live (accepted) chat based.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isLiveChat(task: ITask): boolean;
    /**
     * Returns true if task is an incoming call.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isIncomingCall(task: ITask): boolean;
    /**
     * Returns true if task is a chat based
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isChatBasedTask(task: ITask): boolean;
    /**
     * Returns true if task is a call based task
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isCallTask(task: ITask): boolean;
    /**
     * Unused.
     * @ignore
     */
    static isVideoCallTask(task: ITask): boolean;
    /**
     * Gets chat channel sid for a task
     *
     * @static
     * @param {ITask} task
     * @returns {string} chat channel sid
     */
    static getTaskChatChannelSid(task: ITask): any;
    /**
     * Returns if reservation associated with the task is in pending state.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isPending(task: ITask): boolean;
    /**
     * Returns if reservation associated with the task is in wrapping state.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isInWrapupMode(task: ITask): boolean;
    /**
     * Returns if reservation associated with the task is in completed state.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isCompleted(task: ITask): boolean;
    /**
     * Returns if reservation associated with the task is assigned to the current user.
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isMyTask(task: ITask): boolean;
    /**
     * Returns a task which is associated with provided chat channel sid
     *
     * @static
     * @param {string} channelSid chat channel sid
     * @returns {ITask}
     */
    static getTaskFromChannelSid(channelSid: string): ITask;
    /**
     * Returns task by reservation sid
     *
     * @static
     * @param {string} reservationSid reservation sid
     * @returns {ITask}
     */
    static getTaskByTaskSid(taskSid: string): ITask;
    /**
     * Returns true if task is not pending
     *
     * @static
     * @param {ITask} task
     * @returns {boolean}
     */
    static isTaskAccepted(task: ITask): boolean;
}
