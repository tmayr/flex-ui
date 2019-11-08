import { Reservation } from "twilio-taskrouter";
import { ChatChannelState } from "@twilio/frame-ui";
import { PhoneCallState } from "./state/PhoneState";
import { ITask } from "./models";
/**
 * @classdesc Helper class for state
 * @category State
 */
export declare class StateHelper {
    /**
     * Get current call state if one exists
     *
     * @static
     * @returns {PhoneCallState | null} if it does not exist
     */
    static getCurrentPhoneCallState(): PhoneCallState;
    /**
     * Gets current chat channel state for a task
     *
     * @static
     * @param {ITask} task task
     * @returns {ChatChannelState.ChannelState} chat channel state
     */
    static getChatChannelStateForTask(task: ITask): ChatChannelState.ChannelState;
    /**
     * Gets TaskRouter Reservation object
     *
     * @static
     * @param {string} reservationSid reservation sid to retrieve
     * @returns {Reservation} reservation instance
     */
    static getReservation(taskSid: string): Reservation;
    static getTaskByTaskrouterTaskSid(sid: string): ITask;
}
