import * as React from "react";
export declare enum DialpadButtons {
    ZERO = "0",
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    ASTERISK = "*",
    HASH = "#"
}
declare type Props = {
    value: DialpadButtons;
    animate?: boolean;
    options?: string;
    onClick?: (value: string) => void;
};
export declare class DialpadButton extends React.PureComponent<Props> {
    private captionKey;
    private descriptionKey;
    static defaultProps: {
        onClick: () => void;
    };
    constructor(props: Props);
    private onClick;
    render(): JSX.Element;
}
export {};
