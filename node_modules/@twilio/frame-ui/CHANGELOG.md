# Changelog

## [Unreleased]

## 0.35.2

### Added

- `hasMarkdownSupport` prop for MessagingCanvas

### Removed

- Disabled markdown support 'ordered list' 


## 0.35.1

### Added

- `unconsumedMessages` property to ChatChannel state that contains unread messages
- New component `MarkdownRenderer` that renders a formatted text (bold, italic, bullet list and numbered are supported).
- New default notification with id `NewChatMessage` which enables browser notifications for new messages if window is not active. `Notification.requestPermission()` must be called to allow browser notifications.
  - Template `NewChatMessageNotificationTitle` with default value "New message from {{lastMessage.authorName}}"
  - Template `NewChatMessageNotificationBody` with default value "{{lastMessage.body}}"
- Introduced helper component NotificationBar.Action, that can be used for providing clickable action to notification definition.
```typescript
interface NotificationBarActionProps {
    label: React.ReactText; // Can be simple text string or a template string
    onClick: NotificationBarActionCallback;
    icon?: string;
}
```
- Add support for the following Markdown elements:

| Options       | Syntax                        |
| ------------- | ----------------------------- |
| Bold          | **Bold**                      |
| Italic        | *Italic*                      |
| Strikethrough | ~Strikethrough~               |
| Bullet list   | * List<br>* List<br>* List    |
| Numbered list | 1. One<br>2. Two<br>3. Three  |


### Changed

- Typing indicator in chat canvas now shows count of people typing if that number is above 1.
- Notifications now have a new `onClick` property. If set and the internal notification bar shows hyperlinks then this callback is called when any of the links are clicked.
- The `useLocalState` prop of `MessageInput` is enabled by default.
- Notification definition got a new property actions that can be used by in app notifications to show clickable action items.
```typescript
actions?: Array<React.ReactElement>;
```
Example:
To register a notification with actions
```typescript
Notification.registerNotification({
    id: "newNotification",
    closeButton: true,
    content: "New Notification handler",
    timeout: 0,
    type: NotificationType.warning,
    actions: [
        <NotificationBar.Action label="Hello" onClick={(event, notification) => {}} icon="Bell" />, // using the action component.
        <button type="button" onClick={(event, notification) => {}}>Hello world</button> // using custom action button
    ]
});
```

## 0.34.0
- Minor internal refactoring

## 0.33.2

### Updated

- `DynamicForm` email validation now correctly supports 2-chars domains, subdomains.

## Added
-   Add `GreenIndicator` and `GreyIndicator` icons.
-   `MemberState` has a new property `online` that represents if the member is online or not.
-   Introduced `ChatChannelHelper` class to wrap all Chat Channel specific helper methods. An instance for a task can be obtained from `TaskHelper.chat` property. `TaskHelper.lastChatMessage` method was deprecated, use `ChatChannelHelper.lastMessage` instead.
-   Add method to `ChatChannelHelper` named `isCustomerOnline` to detemine if the customer in the channel is online or not.

## 0.33.0

### Added
-   Add `AudioPlayerManager` API for playing sounds. It supports playing and stopping sounds

Example:

Media to be played is defined as:

```
export interface MediaData {
    url: string;
    repeatable: boolean;
}
```
Note:
- Repeatable medias are played in a loop, like a phone ringing that goes on and on. The only way to stop a repeatable media is to manually call the stop method.
- Non-repeatable medias are played once, like a beep or bleep. Non-repeatable medias automatically stop after being played once.

To play media, make sure you specify the url and if it is repeatable or not

```
const mediaId = AudioPlayerManager.play(
    {
        url: "sound-url",
        repeatable: true
    },
    (error: AudioPlayerError) => {
        // handle error
    }
);
```

To stop media, use the media id returned from the `play` method:

```
AudioPlayerManager.stop(mediaId);
```

To mute or unmute sound, use the `toggleSound` method:
```
AudioPlayerManager.toggleSound(true); // to mute
AudioPlayerManager.toggleSound(false); // to unmute
```

### Fixed

- Fix exception thrown when rendering table rows.

## 0.32.0

### Added

- Added `Dialpad` and `Dialer` components. Former is for showing a numeric dialpad, latter is a more comprehensive dialpad with call button and edit field for chosen number.a

### Fixed

- `IconButton` now has default hover tone dependent on whether theme is dark or light.
- Fixed chat crashing when media message is received. `MessageBubble` now displays `MediaMessageError` string on such message.

## 0.31.0

### Added
- Aria props properties to the following components to support accessibility:
  - MessageInput:
    - `sendButtonAriaProps` • AriaProps • Send button aria props (`{ ariaLabel: "Send Message" }` by default).
    - `textAreaAriaProps` • AriaProps • Text area aria props (`{ ariaLabel: "Enter your message here to get help" }` by default).
  - MessageList:
    - `listContainerAriaProps` • AriaProps • List container aria props (`{ ariaLive: AriaLive.Off }` by default).

  Example on how to set aria attributes:
  ```
  Flex.MessageInput.defaultProps.sendButtonAriaProps = {
      ariaLabel: "Send Message",
      ariaLive: Flex.AriaLive.Polite
  };

  Flex.MessageInput.defaultProps.textAreaAriaProps = {
      ariaLabel: "Enter your message here to get help",
      ariaLive: Flex.AriaLive.Assertive
  };

  Flex.MessageList.defaultProps.listContainerAriaProps = {
      ariaLabel: "Message list",
      ariaLive: Flex.AriaLive.Off
  };
  ```


### Changed

- `CheckboxGroup` now supports custom options IDs

### Fixed

- `DynamicForm` email validation now correctly supports numbers, dashes and dots.
- `Notifications.dismissNotificationById` did not dismiss ALL notifications by that ID
- Chat button can now be themed with `theme.Chat.MessageInput.Button`. Example on how to change the icon for a text:

```
appConfig = {
    <...>
    Chat: {
        MessageInput: {
            Button: {
                borderRadius: "5px",
                width: "100px",
                fontSize: "18px",
                svg: {
                    display: "none"
                },
                ":after": {
                    content: '"Send Button text"'
                }
            }
        }
    },
    <...>
```

## 0.30.2

### Changed
- `CheckboxGroup` now supports custom options IDs

## 0.30.1

### Fixed

-   Components properly inherit font property of the `RootContainer`, thus allowing to change font consistently in whole application:

```
appConfig = {
    <...>
    colorTheme: {
        baseName: "FlexLight",
        overrides: {
            RootContainer: {
                "font-family": "Apple Chancery"
            }
        }
    }
```

## 0.30.0

### Added

-   `theme.FormComponents.Select` to Theme to customise the Select input item
-   New property `useSeparateInputStore` introduced in the payload for action `SetInputText`.
    Setting it to true, will store the message text in separate state and improves performance. From the next major release of Flex, this prop will be defaulted to true.
    This can be changed by setting the new default property `useSeparateInputStore` of `MessageInput`.

```
Flex.MessageInput.defaultProps.useSeparateInputStore = false;
```

-   `DynamiComponent` got a new property `rootContainerStyles` which is the set of CSS rules that are going to be applied by `DynamicComponent` to the main root container it is rendering. Default value of this is

```
    display: flex;
    position: relative;
    overflow-x: hidden;
```

### Changed

-   `TextareaItem` now uses MaterialUI's textarea to improve style consistency with `InputItem`.
-   `theme.FormComponents.TextArea` now applies to the textarea container, not directly to the element itself. This is to enforce consistency between form item.
-   `ConnectingAnimation` now works in any size of container. Also the size of animation elements inside can be controlled with new `sizeMultiplier` property.

### Removed

-   Removed `cols` support for textarea.
-   Removed `connect` export from the `ChatModule`

## 0.29.1

### Fixed

-   Minor error handling - catching a few unhandled promise rejections

## 0.29.0

-   A few new reusable components added to the library

## 0.28.0

-   `AgentDesktopView` `splitterOptions` were not settable anymore via config (only via default props)

## 0.27.2

### Fixed

-   Content splitter component showed visible scroll bars when size of the area was not detected properly.

## 0.27.1

### Fixed

-   Window resize detection for Chrome v74 if parent iframe was hidden
-   Handling warning when sending typing indicator multiple times

## 0.27.0

### Added

-   New prop `autoInitChannel?: boolean` added to `MessagingCanvas` to automatically initialize chat channel if not initialized already.

### Changed

-   `MessageInput` is disabled with a message if user is not a member of the channel.

### Dependencies updated

-   [twilio-chat] to version 3.2.3
-   [@material-ui/core] to version 3.9.3

## 0.26.2

### Added

-   Add `Supportability` and `SupportabilityBold` icons.

### Changed

-   `ModalPopupWithEntryControl`'s `entryPoint` prop now accepts both `ReactElement` and `(isModalOpen: boolean) => ReactElement`
-   General Flex UI styles (like headers, paragraphs or links) are now applied only to HTML elements that have a class starting with `Twilio` or their direct descendants without any class. The CSS attributes that are meant to be inherited are now under the `Twilio-CommonStyles` class.
-   `registerGlobalStyles` method is renamed to `registerStyles`. The `registerGlobalStyles` method is still available for backward compatibility.
-   CSS reset is no longer applied when `registerGlobalStyles` or `registerStyles` is called
-   New `resetCSS` method from `@twilio/frame-ui` package

### Fixed

-   MessagingCanvas loading issues before joining the channel.

## 0.25.0

### Added

-   Add `useLocalState` prop to `MessageInput`.
    This property, if set to true, will allow the developer to store the message input value in the component state instead of the Redux state.

**Please note:** `useLocalState` should be set to false if there's the intention of changing the input value using the "SetInputText" action.

### Fixed

-   Removed redundant scrollbar from `MessageCanvasTray`
-   Fix chat's `InlineMessage` margin logic
-   Dynamic form validation now it should work and display errors properly
-   Dynamic form's `Select` now uses the same label, error message and spacing of the other fields

### Changed

-   `ThemeDef` interface renamed to `ThemeColorsDefinition`
-   Several components interfaces refactored to enforce naming convention (Component**Props**, Component**ChildrenProps**, Component**ThemeProps**)

## 0.24.0

### Changed

-   `MessagingCanvas` now initializes channel state if user is not a member.

### Added

-   `ActionStateListener` component to listen on action invocation state
-   Actions State concept introduced to Actions framework. Can be used together with `ActionStateListener` component to determine whether an action with payload is being invoked or has been explicitly blocked by code.
    -   `Actions.blockAction(action: string, payload?: any)` function added to block action with payload
    -   `Actions.unblockAction(action: string, payload?: any)` function added to unblock previously blocked action with payload

### Fixed

-   `SendMessage` action cannot be invoked twice with the same payload anymore while previous message is being sent

## 0.23.0

### Added

-   Added support for predefined message inside chat widget (MessagingCanvas)
-   Add `StackedBarChart`, `Legend`, `AggregatedDataTile`, `Link` component
-   Add `hasHoverStyle` prop to `DataTable` to make the hover style optional.

### Changed

-   Updated default styles of `DynamicFrom`
-   `FormFieldAttributes` is now deprecated in favor or field-specific attributes

### Fixed

-   Chat widget should not show "read" status for messages when the channel has just one member
-   `FormField` type now correctly allows `TextareaField`, `InputField`, `SelectField`, `RadioField` types.

## 0.22.0

### Added

-   `ConnectingAnimation` component to display a generic loading dots animation
-   `ConnectingAnimation` property to theme to set the ConnectingAnimation dots color
-   `showAvailabilityIcon` property to Avatar component (`true` by default) to be able to turn drawing availability widget on and off
-   `noStyling` property to Avatar component (`false` by default)

### Fixed

-   Prop `minimumSecondPanelSize` is now properly used in `SplitContentContainer` when provided in pixels

## 0.21.1

### Fixed

-   User could not write text in the middle of chat input anymore.
-   Friendly name was not shown as message sender for other than members of the chat channel.
-   Make sure to insert global Flex styles into the head of the document even if other styles are not there

## 0.21.0

### Changed

-   Fixed a issue where now we can set values for multiple fields in preengagement form.

### Added

-   `staticBackgroundBorderColor` property added to `theme.Progress.Circular` object.
    This property defines the color of the background border of the loading spinner, when not animating.
-   `animatingBackgroundBorderColor` property added to `theme.Progress.Circular` object.
    This property defines the color of the background border of the loading spinner, when animating.
-   `animatingForegroundBorderColor` property added to `theme.Progress.Circular` object.
    This property defines the color of the foreground border of the loading spinner, when animating.

### Removed

-   `circularProgressColor` property removed from `theme.colors` object.
-   `borderColor` and `fadeColor` properties removed from `theme.Progress.Circular` object.

## 0.20.0

### Added

-   `renderChildren` optional prop to `DynamicComponent`. Signature `(children: React.ReactNode[], align: string) => React.ReactNode[]`. This property is a callback that user
    of `DynamicComponent` can use if they want to alter the children of the fragments before rendering. By default DynamicComponent builds the list of children into its fragments from default children, children added via programmability and children added to the component tree via JSX. If `renderChildren` is specified then prior to any of the fragments rendered this callback is called to allow user the chance to change what the final rendered result will be. For example user may still want to filter out some of the children, wrap them all in some wrapper or maybe create brand new React components instead. `children` notes the children about to be rendered, `align` notes the name of the fragment rendered, which unless user has specified custom fragments, can be either `start` or `end`.

*   Support for promises to Actions framework.
    Now, if a before-action listener returns a Promise, the Actions framework will wait for it to be resolved before completing the action.
    This change is back-compatible, so a lister can still return return nothing.

```javascript
// Valid
Flex.Actions.addListener("beforeNavigateToView", payload => {
    payload.url = "test";
});

// Valid as well.
// NavigateToView action will wait for the returned promise to be resolved.
Flex.Actions.addListener(
    "beforeNavigateToView",
    payload =>
        new Promise(res => {
            asyncCall(() => {
                payload.url = "myPromise";
                res();
            });
        })
);
```

-   Added character count indicator below text input when agent exceeds the limit.

### Changed

-   Moved reset CSS to top of head to allow any custom CSS to override it.
-   `SendMessage` action got optional `messageAttributes` property to its payload that, if specified, will be used as the equally named property of the Chat SDK `sendMessage` call.
-   Fixed UI issues with Chat input when shift+enter is pressed.
-   Fixed `selectItem` type in pre-engagement form by passing the missing value prop to `Select` and fixed the styles for the same.
-   Fixed the container width of `DynamicFrom` for webchat forms.

## 0.19.0

### Changed

`baseNames` theme names changed

| Deprecated name | New Theme name |
| --------------- | -------------- |
| DarkTheme       | GreyDark       |
| MediumTheme     | GreyLight      |
| BlueMediumTheme | FlexLight      |
| BlueDarkTheme   | FlexDark       |

### Added

-   Add optional `label` property to the `Tab` component. When provided, it will display a label into the `Tab` element. If the value matches a code in language strings array, the contents of the language string is used as template. Otherwise the value is used as just string. If `label` is not provided, `icon` property is considered and used.
-   Add optional `alignment` property to `Tabs`. When provided, it will change the tabs alignment. Possible values are `left` or `center`. Default is `center`.
