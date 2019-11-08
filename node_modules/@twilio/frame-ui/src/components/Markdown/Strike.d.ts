import * as React from "react";
/**
 * Properties of the Strike component
 *
 * @private
 * @typedef Strike.StrikeProps
 * @property {string} text - Text to be included in the component
 */
export interface StrikeProps {
    text: string;
}
/**
 * This component renders a strike-through text
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {Strike.StrikeProps} props
 * @extends {React.PureComponent}
 */
export declare class Strike extends React.PureComponent<StrikeProps> {
    render(): JSX.Element;
}
