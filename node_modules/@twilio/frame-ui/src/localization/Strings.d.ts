/**
 * String map to define localizable language strings
 * @typedef {Object} Strings
 * @property {string} [InputPlaceHolder] Text shown in the edit box when no content has been entered.
 * @property {string} [TypingIndicator] Text used for typing indicator. For example "Bob is typing"
 * @property {string} [TypingIndicator] Text used for typing indicator, when more than 1 people are typing. For example "3 peopel are typing"
 * @property {string} [Connecting] Text shown on banner when Programmable Chat is connecting
 * @property {string} [Disconnected] Text shown on banner when Programmable Chat is disconnected
 * @property {string} [Read] Text below last message that has been read by other party
 * @property {string} [MessageSendingDisabled] Text shown if sending messages has been disabled
 * @property {string} [Today] Text shown in message list to group messages from today's date
 * @property {string} [Yesterday] Text shown in message list to group messages from yesterday's date
 * @property {string} [MessageCanvasTrayContent] Text shown in {@link MessageCanvasTray}
 * @property {string} [MessageCanvasTrayButton] Text shown on the button in {@link MessageCanvasTray}
 * @property {string} [MediaMessageError] Error shown when media message is received in chat
 * @property {string} [WelcomeMessage] Text shown at start of a chat
 * @property {string} [NotificationMessage] Text shown in notification message. Custom error message denoted by {{message}}
 * @property {string} [Save] Text shown on save button
 * @property {string} [Reset] Text shown on reset button
 * @property {string} [MessageCharacterCountStatus] Text showing current and maximum character count
 * @property {string} [MessageCharacterCountReached] Text shown when maximum character count is reached
 * @property {string} [SendMessageTooltip] Tooltip used on send message icon button
 * @property {string} [FieldValidationRequiredField] Text displayed when a required field is not filled
 * @property {string} [FieldValidationInvalidEmail] Text displayed when an "email" field doesn't receive a valid email
 * @property {string} [ChatInputUserNotMemberDisabledText] Text displayed when when user is not a member of the chat
 * @property {string} [FilterItemAny] Text to indicate no item is selected in filterItem (any)
 * @property {string} [FilterItemAmountSelected] Text to indicate a number of items is selected in filterItem (# selected)
 * @property {string} [FilterItemOnly] Text to indicate no item is selected in filterItem (# only)
 * @property {string} [DialpadNum0Caption] Text shown instead of caption for number 0 in Dialpad component
 * @property {string} [DialpadNum0Description] Text shown instead of description for number 0 in Dialpad component
 * @property {string} [DialpadNum1Caption] Text shown instead of caption for number 1 in Dialpad component
 * @property {string} [DialpadNum1Description] Text shown instead of description for number 1 in Dialpad component
 * @property {string} [DialpadNum2Caption] Text shown instead of caption for number 2 in Dialpad component
 * @property {string} [DialpadNum2Description] Text shown instead of description for number 2 in Dialpad component
 * @property {string} [DialpadNum3Caption] Text shown instead of caption for number 3 in Dialpad component
 * @property {string} [DialpadNum3Description] Text shown instead of description for number 3 in Dialpad component
 * @property {string} [DialpadNum4Caption] Text shown instead of caption for number 4 in Dialpad component
 * @property {string} [DialpadNum4Description] Text shown instead of description for number 4 in Dialpad component
 * @property {string} [DialpadNum5Caption] Text shown instead of caption for number 5 in Dialpad component
 * @property {string} [DialpadNum5Description] Text shown instead of description for number 5 in Dialpad component
 * @property {string} [DialpadNum6Caption] Text shown instead of caption for number 6 in Dialpad component
 * @property {string} [DialpadNum6Description] Text shown instead of description for number 6 in Dialpad component
 * @property {string} [DialpadNum7Caption] Text shown instead of caption for number 7 in Dialpad component
 * @property {string} [DialpadNum7Description] Text shown instead of description for number 7 in Dialpad component
 * @property {string} [DialpadNum8Caption] Text shown instead of caption for number 8 in Dialpad component
 * @property {string} [DialpadNum8Description] Text shown instead of description for number 8 in Dialpad component
 * @property {string} [DialpadNum9Caption] Text shown instead of caption for number 9 in Dialpad component
 * @property {string} [DialpadNum9Description] Text shown instead of description for number 9 in Dialpad component
 * @property {string} [DialpadHashCaption] Text shown instead of caption for hash in Dialpad component
 * @property {string} [DialpadHashDescription] Text shown instead of description for hash in Dialpad component
 * @property {string} [DialpadAsteriskCaption] Text shown instead of caption for asterisk in Dialpad component
 * @property {string} [DialpadAsteriskDescription] Text shown instead of description for asterisk in Dialpad component
 * @property {string} [NewChatMessageNotificationTitle] Text shown in the browser notification title for a new chat message
 * @property {string} [NewChatMessageNotificationBody] Text shown in the browser notification body for a new chat message
 */
export interface Strings<T = string> {
    InputPlaceHolder?: T;
    TypingIndicator?: T;
    TypingIndicatorMultiple?: T;
    Connecting?: T;
    Disconnected?: T;
    Read?: T;
    MessageSendingDisabled?: T;
    Today?: T;
    Yesterday?: T;
    MessageCanvasTrayContent?: T;
    MessageCanvasTrayButton?: T;
    MediaMessageError?: T;
    WelcomeMessage?: T;
    NotificationMessage?: T;
    Save?: T;
    Reset?: T;
    MessageCharacterCountStatus?: T;
    MessageCharacterCountReached?: T;
    SendMessageTooltip?: T;
    FieldValidationRequiredField?: T;
    FieldValidationInvalidEmail?: T;
    ChatInputUserNotMemberDisabledText?: T;
    FilterItemAny?: T;
    FilterItemAmountSelected?: T;
    FilterItemOnly?: T;
    DialpadNum0Caption?: T;
    DialpadNum0Description?: T;
    DialpadNum1Caption?: T;
    DialpadNum1Description?: T;
    DialpadNum2Caption?: T;
    DialpadNum2Description?: T;
    DialpadNum3Caption?: T;
    DialpadNum3Description?: T;
    DialpadNum4Caption?: T;
    DialpadNum4Description?: T;
    DialpadNum5Caption?: T;
    DialpadNum5Description?: T;
    DialpadNum6Caption?: T;
    DialpadNum6Description?: T;
    DialpadNum7Caption?: T;
    DialpadNum7Description?: T;
    DialpadNum8Caption?: T;
    DialpadNum8Description?: T;
    DialpadNum9Caption?: T;
    DialpadNum9Description?: T;
    DialpadHashCaption?: T;
    DialpadHashDescription?: T;
    DialpadAsteriskCaption?: T;
    DialpadAsteriskDescription?: T;
    NewChatMessageNotificationTitle?: T;
    NewChatMessageNotificationBody?: T;
}
