import * as React from "react";
/**
 * Properties of the UnorderedList component
 *
 * @private
 * @typedef UnorderedList.UnorderedListProps
 * @property {string} text - Text to be included in the component
 */
export interface UnorderedListProps {
    text: string;
}
/**
 * This component renders a unordered list
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {UnorderedList.UnorderedListProps} props
 * @extends {React.PureComponent}
 */
export declare class UnorderedList extends React.PureComponent<UnorderedListProps> {
    render(): JSX.Element;
}
