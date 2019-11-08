import { AnyAction } from "redux";
import { SyncClient } from "twilio-sync";
/**
 * @private
 */
export interface InsightsState {
    readonly client: SyncClient;
}
export declare function reduce(state: InsightsState, action: AnyAction): InsightsState;
export declare class Actions {
    private static dispatchAction;
    static init(client: SyncClient): void;
    static shutdown(): void;
}
