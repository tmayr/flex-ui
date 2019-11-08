import * as ChannelState from "./ChannelState";
/**
 * @category State
 * @class ChannelsState
 * @hideconstructor
 */
/**
 * Chat channel state
 * @typedef {Object} ChannelsState.ChannelsState
 * @property {ChannelsState.ChannelState} [sid] State of chat channel by sid
 */
export interface ChannelsState {
    [sid: string]: ChannelState.ChannelState;
}
export declare function reduce(state: ChannelsState, action: ChannelState.ChannelAction): ChannelsState;
