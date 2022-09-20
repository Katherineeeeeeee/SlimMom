import { useMediaQuery } from 'react-responsive';

export const isDesctop = useMediaQuery({ query: '(max-width: 1280px)' });
export const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
export const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
export const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
