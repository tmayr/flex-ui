import { TaskChannelDefinition } from "./TaskChannelDefinition";
import { ITask } from "./models";
import * as DefaultTaskChannels from "./task_channels";
export * from "./TaskChannelDefinition";
/**
 * @constant {FlexTaskChannels} DefaultTaskChannels Flex default task channels
 * @category Framework
 */
export { DefaultTaskChannels };
export { TaskChannelHelper } from "./TaskChannelHelper";
/**
 * @classdesc Task Channels Manager
 * @category Framework
 */
declare class TaskChannelsManager {
    /**
     * Gets registered task channel definitions
     *
     * @returns {Array<TaskChannelDefinition>}
     */
    getRegistered(): TaskChannelDefinition[];
    /**
     * Gets task channel definition for a task
     *
     * @param {ITask} task task
     * @returns {TaskChannelDefinition} first matched task channel definition
     */
    getForTask(task: ITask): TaskChannelDefinition;
    /**
     * Registers a task channel definition. Definition is prepended to previously registered ones
     * @param {TaskChannelDefinition} definition task channel definition
     * @param {boolean} [mergeWithDefaultChannel=true] whether to merge unspecified defaults in
     */
    register(definition: TaskChannelDefinition, mergeWithDefaultChannel?: boolean): void;
    /**
     * Unregisters previously registered task channel definition
     * @param {TaskChannelDefinition} definition task channel definition to unregister
     */
    unregister(definition: TaskChannelDefinition): void;
}
/**
 * Task Channels Manager
 * @constant {TaskChannelsManager} TaskChannels
 * @category Framework
 */
export declare const TaskChannels: TaskChannelsManager;
/**
 * @private
 */
export declare function registerDefaultTaskChannels(FlexComponents: any): void;
/**
 * @private
 */
export declare function initAllRegisteredTaskChannels(FlexComponents: any): void;
