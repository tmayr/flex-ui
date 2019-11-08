# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## 1.14.1

### Dependencies updated

-   [twilio-taskrouter] to version 0.4.1

### Fixed

-   Added feature flag for Markdown support

## 1.14.0

### Added

-   Added `fullscreen` static property to QueuesStatsView component, which can be used to enable fullscreen button for the view.

-   Introduced `ChatChannelHelper` class to wrap all Chat Channel specific helper methods. An instance for a task can be obtained from `TaskHelper.chat` property. `TaskHelper.lastChatMessage` method was deprecated, use `ChatChannelHelper.lastMessage` instead.
-   User will be shown a notification when user has not made a choice whether to allow browser notifications.
-   If user is not focused to the application and receives incoming call task, then he is notified via browser notification. Added two template strings
    `IncomingCallNotificationTitle` and `IncomingCallNotificationBody` for notification title and body respectively.
-   Task channel definitions now allow to override notifications that have a task context:

```
Twilio.Flex.DefaultTaskChannels.Chat.notifications.override["TaskCannotBeTransferred"] = (notification) => {
    notification.content = "Hello, world!";
};

Twilio.Flex.DefaultTaskChannels.Chat.notifications.override["TaskCannotBeTransferred"] = {
    content: "Hello, world!"
};

Twilio.Flex.DefaultTaskChannels.Chat.notifications.override["TaskCannotBeTransferred"] = null;
```

-   New localization strings added.
    `TaskHeaderWebChatStatusAccepted` // Describes WebChat task that is in accepted state. It's used in TaskCanvasHeader.
    `TaskLineWebChatAssigned` // Describes WebChat task that is in assigned state. It's used in TaskListBaseItem.
-   New reachability indicator for webchat tasks. It will show a green icon in the task canvas header and the task list item if the customer is online, and a grey one if offline.

    Please note that you need to enable reachability in console: `https://www.twilio.com/console/chat/services/<chat_service_sid>`, otherwise a grey icon will be shown.

    You can customize the templates `TaskHeaderWebChatStatusAccepted` and/or `TaskLineWebChatAssigned`. For these templates, you can access the reachability status via `helper.chat.isCustomerOnline`.

-   Added a new `notifications` configuration option that allows enabling/disabling browser notifications.

    By default, browser notifications are disabled

```
notifications: {
    browser: true
}
```

### Changed

-   Default template for second line of tasklist item of chat task now includes string "typing ..." if there are participants typing in that chat.
-   withTaskContext now returns a correctly typed component instead of `any`. Therefore it may not be used as a class decorator anymore, but it must be called. This change may also result in new TypeScript errors surfacing incorrect prop types or similar issues.
-   `TaskListItem` now has supports for showing Badges. The content of these badges is TaskChannel dependent and can be customised by updating its `componentProps.TaskListItem.Badge.children` property.
    ```typescript
    myTaskChannelDefinition.componentProps.TaskListItem.Badge.children = (
        appState: AppState,
        context: TaskListItemProps & TaskContextProps
    ) => {
        const badgeContent: number = applyCustomLogic(appState, context); // just an example
        return badgeContent;
    };
    ```
    If the content equal to zero or undefined, no badge is going to be shown.
-   Definition of localization strings changed:
    `TaskHeaderStatusAccepted` // Describes task (except webchat) that is in accepted state. It's used in TaskCanvasHeader.
    `TaskLineChatAssigned` // Describes a chat task that is assigned (except webchat) and any chat task in wrapup status. It's used in TaskListBaseItem.
-   `SideLink` now has support for showing badges. It takes a new property `Badge` which is used to customize it.
-   `SideNav` has 3 new static properties(`AgentDesktop`, `Teams` & `QueuesStats`) which represents link components for each view.
    It can be accessed to change the default `Badge` property.
    ```typescript
    Flex.SideNav.AgentDesktop.defaultProps.Badge = {
        children: 2
    };
    ```
-   "Login with Twilio" link on the Login View will open a Twilio login in a new window if Flex is rendered in an iframe element.
-   Message Input now supports Input Method Editor, allowing to use characters and symbols that are not directly represented on the keyboard itself (like Chinese characters).
-   ToggleMute, HoldCall, UnholdCall and HangupCall to throw an Error instance instead of just an error string in case of a failure.

### Fixed

-   Update 'How to configure' CRM docs link url

## 1.13.1

### Fixed

-   Fixed a bug where SSO login stuck at redirect to pop-up dialog when using SFDC Identity provider

## 1.13.0

### Fixed

-   Custom task channel definitions for chat tasks which were not using `chat` as the task channel, could have caused Flex not to load and initialize the chat channels for accepted tasks in previous sessions.

### Changed

-   Upon any sort of failure to transfer a call, user will be shown a notification of the failure and unformatted error string from Taskrouter API.
-   Unmount WorkersDataTable when user navigates away from Teams View.

## 1.12.1

### Fixed

-   Fix an issue with @types/uuid package in windows environment

## 1.12.0

### Changed

-   If user adds programmatically `IconButton` to either `ParticipantCanvas.Actions` or `CallCanvasActions` and does not provide `themeOverride` property then
    the button is going to have the default style of buttons of that container.

### Added

-   Action buttons container for a participant on Call Canvas is now programmable, so developers can add and remove buttons (and other items) there. Name
    of the container is `ParticipantCanvas.Actions`. Existing buttons have keys `hold`, `kick`, `cancel-transfer`, `accept-kick` (confirmation dialog), `cancel-kick` (confirmation dialog).
    Example:

```
Flex.ParticipantCanvas.Actions.Content.add(<IconButton icon="Eye" key="yourButton">);
```

-   `ChatOrchestrator` object now supports setting orchestrations based on a task:

```
const orchestrationsCallback = (task: ITask) => {
    if (task.sid === "WT12345") {
        return [];
    }
};
Flex.ChatOrchestrator.setOrchestrations("accepted", orchestrationsCallback);
```

-   Add new exports to refer to workers instead of agents: `WorkersDataTable`, `WorkerListFilterSelect`, `WorkersDataTable`, `WorkersDataTableProps` and `WorkerListFilter`.
-   Added new button to call toolbar to display DTMF Dialpad. This Dialpad can be used to send DTMF tones to all parties in the call.
-   Action `ToggleDTMFDialpad` is introduced with following payload:

```
{
    task: ITask;
    open?: boolean; // used to explicitly open or close DTMF dialpad.
}
```

-   Action `SetDTMFDialpadDigits` is introduced to set digits in the DTMF dialpad with following payload:

```
{
    task: ITask;
    digits: string;
}
```

-   `IncomingTaskCanvasActions` component that is a set of buttons in the incoming task canvas is now programmable (buttons can be added/removed)
    Example: this code adds an eye-iconed button to the end of the list of incoming task canvas actions

```
Flex.IncomingTaskCanvasActions.Content.add(<IconButton key="hi" icon="Eye" />);
```

or by using channels

```
Flex.DefaultTaskChannels.Call.addedComponents = [{
    target: "IncomingTaskCanvasActions",
    component: <IconButton key="hi" icon="Eye" />,
}];
```

-   Flex to read `{ loginPopup: boolean; }` from `public_attributes` of the Configuration Service to determine if the SSO flow needs to be launched in a popup window. Note that if `sso: { loginPopup: boolean }` is set in local Flex configuration, then `public_attributes` will not be fetched.

### Fixed

-   Loading Flex with url `host/teams/workers/WK...` now correctly opens the Worker Panel in Teams View

-   WorkersDataTable workers now get correctly sorted and keep position

-   Facebook channel definition now expects channel type to be `facebook`

## 1.11.2

### Fixed

-   WorkersDataTable workers now get correctly sorted and keep position

## 1.11.1

### Fixed

-   Issues with `Twilio.Flex.runDefault()` removing query path search string.

## 1.11.0

### Changed

-   All chat channels are not automatically loaded to the Redux state of Flex anymore. Only those chat channels are loaded that are associated with any active task.
-   Removed optional URLs from TypeScript Config interface.
-   Call task canvas will now go to new list mode if participants would not otherwise fit. In order to change `ParticipantCanvas` when it is in list mode, developer
    will need to use `ParticipantCanvas.ListItem`.
    Example:

```
    // adds a button to the bottom of the normal participant
    Flex.ParticipantCanvas.Content.add(<button key="key">Hi</button>);
    // adds a button to the end of participant that is shown in a list
    Flex.ParticipantCanvas.ListItem.Content.add(<button key="key">Hi</button>);
```

### Added

-   Added `Warm Transfers` feature
-   Add `legacy` property to `ContextProvider` component to resolve conflicts between multiple `react-redux` versions for self-hosted applications.
-   Added `tasksA` and `tasksB` arguments to `AgentsDataTable.defaultProps.initialCompareFunction` to allow tasks comparison:

```typescript jsx
Flex.AgentsDataTable.defaultProps.initialCompareFunction = (a: Flex.IWorker, b: Flex.IWorker, tasksA: Array<Flex.ITask>, tasksB: Array<Flex.ITask>) => {
```

### Fixed

-   Make `TaskCard` component inherit font family from the `RootContainer`;

## 1.10.0

### Dependencies updated

-   [twilio-taskrouter] to version 0.3.2

### Fixed

-   Prevented TaskChannels re-initialization on Manager load method. This fixes a Plugin-Builder related issue.
-   WorkerCanvas component was not forwarding contextual props to its children so any 3rd party component added to that canvas did not know what
    worker etc it was dealing with.

### Added

-   `WorkerDirectoryTabs` component that represents a set of tabs in the WorkerDirectory popup is now programmable (tabs can be added/removed)
    Example: this code adds a new tab to the end of the tab list of worker directory

```
Flex.WorkerDirectory.Tabs.Content.add(<CustomTab />)
```

In this example, `CustomTab` is a component that uses a `Tab` component.

-   `CallCanvasActions` component that is a set of buttons in the call canvas is now programmable (buttons can be added/removed)
    Example: this code adds an eye-iconed button to the end of the list of call canvas actions

```
Flex.CallCanvasActions.Content.add(<IconButton key="hi" icon="Eye" />)
```

or by using channels

```
Flex.DefaultTaskChannels.Call.addedComponents = [{
    target: "CallCanvasActions",
    component: <IconButton key="hi" icon="Eye" />,
}];
```

-   Theme got 2 new keys inside `Supervisor` section `Supervisor.TaskCanvas.Header` and `Supervisor.WorkerCanvas.SectionCaption` to style
    `TaskCanvas` header and sub section header in `WorkerCanvas` respectively.

## 1.9.1

-   `AgentDesktopView` `splitterOptions` were not settable anymore via config (only via default props)

## 1.9.0

### Dependencies updated

-   [twilio-chat] to version 3.2.3
-   [twilio-client] to version 1.7.2
-   [twilio-sync] to version 0.11.0
-   [twilio-taskrouter] to version 0.3.1
-   [@material-ui/core] to version 3.9.3

### Added

-   `AgentDesktopView.Panel1` got a new default property `splitterOrientation` that determines whether orientation of the content will be vertical, horizontal or automatic
    based on content size (default).
-   `SetComponentState` UI Action. This is meant to alter the current state of a component. Component states is a `componentName => key/value pairs` dictionary in Redux store that this action manipulates. Payload is defined as

```export interface SetComponentStatePayload {
    name: string;
    state: any;
}
```

where `name` is the name of the component and `state` is an Javascript object. The Action will update the state in the store under `name` by shallow merging `state` with current state. Developers can use this action and this state to both control native Flex controls and also keep a convenient state for their own components. Natively currently two controls are supported (`"AgentTaskCanvasTabs", "SupervisorCanvasTabs"`) with one state value `selectedTabName` that holds the `uniqueName` of currently selected tab of the respective tab controls.

Example:

```
    Flex.Actions.invokeAction("SetComponentState", { name: "AgentTaskCanvasTabs", state: { selectedTabName: "info" } });
```

will change the tab of the Task Canvas in Agent View to info tab. This call can also be made preemptively when initializing Flex to set default selected tab of a tab control.

```
export enum SplitterOrientation  {
    auto = "auto",
    vertical = "vertical",
    horizontal = "horizontal"
}
```

Example:

```
    Flex.AgentDesktopView.Panel1.defaultProps.splitterOrientation = "vertical";
```

-   Introduced store enhancer `flexStoreEnhancer` to support adding additional reducers.
    Example:

```
    const myReduxStore = createStore(
        reducers,
        compose(
            applyFlexMiddleware(),
            flexStoreEnhancer // <-- Add enhancer part of compose
        )
    );
```

-   Introduced `addReducer` api to `manager.store` to add additional reducer.
    Example:

```
    manager.store.addReducer("new", newReducer);
```

-   `ChatOrchestrator` object that can be used to disable default chat orchestration.
    -   There are three chat orchestrations that are supported and enabled by default:
        -   `AddToChatChannel` - Request agent to be added to the chat channel (by default runs on the `accepted` event from `Reservation`)
        -   `DeactivateChatChannel` - Mark chat channel status as `INACTIVE` (by default runs on `WrapupTask` and `CompleteTask` actions and on the `wrapup` and `completed` event from `Reservation` object if it was not done already)
        -   `LeaveChatChannel` - Remove agent from the chat channel (by default runs on `CompleteTask` action and on the `completed` event from `Reservation` object if it was not done already)
    -   Orchestrations can be disabled completely by invoking `ChatOrchestrator.clearAllOrchestrations()` method.
    -   Orchestrations can be enabled or disabled by Reservation events (`accepted`, `wrapup`, `completed`) which affects corresponding actions as well. For example:
    ```
      // Disable orchestrations for `accepted` event:
      Flex.ChatOrchestrator.setOrchestrations("accepted", []);
      // Disable marking chats channels as inactive:
      Flex.ChatOrchestrator.setOrchestrations("wrapup", []);
      Flex.ChatOrchestrator.setOrchestrations("completed", ["LeaveChatChannel"]);
    ```
-   Add `rejectPendingReservations` configuration option: it represents whether all pending reservations are ignored or should be manually rejected before an agent will be allowed to switch to unavailable activity (default value – `true` – allows an agent to change activity even if there are pending reservations). Also, a way to override that value is now available through `beforeSetActivity` action:

```
Actions.on("beforeSetActivity", (payload) => { payload.options.rejectPendingReservations = true; });
```

-   Add `Flex.Log.LogManager` API for custom logging
-   Added `callSid` to Participant object in `Conferences` state.
-   `Chat` tab added to `SupervisorTaskCanvas` for Supervisors to monitor chats.
-   New localization strings added.

```
`TaskTabSupervisorCallLabel` // Call task tab label in Supervisor task canvas.
`TaskTabSupervisorChatLabel` // Chat task tab label in Supervisor task canvas.
`TaskHeaderStatusPending` // Describes task that is in pending state. It's used in TaskCanvasHeader.
`TaskHeaderGroupCallAccepted` // Describes conference call task that is in accepted state. It's used in TaskCanvasHeader.
`TaskHeaderStatusAccepted` // Describes task that is in accepted state. It's used in TaskCanvasHeader.
`TaskHeaderStatusWrapup` // Describes task that is in wrapup state. It's used in TaskCanvasHeader.
`TaskHeaderStatusCompleted` // Describes task that is in completed state. It's used in TaskCanvasHeader.
```

-   `TaskCanvasHeader` now accepts a new prop `secondLineTemplateCode`. By default it describes the status of the task.

## Changed

-   Chat orchestration failure now can prevent action invocations:
    -   If chat orchestration fails to mark the chat channel inactive, then `WrapupTask` action will fail.
    -   If chat orchestration fails to remove agent from chat channel, then `CompleteTask` action will fail.
-   Chat orchestration marks deactivates chat channel on the Reservation `wrapup` event (if it did not happen in `WrapupTask` action already)
-   Dynamically added custom components are encouraged to use `withTheme` decorators to inject `theme` prop
-   Following type definitions are changed for consistency:
    -   `CallCanvasProps` renamed to `CallCanvasChildrenProps`
    -   `TaskCanvasProps` renamed to `TaskCanvasChildrenProps`
    -   `NoTaskCanvasProps` renamed to `NoTaskCanvasChildrenProps`
    -   `ParticipantsCanvasProps` split in a `ParticipantsCanvasProps` subset and `ParticipantsCanvasChildrenProps`
    -   `TaskCanvasHeaderProps` split in a `TaskCanvasHeaderProps` subset and `TaskCanvasHeaderChildrenProps`
    -   `TaskCanvasTabsProps` split in a `TaskCanvasTabsProps` subset and `TaskCanvasTabsChildrenProps`
    -   `TaskInfoPanelProps` split in a `TaskInfoPanelProps` subset and `TaskInfoPanelChildrenProps`
    -   `MainHeaderProps` split in a `MainHeaderProps` subset and `MainHeaderChildrenProps`
    -   `AgentDesktopViewProps` split in a `AgentDesktopViewProps` subset and `AgentDesktopViewChildrenProps`
    -   `LoginViewProps` split in a `LoginViewProps` subset and `LoginViewChildrenProps`
    -   `TeamsViewProps` split in a `TeamsViewProps` subset and `TeamsViewChildrenProps`
    -   `CRMContainerProps` split in a `CRMContainerProps` subset and `CRMContainerChildrenProps`
    -   `LiveCommsBarProps` renamed in `LiveCommsBarChildrenProps`
    -   `MainContainerProps` split in a `MainContainerProps` subset and `MainContainerChildrenProps`
    -   `MuteButtonProps` split in a `MuteButtonProps` subset and `MuteButtonImplProps`
    -   `RootContainerProps` renamed in `RootContainerChildrenProps`
    -   `SideNavProps` split in a `SideNavProps` subset and `SideNavImplProps`
    -   `TaskListButtonsProps` renamed in `TaskListButtonsChildrenProps`
    -   `ViewCollectionProps` split in a `ViewCollectionProps` subset and `ViewCollectionImplProps`
-   SupervisorTaskCanvas tabs title changed from Overview to Call or Chat based on the type of task.

### Fixed

-   Hold/unhold buttons on call canvas for customer participant will call `HoldCall/UnholdCall` actions again instead of `HoldParticipant/UnholdParticipant`
-   Brought back `conferenceSid` property on `conference` object that had been accidentally removed.

## 1.8.2

### Fixed

-   Rare bug where user would see endless login spinner when trying to log in.

## 1.8.1

### Fixed

-   Hold/unhold buttons on call canvas for customer participant will call `HoldCall/UnholdCall` actions again instead of `HoldParticipant/UnholdParticipant`

## 1.8.0

### Added

-   `TaskListButtons` component that is the set of buttons in tasklist item is now programmable (buttons can be added/removed)
    Example, that shows a button as the last button for call tasks that have status as "accepted":

```
        const shouldShow = (props) => {
            return props.task.status == "accepted";
        };

        Flex.DefaultTaskChannels.Call.addedComponents = [{
            target: "TaskListButtons",
            component: <IconButton key="hi" icon="Eye" />,
            options: {if: shouldShow}}];
```

-   Action buttons will be disabled after user click until the action execution is finished.
-   Actions `ToggleSidebar` are introduced with following payload:

```
{
    open?: boolean; // used to explicitly open or close the sidebar.
}
```

### Changed

-   Renamed `TaskButtons` class to `TaskListButtons`

### Fixed

-   Restored backwards compatibility with the first versions of the outbound dialer plugin

## 1.7.4

### Fixed

-   Rare bug where user would see never ending login spinner when trying to log in

## 1.7.3

### Fixed

-   Hold/unhold buttons on call canvas for customer participant will call `HoldCall/UnholdCall` actions again instead of `HoldParticipant/UnholdParticipant`

## 1.7.2

### Fixed

-   Restored backwards compatibility with the first versions of the outbound dialer plugin

## 1.7.1

### Fixed

-   Incoming task canvas failed to render for generic/custom task channels.

### Added

-   New template `TaskLineTitle` with default value as empty string to be shown for default task channel in `IncomingTaskCanvas`.

## 1.7.0

### Added

-   Added `ThemeColorsDefinition` to replace `ThemeDef`
-   Added `ThemeColorsDefinitionCreator` to replace `ThemeDefCreator`
-   Added `ThemeColorsDefinitionCreator.getPredefined` to replace `ThemeDefCreator.getPredefinedTheme`
-   Added a new `logger` configuration option that allows to collect logs and errors into a downloadable file:

```
logger: {
  type: "file"
}
```

### Changed

-   Deprecated `ThemeDef` interface, `ThemeDefCreator` class and its method `ThemeDefCreator.getPredefinedTheme`.
-   General Flex UI styles (like headers, paragraphs or links) are now applied only to HTML elements that have a class starting with `Twilio` or their direct descendants without any class

## 1.6.1

### Fixed

-   Imports from latest `history` NPM package
-   Mitigation for duplicate task based events after connection drop

## 1.6.0

### Added

-   Add support for a "predefinedMessage" in the MessagingCanvas to display an initial message in the ChatWidget.
-   Add `agentAvailableColor`, `agentBusyColor`, `agentUnavailableColor`, `agentOfflineColor` colors to theme.

### Changed

-   Extend TaskChannelDefinition with a `componentProps` object to allow taskChannel-specific component props modifications.
-   Conference State support to monitor participants and their statuses via Sync Insights. Surfaced via Task Context as `conference` property.
-   Call monitoring now also works when forwarding the calls to phone number
-   New designs for task call view and task list item. Also updated the incoming transfer views

### Fixed

-   Get 'Offline' activity sid from serviceConfiguration.taskrouter_offline_activity_sid

## 1.5.0

### Added

-   WFO identity client integrated and exposed through `Twilio.Flex.Wfo.Identity`
-   New 'untrustedDomain' exception on login attempts from non-whitelisted domains
-   TaskSid and ReservationSid in task info panel

### Changed

-   Flex requires `<meta name="referrer" content="no-referrer">` element to be present in `<head>` section of HTML. If such element does not exists then Flex will issue additional browser redirect in login flow after returning from IdP (and token is present in the URL).
-   Deprecated `Reserved` and `Assigned` keys in `TaskStatusBasedTypeBase` for task channel definitions. Use new `Accepted` key for reservation accepted state.
-   Hide main action button on login when a Validation error (sso, untrusted domain) is thrown.
-   On logout, try to detect 'Offline' activity by "sid" (serviceConfiguration.attributes.taskrouter_offline_activity_sid) and, if that's not provided, fallback to the name.

### Fixed

-   Use `Pending` task based status key from task channel definition if both `Pending` and `Reserved` were defined for TaskStatusBasedTypeBase.
-   Agent status in supervisor agent panel now correctly updates, even with a filtered-out agent.

## 1.4.1

### Fixed

-   Teams view "Active agents" filter to dynamically generate and use the query to include agents in all `available` activities from TaskRouter.

## 1.4.0

### Changed

-   Call Tasks will now be accepted with `endConferenceOnExit` set to `true`, so when agent ends the call the call will be ended for the customer as well. There is no reason anymore to
    override the `acceptTask` action to achieve this.
-   Removed the `disabledTransfers` config option as it is obsolete due to the change above.
-   Agent activity duration will now be shown in the teams view and header User card.
-   Updated logout view with new design.
-   Enabled plugin service by default.

## 1.3.0

### Added

-   New FlexEvent `FlexEvents.pluginsLoaded` that fires after all plugins have finished loading.
-   `MonitorTask` action payload got a new param `extraParams` that is the equally named TR SDK param for `Reservation.monitor` call. It is optional and UI does not set it, but developer can alter it via programmability if need be.
-   Exposed common dependencies like `React`, `ReactDOM`, `Redux` and `ReactRedux` to window object for plugins to depend on.
-   Error notification when browser is unable to access microphone.
-   New option `isolate` for `router` configuration section: whenever set to true, Flex will ignore any navigation action (including URL change) except for internal.
-   Default route may now be changed via `componentProps` by setting `defaultLocation` property for `ViewCollection`.
-   Flex navigation action type is exposed through `FLEX_LOCATION_CHANGE` constant. It can be used to listen to Flex navigation actions or do dispatch Flex-specific navigation actions.
-   `disableBrowserVoice` option for configuration. When specified Twilio Client SDK (for Browser voice capability) will not be initialized. Attempting to accept a task that is voice and with worker's `contact_uri` not pointing to a phone number, the attempt is blocked and warning is shown.
-   Character limit information added to chat channel definitions.
-   Registered a `beforeSendMessage` action to check if the message exceeds the limit and handle it accordingly.
-   SSO login in pop-up window support added. `config.sso.loginPopup = true` can be set to enable it. To gracefully handle blocked popups, new `LoginFormView` React component or `provideLoginInfo` or `tryLogin` Twilio.Flex API function can be used to launch it. Additionally pop-up window features for `window.open()` function can be set in `config.sso.loginPopupFeatures` configuration variable as string.
-   New API functions to run or log user in to Flex using `Twilio.Flex` interface:

```
    /**
    * Runs Flex with default setup.
    * It will show loader and prompts for login information
    * if it is not provided in configuration object.
    *
    * @param [config] configuration object
    * @param [nodeOrSelector] DOM node or selector string where to render Flex
    * @returns {Promise<void>}
    */
    export function runDefault(config: Config = {}, nodeOrSelector: string | Element = "body"): Promise<void>;

    /**
    * Tries to log user in to Flex.
    * Can redirect the current browser window to the IdP URL or
    * open a new window to navigate to IdP URL if config.loginPopup is set.
    *
    * @param [config] SSO configuration object
    * @return {Promise<boolean>} true if there is valid token and user can be logged in.
    */
    function tryLogin(config: SSOConfig = {}): Promise<boolean>;

    /**
    * Helper function to provide additional account and user info if it is not set.
    * Updates the provided config object.
    *
    * Renders a LoginFormView component if accountSid is not provided or there are problems with signing user in.
    *
    * @param [config] configuration object
    * @param [nodeOrSelector] DOM node or selector string where to render the component
    * @returns {Promise<void>} if resolved, then Flex instance can be created with
    *      provided config object.
    */
    function provideLoginInfo(config: Config = {}, nodeOrSelector: string | Element = "body"): Promise<void>;
```

-   New `LoginFormView` React component to be used to provide account / user info with the following props:

```
interface LoginFormViewProps {
    onSuccess: (determinedConfig: Config) => any;
    userConfig: Config;
}
```

-   New strings for `LoginFormView` component:

```
    LoginContinue: "Continue anyway",
    LoginLaunch: "Launch",
    LoginTitle: "Twilio Flex",
    LoginErrorDomain: "Oops! Your runtime domain is incorrect.",
    LoginErrorDomainDetails: "Find your runtime domain " +
        "<a href='https://www.twilio.com/console/runtime/overview'>here</a>",
    LoginErrorSso: "Hmm, Single Sign-On has not been configured.",
    LoginErrorSsoDetails: "Find out how to configure Single Sign-On " +
        "<a href='https://www.twilio.com/console/flex/users/single-sign-on'>here</a>",
    LoginErrorPopupBlocked: "Sorry, pop-ups are blocked.",
    LoginErrorPopupBlockedDetails: "Find out how to enable pop-ups in your browser",
    LoginErrorGeneric: "Oops! Well, that didn’t work :( Please double check your configuration.",
    LoginIsAdmin: "Flex Admin?",
    LoginWithTwilio: "Login with Twilio.",
```

### Changed

-   `View` now has multiple route path support. By default `name` prop is taken as string to be added to the path of the specified `View`.
    One can add alternative routes with `route` prop. Example:

        ```<View key="teams" name="teams" route={{ path: "/supervisor" }}>  // both http:/domain/teams and http://domain/supervisor will work```

        ```<View key="teams" name="teams" route={{ path: ["/supervisor", "something"] }}>  // both http:/domain/teams and http://domain/supervisor and http://domain/something will work```

-   `ViewCollection` was not using DynamicComponent properly so all manipulations of it other than `add` via programmability did not work.
    = Global mute button will be disabled if there are no active calls.

###Fixed

-   Global mute button indicated muted state even after the call had ended.

## 1.2.0

### Fixed

-   Use react and react-dom version 16.5.2

### Changed

-   `baseNames` theme names changed

| Deprecated name | New Theme name |
| --------------- | -------------- |
| DarkTheme       | GreyDark       |
| MediumTheme     | GreyLight      |
| BlueMediumTheme | FlexLight      |
| BlueDarkTheme   | FlexDark       |

-   Switch from `icon` to `label` in `Tab` label components in agent `TaskCanvasTabs` and supervisor `TaskCanvas`

### Added

-   New localization strings for TaskTabAgentIncomingLabel, TaskTabAgentCallLabel, TaskTabAgentChatLabel,
    TaskTabAgentInfoLabel, TaskTabSupervisorInfoLabel and TaskTabSupervisorOverviewLabel

```
export interface Strings<T = string> extends FrameStrings<T> {
    ...
    TaskTabAgentIncomingLabel?: T;
    TaskTabAgentCallLabel?: T;
    TaskTabAgentChatLabel?: T;
    TaskTabAgentInfoLabel?: T;
    TaskTabSupervisorInfoLabel?: T;
    TaskTabSupervisorOverviewLabel?: T;
}
```

-   `Views` of `ViewCollection` got a new prop `mountRule`. If specified, `keepMounted` prop value is ignored. Definition of the prop is as follows:

```
export enum ViewMountRule {
    Always = "Always",  // View is mounted from the start of the application and never unmounted
    WhenActive = "WhenActive", // Views is mounted when activated and unmounted when deactivated
    WhenHasBeenActive = "WhenHasBeenActive" // View is mounted when first activated and never umounted
}
```

## 1.1.0

### Fixed

-   TypeScript definitions of the package were referencing some missing files

### Added

-   Ability to transfer calls to a Queue from Directory Component (previously only workers were present there)
-   Action `TransferTask` was introduced with following payload:

```
{
    sid?: string; // sid of the ITask to transfer
    task?: ITask; // ITask object representing the Reservation being transferred
    targetSid: string; // sid of the Worker or Queue where the task should be transferred to
    options?: Object // options passed over to TaskRouter SDK transfer call. Refer to TaskRouter SDK documentation on Task.transfer option values.
}
```

As with all other Task specific actions, if calling it, either `task` or `sid` must be specified, the other is autofilled then accordingly. When tapping into the action either with events or task replacement, both will be filled at execution time.

## 1.0.2

### Fixed

-   Regular agents were not able to open up directory button for transfers
-   MainHeader now again accepts changing logoUrl default property

## 1.0.1

### Fixed

-   CRMContainer and MessagingCanvas did not pass props down to their custom children
-   Issues with broken UI when using custom store
