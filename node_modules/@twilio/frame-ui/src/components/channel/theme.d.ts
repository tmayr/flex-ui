import { MessageInputThemeProps } from "./MessageInput/MessageInput.definition";
import { MessagingCanvasThemeProps } from "./MessagingCanvas/MessagingCanvas";
import { MessageListThemeProps } from "./MessageList/MessageList";
import { MessageListItemThemeProps } from "./MessageListItem/MessageListItem";
import { MessageCanvasTrayThemeProps } from "./MessageCanvasTray/MessageCanvasTray";
import { WelcomeMessageThemeProps } from "./WelcomeMessage/WelcomeMessage";
/**
 * Theme properties for chat components
 * @typedef ChatTheme
 * @property {MessagingCanvas.MessagingCanvasThemeProps} MessagingCanvas theme properties for MessagingCanvas component
 * @property {MessageList.MessageListThemeProps} MessageList theme properties for MessageList component
 * @property {MessageInput.MessageInputThemeProps} MessageInput theme properties for MessageInput component
 * @property {MessageListItem.MessageListItemThemeProps} MessageListItem theme properties for MessageListItem component
 * @property {MessageCanvasTray.MessageCanvasTrayThemeProps} MessageCanvasTray theme properties for MessageCanvasTray component
 * @property {WelcomeMessage.WelcomeMessageThemeProps} WelcomeMessage theme properties for WelcomeMessage component
 */
export interface ChatTheme {
    MessagingCanvas: MessagingCanvasThemeProps;
    MessageList: MessageListThemeProps;
    MessageInput: MessageInputThemeProps;
    MessageListItem: MessageListItemThemeProps;
    MessageCanvasTray: MessageCanvasTrayThemeProps;
    WelcomeMessage: WelcomeMessageThemeProps;
}
