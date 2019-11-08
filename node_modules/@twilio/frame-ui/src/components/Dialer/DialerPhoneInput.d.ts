import * as React from "react";
declare type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onReset?: (event: React.SyntheticEvent) => void;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    id: string;
    forwardedRef?: React.RefObject<any>;
};
export declare const DialerPhoneInput: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export {};
