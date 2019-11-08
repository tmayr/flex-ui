import * as React from "react";
/**
 * Transforms text with the given syntax to React element
 *
 * @private
 * @param {Array<string | ReactElement>} body - The body of the message to be formatted
 * @param {string} [customMarkdownSyntax] - The markdown regex to be applied to the text
 */
export declare const ReactMarkdownParser: (body: (string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>)[], customMarkdownSyntax?: string) => any;
