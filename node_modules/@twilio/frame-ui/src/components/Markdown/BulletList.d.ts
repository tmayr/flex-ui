import * as React from "react";
/**
 * Properties of the BulletList component
 *
 * @private
 * @typedef BulletList.BulletListProps
 * @property {string} text - Text to be included in the component
 */
export interface BulletListProps {
    text: string;
}
/**
 * This component renders a bullet list
 *
 * @private
 * @category Components / Basic
 * @hideconstructor
 * @param {BulletList.BulletListProps} props
 * @extends {React.PureComponent}
 */
export declare class BulletList extends React.PureComponent<BulletListProps> {
    render(): JSX.Element;
}
