import * as React from "react";
import { DynamicContentStore } from "@twilio/frame-ui";
/**
 * @alias Supervisor․TaskCardPlaceholder
 * @classdesc This is a container for TaskCardPlaceholder.
 * @component
 * @hideconstructor
 * Can be themed with [theme.TaskCardPlaceholder]
 * @category Components / Programmable
 */
export declare class TaskCardPlaceholder extends React.PureComponent {
    static displayName: string;
    /**
     * Dynamic content store
     *
     * @static
     * @type {DynamicContentStore<{}>}
     * @readonly
     */
    static Content: DynamicContentStore;
    render(): JSX.Element;
}
