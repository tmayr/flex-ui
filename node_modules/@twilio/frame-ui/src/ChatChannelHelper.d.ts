import { ChannelState, MemberState } from "./state/ChannelState";
import { Message } from "twilio-chat/lib/message";
/**
 * @classdesc Chat message helper with author name.
 * @see {@link https://media.twiliocdn.com/sdk/js/chat/releases/3.2.4/docs/Message.html Message}
 * @hideconstructor
 *
 * @extends {Message}
 */
export declare class ChatMessageHelper extends Message {
    /**
     * Message author name. Friendly name if set for the author, otherwise the identity.
     *
     * @name ChatMessageHelper#authorName
     * @type {string}
     */
    authorName: string;
}
/**
 * @classdesc Helper class for chat channels
 */
export declare class ChatChannelHelper {
    private channel;
    /**
     * Creates an instance of ChatChannelHelper.
     * @param {ChannelState} chat channel
     */
    constructor(channel: ChannelState);
    /**
     * Gets helper for last chat message
     *
     * @readonly
     * @type {ChatMessageHelper}
     */
    readonly lastMessage: ChatMessageHelper;
    /**
     * Gets all channel members which are currently typing (except you)
     *
     * @readonly
     * @type {Array<ChannelsState.MemberState>}
     */
    readonly typers: Array<MemberState>;
    /**
     * Returns true if customer is online, false if not
     *
     * @readonly
     * @type {boolean}
     */
    readonly isCustomerOnline: boolean;
}
