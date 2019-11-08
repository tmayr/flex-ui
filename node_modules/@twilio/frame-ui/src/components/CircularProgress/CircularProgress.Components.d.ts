/// <reference types="react" />
/// <reference types="create-emotion" />
import { ThemeProps } from "../theme";
import { CircularProgressProps } from "./CircularProgress";
export declare const getOverriddenPropIfAvailable: (props: CircularProgressProps & ThemeProps, key: string | number) => import("create-emotion").Interpolation;
export declare const StyledCircularProgress: import("create-emotion-styled/types/react").StyledOtherComponent<CircularProgressProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any>;
