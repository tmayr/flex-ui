import { ChatState } from "@twilio/frame-ui";
import { RouterState } from "react-router-redux";
import { Config } from "./AppConfig";
import { SessionState } from "./SessionState";
import { WorkerState } from "./WorkerState";
import { PhoneState } from "./PhoneState";
import { ViewState } from "./ViewState";
import { InsightsState } from "./InsightsState";
import { ConnectionStatus } from "./ConnectionStatus";
import { SupervisorState } from "./SupervisorState";
import { ConferencesState } from "./ConferencesState";
import { QueuesStateInterface } from "./QueuesState";
import { QueuesStateInterface as QueuesStateInterfaceLegacy } from "./QueuesStateLegacy";
import { FeatureFlagsState } from "./FeatureFlags";
/**
 * Root Redux Flex application state
 * @name AppState
 * @property {Config} config configuration state
 * @property {SessionState} session session state
 * @property {ChatState} chat chat state
 * @property {WorkerState} worker worker state
 * @property {PhoneState} phone voice connections state
 * @property {ViewState} view view state
 * @property {SupervisorState} supervisor supervisor state
 * @property {RouterState} router React router state from react-router-redux library
 * @property {ConferencesState} conferences conferences state
 * @category State
 */
export interface AppState {
    readonly config: Config;
    readonly session: SessionState;
    readonly chat: ChatState.ChatState;
    readonly worker: WorkerState;
    readonly phone: PhoneState;
    readonly view: ViewState;
    readonly connectionStatus: ConnectionStatus;
    readonly insights: InsightsState;
    readonly supervisor: SupervisorState;
    readonly router: RouterState;
    readonly conferences: ConferencesState;
    readonly realtimeQueues: QueuesStateInterface;
    readonly queues: QueuesStateInterfaceLegacy;
    readonly featureFlags: FeatureFlagsState;
}
