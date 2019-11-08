import * as React from "react";
/**
 * Properties of the NumberedList component
 *
 * @private
 * @typedef NumberedList.NumberedListProps
 * @property {string} text - Text to be included in the component
 */
export interface NumberedListProps {
    text: string;
}
/**
 * This component renders a numbered list
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {NumberedList.NumberedListProps} props
 * @extends {React.PureComponent}
 */
export declare class NumberedList extends React.PureComponent<NumberedListProps> {
    render(): JSX.Element;
}
