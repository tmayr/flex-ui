/// <reference types="react" />
export interface FullscreenConfig {
    enabled: boolean;
    renderButton: ((props: FullscreenButtonProps) => React.ReactNode) | null;
    wrapperStyles: React.CSSProperties;
}
export interface FullscreenButtonProps {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
}
