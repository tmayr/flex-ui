/// <reference types="react" />
import { TaskChannelDefinition, TaskChannelApplicableCb } from "../TaskChannelDefinition";
export declare const SupervisorTaskDetails: {
    Accepted: string;
    Pending: string;
    Wrapping: string;
    Completed: string;
    Canceled: string;
    Reserved: string;
    Assigned: string;
};
export declare function createDefaultTaskChannel(name: string, isApplicable: TaskChannelApplicableCb, icon?: string | React.ReactNode, iconActive?: string | React.ReactNode, color?: string): TaskChannelDefinition;
export declare const Default: TaskChannelDefinition;
