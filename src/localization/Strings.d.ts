import { Strings as FrameStrings } from "@twilio/frame-ui";
/**
 * String map to define localizable language strings
 * @category Core
 * @typedef {Object} Manager#Strings
 * @property {string} [SetYourStatus] shown in the right top menu as a label to set your status
 * @property {string} [LogOut] shown in the menu for log out item
 * @property {string} [SessionExpired] notification for an expired session
 * @property {string} [SideNavTaskView] left side navigation, task view link
 * @property {string} [SideNavTeamsView] sidebar link that navigates to Teams view
 * @property {string} [SideNavQueuesStatsView] QueuesStats link text in sidebar
 * @property {string} [TaskHeaderLine] shown in the task list on the first line
 * @property {string} [TaskExtraInfo] shown in the task list on separate section as bigger text
 * @property {string} [TaskLineCallIncomingTitle] shown in the title of incoming task canvas when task is call
 * @property {string} [TaskLineCallTransferTitle] shown in the title of incoming task canvas when task is call and transfered
 * @property {string} [TaskLineCallEndedTitle] shown in the title of call canvas when task is call and wrapup state
 * @property {string} [TaskLineQueue] shown the queue information
 * @property {string} [TaskLineCallReserved] describes an incoming call in the call canvas, task canvas and task list
 * @property {string} [TaskLineCallDuration] describes an call duration in call canvas
 * @property {string} [TaskLineCallWrapup] describes a call in wrapup status in the call canvas, task canvas and task list
 * @property {string} [TaskLineChatReserved] describes an incoming chat in the task canvas and task list
 * @property {string} [TaskLineSmsReserved] describes an incoming SMS chat in the task canvas and task list
 * @property {string} [TaskLineChatLineReserved] describes an incoming Line chat in the task canvas and task list
 * @property {string} [TaskLineChatMessengerReserved] describes an incoming Facebook Messenger chat in task canvas and task list
 * @property {string} [TaskLineChatWhatsAppReserved] describes an incoming WhatsApp chat in task canvas and task list
 * @property {string} [TaskLineChatAssigned] describes an assigned chat task (except webchat) and any chat task in wrapup status at the task list
 * @property {string} [TaskLineWebChatAssigned] describes an assigned webchat task at the task list
 * @property {string} [TaskLineTitle] describes title line for a task in IncomingTaskCanvas for default task channel
 * @property {string} [TaskReserved] describes an incoming default generic task in the call canvas, task canvas and task list from the agent perspective
 * @property {string} [TaskAssigned] describes an assigned default generic task in task card and task list from the agent perspective
 * @property {string} [TaskWrapup] describes a default generic task in wrapup status in the call canvas, task canvas and task list
 * @property {string} [TaskCompleted] describes a completed default generic task in call canvas, task canvas and task list
 * @property {string} [TaskCanceled] describes a canceled default generic task in call canvas, task canvas and task list
 * @property {string} [TaskPending] describes a pending default generic task in call canvas, task canvas and task list
 * @property {string} [TaskFilterAll] shown in the task list filter to include all tasks
 * @property {string} [TaskFilterActive] shown in the task list filter to include only active tasks
 * @property {string} [TaskFilterWrapping] shown in the task list filter to include only tasks in wrap up state
 * @property {string} [TaskInfoPanelContent] task-related information displayed on a task information tab
 * @property {string} [NoTasks] main text on the "No Tasks" panel
 * @property {string} [NoTasksTitle] string to be shown on the placeholder view when there are no tasks for the agent
 * @property {string} [NoTasksHintNotAvailable] small hint on the "No Tasks" panel for not available worker
 * @property {string} [NoTasksHintAvailable] small hint on the "No Tasks" panel for available worker
 * @property {string} [NoCRMTitle] header shown on the placeholder view when there is no CRM configured
 * @property {string} [NoCRMConfigured] main text to be shown on the placeholder view when there is no CRM configured
 * @property {string} [NoCRMConfiguredAction] caption of the button on the "No CRM Configured" panel
 * @property {string} [NoCRMHint] small hint on the "No CRM Configured" panel
 * @property {string} [LoginLoading] Loading label in login view
 * @property {string} [LoginPassword] password label in login view
 * @property {string} [LoginUsername] username label in login view
 * @property {string} [LoginLogin] login button caption
 * @property {string} [LoginErrorUntrustedDomain] main body of the login error for non-whitelisted domain
 * @property {string} [LoginErrorUntrustedDomainDetails] details of the login error for non-whitelisted domain
 * @property {string} [TaskHeaderComplete] button caption to Complete a task in wrapup
 * @property {string} [TaskHeaderEndCall] button label on Task Header to end call
 * @property {string} [TaskHeaderLeaveCall] button label on Task Header to leave a group call
 * @property {string} [TaskHeaderWrapup] button to take a task to wrapup
 * @property {string} [TaskHeaderEndChat] button label on Task Header to end chat and move the task to wrapup
 * @property {string} [TaskHeaderStatusAccepted] text to show on Task Header when task (except webchat) is in accepted state.
 * @property {string} [TaskHeaderWebChatStatusAccepted] text to show on Task Header when webchat task is in accepted state.
 * @property {string} [TaskHeaderGroupCallAccepted] text to show on Task Header when task is conference call and is in accepted state.
 * @property {string} [TaskHeaderStatusPending] text to show on Task Header when task is in pending state.
 * @property {string} [TaskHeaderStatusWrapup] text to show on Task Header when task is in wrapup state.
 * @property {string} [TaskHeaderStatusCompleted] text to show on Task Header when task is in completed state.
 * @property {string} [ColumnHeaderAgent] column name for "agents" column in Supervisor table in the Teams view
 * @property {string} [ColumnHeaderCalls] column name for "live calls" column in Supervisor table in the Teams view
 * @property {string} [ColumnHeaderTasks] column name for tasks different from calls in Supervisor table in the Teams view
 * @property {string} [SupervisorUserCardFirstLine] first line displayed for a user card in Supervisor table in the Teams view
 * @property {string} [SupervisorUserCardSecondLine] second line displayed for a user card in Supervisor table in the Teams view
 * @property {string} [SupervisorTaskHeaderLine] header of the task detail view in Supervisor UI in the Teams view
 * @property {string} [SupervisorTaskViewContentHeader] first line of inner content area of task detail view in Supervisor UI in the Teams view
 * @property {string} [SupervisorTaskLive] default string used by "helper" when calculating detail string for task in live state in the Teams view
 * @property {string} [SupervisorTaskWrapUp] default string used by "helper" when calculating detail string for task in wrapping up state in the Teams view
 * @property {string} [SupervisorTaskCompleted] default string used by "helper" when calculating detail string for task in completed state in the Teams view
 * @property {string} [SupervisorTaskCardHeader] first line of task details card in the Teams view
 * @property {string} [SupervisorTaskInfoPanelContent] task-related information displayed on a task information tab in the Teams view
 * @property {string} [LiveCommsMonitoringMessage] text used in Live Comms bar when monitoring a call
 * @property {string} [LiveCommsMonitoringMessageMoreWorkers] text used in Live Comms bar when monitoring a call where there are multiple workers
 * @property {string} [LiveCommsMonitoringMessageNoWorkers] text used in Live Comms bar when monitoring a call for which we are unable to find the associated workers
 * @property {string} [LiveCommsOngoingCallMessage] text used in Live Comms bar when on a call
 * @property {string} [LiveCommsBarReturnToCall] text in Live Comms bar button to return to a call
 * @property {string} [LiveCommsBarStopListening] text in Live Comms bar button to return to stop monitoring a call
 * @property {string} [LiveCommsBarHold] text in Live Comms bar button to return to hold a call
 * @property {string} [LiveCommsBarUnHold] text in Live Comms bar button to return to unhold a call
 * @property {string} [WorkerDirectoryItemFirstLine] first line in an item of a Worker Directory
 * @property {string} [WorkerDirectoryItemSecondLine] second line in an item of a Worker Directory
 * @property {string} [WorkerDirectoryTitle] title of the Worker Directory popup
 * @property {string} [WorkerDirectoryAgentsTabLabel] label of the agents tab in the worker directory popup
 * @property {string} [WorkerDirectoryQueuesTabLabel] label of the queues tab in the worker directory popup
 * @property {string} [WorkerDirectoryQueueItemText] displayed info about a queue item in the list of queues on the queues tab in the worker directory popup
 * @property {string} [WorkerDirectorySearchPlaceholder] placeholder text for the search input
 * @property {string} [ChatInputDisabledText] text displayed inside a disabled chat input
 * @property {string} [WorkerCanvasHeader] header for the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerCanvasDetailsHeader] header for the Worker Details section of the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerCanvasSkillsHeader] header for the Skills section of the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillLevelInvalid] message displayed due to failed validation of a provided skill level of the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillPleaseSelect] text displayed as a placeholder in the skills dropdown menu of the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillsNoSkills] message displayed in case there are no skills specified within the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillsSchemaMismatch] message displayed in case skills couldn't be parsed due to schema mismatch within the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillsSaved] message indicating that the skills has been successfully saved at the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillsError] message indicating that saving changes to skills have failed at the worker canvas in Supervisor UI in the Teams view
 * @property {string} [WorkerSkillsReverted] message indicated that the skills were successfully reset
 * @property {string} [ChatWelcomeText] chat welcome text for agent
 * @property {string} [UiVersionDeprecated] notification indicating that the current version of Flex is deprecated
 * @property {string} [RuntimeLoginLabel] header for the runtime login view
 * @property {string} [RuntimeLoginPlaceholder] placeholder for the runtime login view input field in the runtime login view
 * @property {string} [RuntimeLoginLaunch] label for the action button in the runtime login view
 * @property {string} [RuntimeLoginWithTwilio] label in the runtime login view for the link that leads to Twilio login page
 * @property {string} [RuntimeLoginIsAdmin] a text prepending `RuntimeLoginWithTwilio` link in the runtime login view
 * @property {string} [RuntimeLoginErrorDomain] an error displayed in case runtime domain couldn't be resolved in the runtime login view
 * @property {string} [RuntimeLoginErrorSso] an error displayed in the runtime login view in case SSO isn't properly configured for the Flex project within Twilio Console
 * @property {string} [TransferFailedNotification] a notification displayed in case of failed task transfer to another agent
 * @property {string} [TaskCannotBeTransferredNotification] a notification displayed in case the task cannot be transferred, for example when the task state has already changed and cannot be transferred anymore.
 * @property {string} [SupervisorTaskCanvasHeader] a header for the task card in Supervisor UI in the Teams view
 * @property {string} [TaskTabAgentIncomingLabel] tab label for incoming task
 * @property {string} [TaskTabAgentCallLabel] tab label for active call
 * @property {string} [TaskTabAgentChatLabel] tab label for active chat
 * @property {string} [TaskTabAgentInfoLabel] info tab label for agent desktop view
 * @property {string} [TaskTabSupervisorInfoLabel] info tab label for teams view
 * @property {string} [TaskTabSupervisorOverviewLabel] task overview tab label
 * @property {string} [TaskTabSupervisorCallLabel] Call task tab label in Supervisor task canvas.
 * @property {string} [TaskTabSupervisorChatLabel] Chat task tab label in Supervisor task canvas.
 * @property {string} [MicNotAvailableNotification] message shown if microphone device was not found
 * @property {string} [BrowserVoiceDisabledNotification] message shown if voice SDK has been disabled
 * @property {string} [MessageSizeExceeded] message shown if maximum message length was exceeded
 * @property {string} [UserControlWorkerSecondLine] text to be shown on the second line of user card
 * @property {string} [UserLoggedOutSuccess] label shown after user logged out
 * @property {string} [CannotChangeOtherWorkerActivity] message shown if failed to change activity for another user
 * @property {string} [TaskLineCallTransferWorker] Description line used by tasklist item for call transfers made directly to worker
 * @property {string} [TaskLineCallTransferWorkerDetail] Description line used by incoming call panel for call transfers made directly to worker
 * @property {string} [TaskLineCallTransferQueue] Description line used by tasklist item panel for call transfers made to queue
 * @property {string} [TaskLineCallTransferQueueDetail] Description line used by incoming call panel for call transfers made to queue
 * @property {string} [CallParticipantStatusLive] Default text to show on participant when they are in the call
 * @property {string} [CallParticipantStatusConnecting] Default text to show while connecting to another agent during warm-transfer
 * @property {string} [CallParticipantStatusOnHold] Text to show on participant when they are in the call
 * @property {string} [CallCanvasWorkerOnHold] Text to show on call canvas when worker is on hold
 * @property {string} [CallCanvasUnholdWorker] Text in call canvas to unhold worker
 * @property {string} [CallParticipantStatusLeft] Text to show on participant when they has left the call
 * @property {string} [CallParticipantStatusTransferFailed] Text to show on participant when it is failed transfer
 * @property {string} [CallParticipantStatusKickConfirmation] Text to show on participant when kick action needs confirmation
 * @property {string} [CallParticipantCustomerName] Text used to denote customer in call canvas
 * @property {string} [SupervisorTaskGroupCall] Text shown in supervisor task cards for group calls
 * @property {string} [PredefinedChatMessageAuthorName] author name of the optional predefined messaged displayed in ChatWidget MessagingCanvas
 * @property {string} [PredefinedChatMessageBody] body of the optional predefined messaged displayed in ChatWidget MessagingCanvas
 * @property {string} [AgentStatusAvailable] Label to indicate "Available" agents state in QueuesView barChar
 * @property {string} [AgentStatusBusy] Label to indicate "Busy" agents state in QueuesView barChar
 * @property {string} [AgentStatusUnavailable] Label to indicate "Unavailable" agents state in QueuesView barChar
 * @property {string} [AgentStatusOffline] Label to indicate "Offline" agents state in QueuesView barChar
 * @property {string} [ActiveTasksTileTitle] Label used as title in ActiveTasksTile in QueuesView
 * @property {string} [WaitingTasksTileTitle] Label used as title in WaitingTasksTile in QueuesView
 * @property {string} [AgentsByActivityTileTitle] Label used as title in AgentsByActivityTile in QueuesView
 * @property {string} [LongestWaitTimeTileTitle] Label used as title in LongestWaitTimeTile in QueuesView
 * @property {string} [QueuesNoDataHeading] NoData component heading for QueuesView
 * @property {string} [QueuesNoDataBodyForAdmin] NoData component body for QueuesView for Admin users
 * @property {string} [QueuesNoDataBodyForSupervisor] NoData component body for QueuesView for Supervisor users
 * @property {string} [QueuesNoDataLinkLabelForAdmin] NoData component link label for QueuesView for Admin users
 * @property {string} [LogToFileStartLoggingText] html content shown in Start logging dropdown
 * @property {string} [LogToFileStopLoggingLabel] button label shown in Stop logging dropdown
 * @property {string} [LogToFileStartLoggingLabel] button label shown in Start logging dropdown
 * @property {string} [LogToFileStopLoggingText] html content shown in Stop logging dropdown
 * @property {string} [PendingReservationsOnLogoutNotification] Notification when trying to log out while having pending notifications
 * @property {string} [PendingReservationsOnActivityStateChangeNotification] Notification when trying to change activity to unavailable while having pending notifications
 * @property {string} [AcceptTaskTooltip] Tooltip used on accept task icon button
 * @property {string} [RejectTaskTooltip] Tooltip used on reject task icon button
 * @property {string} [HangupCallTooltip] Tooltip used on hangup call icon button
 * @property {string} [LeaveCallTooltip] Tooltip used on leave call icon button
 * @property {string} [MuteCallTooltip] Tooltip used on mute call icon button
 * @property {string} [HoldCustomerTooltip] Tooltip used on hold customer icon button
 * @property {string} [UnholdCustomerTooltip] Tooltip used on unhold customer icon button
 * @property {string} [HoldAgentTooltip] Tooltip used on hold agent icon button
 * @property {string} [UnholdAgentTooltip] Tooltip used on unhold agent icon button
 * @property {string} [CancelTransferTooltip] Tooltip used on cancel transfer icon button
 * @property {string} [KickAgentTooltip] Tooltip used on kick agent icon button
 * @property {string} [ColdTransferTooltip] Tooltip used on cold transfer icon button
 * @property {string} [WarmTransferTooltip] Tooltip used on warm transfer icon button
 * @property {string} [MonitorCallTooltip] Tooltip used on monitor call icon button
 * @property {string} [ChatOrchestrationAddToChatChannelFailed] Error text to be shown if 'AddToChatChannel' Chat Orchestration failed
 * @property {string} [ChatOrchestrationDeactivateChatChannelFailed] Error text to be shown if 'DeactivateChatChannel' Chat Orchestration failed
 * @property {string} [ChatOrchestrationLeaveChatChannelFailed] Error text to be shown if 'LeaveChatChannel' Chat Orchestration failed
 * @property {string} [TeamsViewFilterAction] Text for filter button in teams view
 * @property {string} [TeamsViewClearSearchAction] Text for clear search link in teams view
 * @property {string} [TeamsViewClearSearchPlaceholder] Text for search input placeholder in teams view
 * @property {string} [TeamsViewResultsSummaryNoWorkersDisplayed] Text displayed when no workers are displayed (0 workers)
 * @property {string} [TeamsViewResultsSummaryMaxWorkersDisplayed] Text displayed when the max amount of workers is displayed - as we have a cap of 200 server-side
 * @property {string} [TeamsViewResultsSummaryFilterCTA] Label for summary "filter" CTA button
 * @property {string} [TeamFiltersPanelTitle] Panel title
 * @property {string} [TeamFiltersPanelSingularLabel] Used in TeamFilters to display the number of agents (1)
 * @property {string} [TeamFiltersPanelPluralLabel] Used in TeamFilters to display the number of agents (0, 1+)
 * @property {string} [TeamFiltersApply] TeamFilters Apply label
 * @property {string} [TeamFiltersReset] TeamFilters Reset label
 * @property {string} [RequestBrowserNotificationPermissions] notification requesting pemissions for browser notifications
 * @property {string} [IncomingCallBrowserNotificationTitle] title of browser notification for incoming call
 * @property {string} [IncomingCallBrowserNotificationBody] body of browser notification for incoming call
 * @property {string} [IncomingCallNotificationTitle] body of in app notification for incoming call
 * @property {string} [IncomingCallTransferNotificationTitle] body of in app notification for incoming call transfer
 * @property {string} [IncomingCallTransferBrowserNotificationTitle] title of browser notification for incoming call transfer
 * @property {string} [IncomingCallTransferWorkerBrowserNotificationBody] body of browser notification for incoming call transfer from worker
 * @property {string} [IncomingCallTransferQueueBrowserNotificationBody] body of browser notification for incoming call transfer from queue
 * @property {string} [IncomingNotificationAccept] button title to accept incoming task from notification
 * @property {string} [IncomingNotificationReject] button title to reject incoming task from notification
 * @property {string} [IncomingChatNotificationTitle] in app notification title for chat task
 * @property {string} [IncomingLineNotificationTitle] in app notification title for Line task
 * @property {string} [IncomingMessengerNotificationTitle] in app notification title for Messenger task
 * @property {string} [IncomingWhatsAppNotiticationTitle] in app notification title for WhatsApp task
 * @property {string} [IncomingSmsNotificationTitle] in app notification title for sms task
 * @property {string} [IncomingChatBrowserNotificationTitle] browser notification title for chat task
 * @property {string} [IncomingLineBrowserNotificationTitle] browser notification title for Line task
 * @property {string} [IncomingMessengerBrowserNotificationTitle] browser notification title for Messenger task
 * @property {string} [IncomingWhatsAppBrowserNotiticationTitle] browser notification title for WhatsApp task
 * @property {string} [IncomingSmsBrowserNotificationTitle] browser notification title for sms task
 * @property {string} [IncomingChatBrowserNotificationBody] browser notification body for chat task
 */
export interface Strings<T = string> extends FrameStrings<T> {
    SetYourStatus?: T;
    LogOut?: T;
    SigningIn?: T;
    SessionExpired: T;
    SideNavTaskView?: T;
    SideNavTeamsView?: T;
    SideNavAgentDashboard?: T;
    SideNavSupervisorDashboard?: T;
    SideNavSupervisorInspections?: T;
    SideNavSupervisorReports?: T;
    SideNavSettings?: T;
    SideNavQueuesStatsView?: T;
    TaskHeaderLine?: T;
    TaskExtraInfo?: T;
    TaskLineCallIncomingTitle?: T;
    TaskLineCallTransferTitle?: T;
    TaskLineCallEndedTitle?: T;
    TaskLineQueue?: T;
    TaskLineCallReserved?: T;
    TaskLineCallDuration?: T;
    TaskLineCallAssigned?: T;
    TaskLineCallWrapup?: T;
    TaskLineGroupCallAssigned?: T;
    TaskLineCallTransferWorker?: T;
    TaskLineCallTransferWorkerDetail?: T;
    TaskLineCallTransferQueue?: T;
    TaskLineCallTransferQueueDetail?: T;
    TaskLineChatReserved?: T;
    TaskLineSmsReserved?: T;
    TaskLineChatLineReserved?: T;
    TaskLineChatMessengerReserved?: T;
    TaskLineChatWhatsAppReserved?: T;
    TaskLineChatAssigned?: T;
    TaskLineWebChatAssigned?: T;
    TaskLineTitle?: T;
    TaskReserved?: T;
    TaskAssigned?: T;
    TaskWrapup?: T;
    TaskCompleted?: T;
    TaskCanceled?: T;
    TaskFilterAll?: T;
    TaskFilterActive?: T;
    TaskFilterWrapping?: T;
    TaskInfoPanelContent?: T;
    NoTasks?: T;
    NoTasksTitle?: T;
    NoTasksHintNotAvailable?: T;
    NoTasksHintAvailable?: T;
    NoCRMTitle?: T;
    NoCRMConfigured?: T;
    NoCRMConfiguredAction?: T;
    NoCRMHint?: T;
    LoginLoading?: T;
    LoginPassword?: T;
    LoginUsername?: T;
    LoginLogin?: T;
    LoginContinue?: T;
    LoginAgain?: T;
    LoginTitle?: T;
    LoginWelcome?: T;
    LoginLaunch?: T;
    LoginWithTwilio?: T;
    LoginIsAdmin?: T;
    LoginErrorDomain?: T;
    LoginErrorDomainDetails?: T;
    LoginErrorSso?: T;
    LoginErrorSsoDetails?: T;
    LoginErrorPopupBlocked?: T;
    LoginErrorPopupBlockedDetails?: T;
    LoginErrorUntrustedDomain?: T;
    LoginErrorUntrustedDomainDetails?: T;
    LoginErrorInvalidCertificate?: T;
    LoginErrorInvalidCertificateDetails?: T;
    LoginErrorGeneric?: T;
    TaskHeaderComplete?: T;
    TaskHeaderEndCall?: T;
    TaskHeaderLeaveCall?: T;
    TaskHeaderWrapup?: T;
    TaskHeaderEndChat?: T;
    TaskHeaderStatusAccepted?: T;
    TaskHeaderWebChatStatusAccepted?: T;
    TaskHeaderGroupCallAccepted?: T;
    TaskHeaderStatusPending?: T;
    TaskHeaderStatusWrapup?: T;
    TaskHeaderStatusCompleted?: T;
    ColumnHeaderAgent?: T;
    ColumnHeaderCalls?: T;
    ColumnHeaderTasks?: T;
    SupervisorUserCardFirstLine?: T;
    SupervisorUserCardSecondLine?: T;
    SupervisorTaskHeaderLine?: T;
    SupervisorTaskViewContentHeader?: T;
    SupervisorTaskLive?: T;
    SupervisorTaskWrapUp?: T;
    SupervisorTaskCompleted?: T;
    SupervisorTaskCardHeader?: T;
    SupervisorTaskInfoPanelContent?: T;
    LiveCommsMonitoringMessage?: T;
    LiveCommsMonitoringMessageMoreWorkers?: T;
    LiveCommsMonitoringMessageNoWorkers?: T;
    LiveCommsOngoingCallMessage?: T;
    LiveCommsBarReturnToCall?: T;
    LiveCommsBarStopListening?: T;
    LiveCommsBarHold?: T;
    LiveCommsBarUnHold?: T;
    WorkerDirectoryItemFirstLine?: T;
    WorkerDirectoryItemSecondLine?: T;
    WorkerDirectoryTitle?: T;
    WorkerDirectoryAgentsTabLabel?: T;
    WorkerDirectoryQueuesTabLabel?: T;
    WorkerDirectoryQueueItemText?: T;
    WorkerDirectorySearchPlaceholder?: T;
    ChatInputDisabledText?: T;
    WorkerCanvasHeader?: T;
    WorkerCanvasDetailsHeader?: T;
    WorkerCanvasSkillsHeader?: T;
    WorkerSkillLevelInvalid?: T;
    WorkerSkillPleaseSelect?: T;
    WorkerSkillsNoSkills?: T;
    WorkerSkillsSchemaMismatch?: T;
    WorkerSkillsSaved?: T;
    WorkerSkillsError?: T;
    WorkerSkillsReverted?: T;
    ChatWelcomeText?: T;
    UiVersionDeprecated?: T;
    RuntimeLoginLabel?: T;
    RuntimeLoginPlaceholder?: T;
    RuntimeLoginLaunch?: T;
    RuntimeLoginWithTwilio?: T;
    RuntimeLoginIsAdmin?: T;
    RuntimeLoginErrorDomain?: T;
    RuntimeLoginErrorSso?: T;
    TransferFailedNotification?: T;
    TaskCannotBeTransferredNotification?: T;
    SupervisorTaskCanvasHeader?: T;
    TaskTabAgentIncomingLabel?: T;
    TaskTabAgentCallLabel?: T;
    TaskTabAgentChatLabel?: T;
    TaskTabAgentInfoLabel?: T;
    TaskTabSupervisorInfoLabel?: T;
    TaskTabSupervisorOverviewLabel?: T;
    TaskTabSupervisorCallLabel?: T;
    TaskTabSupervisorChatLabel?: T;
    MicNotAvailableNotification?: T;
    BrowserVoiceDisabledNotification?: T;
    MessageSizeExceeded?: T;
    UserControlWorkerSecondLine?: T;
    UserLoggedOutSuccess?: T;
    CannotChangeOtherWorkerActivity?: T;
    CallCanvasWorkerOnHold?: T;
    CallCanvasUnholdWorker?: T;
    CallParticipantStatusOnHold?: T;
    CallParticipantStatusLive?: T;
    CallParticipantStatusConnecting?: T;
    CallParticipantStatusLeft?: T;
    CallParticipantStatusTransferFailed?: T;
    CallParticipantStatusKickConfirmation?: T;
    CallParticipantCustomerName?: T;
    SupervisorTaskGroupCall?: T;
    MonitoringFailedNotification?: T;
    PredefinedChatMessageAuthorName?: T;
    PredefinedChatMessageBody?: T;
    AgentStatusAvailable?: T;
    AgentStatusBusy?: T;
    AgentStatusUnavailable?: T;
    AgentStatusOffline?: T;
    ActiveTasksTileTitle?: T;
    WaitingTasksTileTitle?: T;
    AgentsByActivityTileTitle?: T;
    LongestWaitTimeTileTitle?: T;
    QueuesNoDataHeading?: T;
    QueuesNoDataBodyForAdmin?: T;
    QueuesNoDataBodyForSupervisor?: T;
    QueuesNoDataLinkLabelForAdmin?: T;
    LogToFileStartLoggingText?: T;
    LogToFileStartLoggingLabel?: T;
    LogToFileStopLoggingText?: T;
    LogToFileStopLoggingLabel?: T;
    PendingReservationsOnLogoutNotification?: T;
    PendingReservationsOnActivityStateChangeNotification?: T;
    AcceptTaskTooltip?: T;
    RejectTaskTooltip?: T;
    HangupCallTooltip?: T;
    LeaveCallTooltip?: T;
    MuteCallTooltip?: T;
    HoldCustomerTooltip?: T;
    UnholdCustomerTooltip?: T;
    HoldAgentTooltip?: T;
    UnholdAgentTooltip?: T;
    CancelTransferTooltip?: T;
    KickAgentTooltip?: T;
    ColdTransferTooltip?: T;
    WarmTransferTooltip?: T;
    MonitorCallTooltip?: T;
    ChatOrchestrationAddToChatChannelFailed?: T;
    ChatOrchestrationDeactivateChatChannelFailed?: T;
    ChatOrchestrationLeaveChatChannelFailed?: T;
    TeamsViewFilterAction?: T;
    TeamsViewClearSearchAction?: T;
    TeamsViewClearSearchPlaceholder?: T;
    TeamsViewResultsSummaryNoWorkersDisplayed?: T;
    TeamsViewResultsSummaryMaxWorkersDisplayed?: T;
    TeamsViewResultsSummaryFilterCTA?: T;
    TeamFiltersPanelTitle?: T;
    TeamFiltersPanelPluralLabel?: T;
    TeamFiltersPanelSingularLabel?: T;
    TeamFiltersApply?: T;
    TeamFiltersReset?: T;
    AudioPlayerDeniedError?: T;
    AudioPlayerInvalidMediaError?: T;
    AudioPlayerGenericError?: T;
    RequestBrowserNotificationPermissions?: T;
    IncomingCallBrowserNotificationTitle?: T;
    IncomingCallBrowserNotificationBody?: T;
    IncomingCallNotificationTitle?: T;
    IncomingCallTransferNotificationTitle?: T;
    IncomingCallTransferBrowserNotificationTitle?: T;
    IncomingCallTransferWorkerBrowserNotificationBody?: T;
    IncomingCallTransferQueueBrowserNotificationBody?: T;
    IncomingNotificationAccept?: T;
    IncomingNotificationReject?: T;
    IncomingChatNotificationTitle?: T;
    IncomingLineNotificationTitle?: T;
    IncomingMessengerNotificationTitle?: T;
    IncomingWhatsAppNotiticationTitle?: T;
    IncomingSmsNotificationTitle?: T;
    IncomingChatBrowserNotificationTitle?: T;
    IncomingLineBrowserNotificationTitle?: T;
    IncomingMessengerBrowserNotificationTitle?: T;
    IncomingWhatsAppBrowserNotiticationTitle?: T;
    IncomingSmsBrowserNotificationTitle?: T;
    IncomingChatBrowserNotificationBody?: T;
}
