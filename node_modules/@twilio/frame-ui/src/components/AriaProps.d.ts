declare enum AriaLive {
    Off = "off",
    Polite = "polite",
    Assertive = "assertive"
}
interface AriaProps {
    ariaLabel?: string;
    ariaLive?: AriaLive;
}
export { AriaLive, AriaProps };
