/**
 * Default Flex task channel definitions
 * @typedef {object} FlexTaskChannels
 * @property {TaskChannelDefinition} Call call channel definition
 * @property {TaskChannelDefinition} Chat generic chat channel definition
 * @property {TaskChannelDefinition} ChatMessenger Messenger chat channel definition
 * @property {TaskChannelDefinition} ChatLine Line chat channel definition
 * @property {TaskChannelDefinition} ChatSms SMS chat channel definition
 * @property {TaskChannelDefinition} ChatWhatsApp WhatsApp chat channel definition
 * @property {TaskChannelDefinition} Default generic channel definition
 */
export * from "./CallTaskChannels";
export * from "./ChatTaskChannels";
export * from "./DefaultTaskChannel";
export declare function initDefaultChannels(FlexComponents: any): void;
