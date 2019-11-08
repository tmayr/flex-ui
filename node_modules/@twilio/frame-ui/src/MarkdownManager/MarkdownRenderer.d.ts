import * as React from "react";
/**
 * Properties of children in MarkdownRenderer
 *
 * @private
 * @typedef {MarkdownRendererProps} MarkdownRenderer.MarkdownRendererProps
 * @param {Array<string | ReactElement>} body - The body of the message to be formatted
 */
export interface MarkdownRendererProps {
    body: string[];
}
/**
 * @private
 * @classdesc This component renders a text with Markdown support
 *
 * @param {MarkdownRenderer.MarkdownRendererProps} props - Properties to be passed to configure this component.
 * @extends {React.PureComponent}
 * @category Markdown
 */
export declare class MarkdownRenderer extends React.PureComponent<MarkdownRendererProps> {
    render(): JSX.Element;
}
