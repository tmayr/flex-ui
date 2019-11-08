import * as React from "react";
/**
 * Properties of the Bold component
 *
 * @private
 * @typedef Bold.BoldProps
 * @property {string} text - Text to be included in the component
 */
export interface BoldProps {
    text: string;
}
/**
 * This component renders a bold text
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {Bold.BoldProps} props
 * @extends {React.PureComponent}
 */
export declare class Bold extends React.PureComponent<BoldProps> {
    render(): JSX.Element;
}
