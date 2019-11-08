import { AnyAction } from "redux";
import { SyncClient, SyncMapItem } from "twilio-sync";
import { ITask } from "../models";
/**
 * Conference state
 * @name ConferenceState
 * @property {Conference} source source object of the conference
 * @category State
 */
export interface ConferenceState {
    source: Conference;
}
/**
 * State for known conferences
 * @name ConferencesState
 * @property {Map<string, ConferenceState>} states active conferences states by conference SID
 * @category State
 */
export interface ConferencesState {
    readonly client: SyncClient;
    readonly states: Map<string, ConferenceState>;
}
/**
 * Participant type
 * @typedef {"worker" | "customer" | "transfer" | "supervisor" | ""} ParticipantType
 */
export declare type ParticipantType = "worker" | "customer" | "transfer" | "supervisor" | "";
/**
 * Participant status
 * @typedef {"left" | "joined" | "recently_left"} ParticipantStatus
 */
export declare type ParticipantStatus = "left" | "joined" | "recently_left";
/**
 * Conference status
 * @typedef {"left" | "joined" | "recently_left"} ConferenceStatus
 */
export declare type ConferenceStatus = "started" | "ended";
/**
 * Conference participant
 * @typedef ConferenceParticipant
 * @property {IQueue} [queue] queue associated with the participant (in case of transfer to queue)
 * @property {IWorker} [worker] worker associated with the participant
 * @property {string} callSid call SID associated with the voice connection of the participant
 * @property {boolean} isMyself is participant associated with the currently logged in user
 * @property {boolean} onHold is participant on hold
 * @property {boolean} muted is participant muted
 * @property {boolean} connecting is participant in connecting state
 * @property {ParticipantStatus} status status of the participant
 * @property {ParticipantType} participantType type of the participant
 * @property {string} reservationSid reservation SID for the participant
 * @property {string} workerSid SID of the worker
 */
export declare class ConferenceParticipant {
    private _source;
    private _callSid;
    participantLeftTimestamp: number;
    constructor(source: any, callSid?: string, participantLeftTimestamp?: number);
    /**
     * @private
     */
    readonly source: any;
    readonly worker: import("../models").IWorker<any>;
    readonly queue: import("../models").IQueue<any>;
    readonly onHold: boolean;
    readonly muted: boolean;
    readonly connecting: boolean;
    readonly participantType: ParticipantType;
    readonly reservationSid: any;
    readonly workerSid: any;
    readonly status: ParticipantStatus;
    /**
     * @private
     * @readonly
     */
    readonly uniqueId: string;
    readonly sid: string;
    readonly isMyself: boolean;
    readonly callSid: string;
}
/**
 * Conference type
 * @typedef Conference
 * @property {string} sid SID of the task
 * @property {ConferenceStatus} status status of the conference
 * @property {string} conferenceSid SID of the conference
 * @property {Array<ConferenceParticipant>} participants participants in the conference, including the ones who have left
 * @property {number} liveParticipantCount count of currently live participants
 * @property {number} liveWorkerCount count of currently live workers
 * @property {Array<ConferenceParticipant>} liveWorkers active worker participants in the conference
 */
export declare class Conference {
    sid: string;
    source: ConferenceListener;
    status: ConferenceStatus;
    conferenceSid: string;
    participants: Array<ConferenceParticipant>;
    constructor(sid: string);
    readonly liveParticipantCount: number;
    readonly liveWorkerCount: number;
    readonly liveWorkers: ConferenceParticipant[];
}
export interface UpdateConferencePayload {
    conference: Conference;
}
export interface UpdateMultipleConferencePayload {
    conferences: Array<Conference>;
}
export declare function reduce(state: ConferencesState, action: AnyAction): ConferencesState;
export declare class Actions {
    private static handleConferenceUpdateThrottler;
    private static handleConferenceUpdateCalls;
    private static dispatchAction;
    static assignInsights(insightsClient: any): void;
    private static handleConferenceUpdateImpl;
    static handleConferenceUpdate(listener: ConferenceListener): void;
    static updateConferencesWithParticipant(participantSid: string): void;
    static shutdown(): void;
}
interface OutboundTransfer {
    sid: string;
    status: string;
    source: any;
}
interface ConferenceListenerCallback {
    (listener: ConferenceListener): void;
}
export declare class ConferenceListener {
    private failedTransferRemoveTimer;
    private map;
    private updateCallback;
    private lifeCycle;
    private stateUpdateTimers;
    sid: string;
    children: Array<SyncMapItem>;
    outboundTransfer: OutboundTransfer;
    private static mapQuerySemaphore;
    constructor(sid: string, updateCallback?: ConferenceListenerCallback);
    triggerDelayedStateUpdate(timeout: number): void;
    stop(): void;
    private initOutgoingTransferListeners;
    private stopOutgoingTransferListeners;
    initOutboundTransfer(outgoingTransferObject: any): void;
    private updateOutboundTransfer;
    private initialize;
    private emitCallback;
    private itemAdded;
    private itemUpdated;
    private itemRemoved;
}
export declare class ConferenceListenerManager {
    private static confs;
    private static requestedSids;
    private static initialized;
    static initialize(): void;
    static startListening(task: ITask, consumerID: string): void;
    static stopListening(taskSid: string, consumerID: string): void;
    static initOutboundTransfer(outgoingTransferObject: any): void;
}
export {};
