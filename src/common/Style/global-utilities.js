import { css } from 'styled-components';
// media query vars

export const breakPointXs = 320;
export const breakPointSm = 768;
export const breakPointMd = 1024;
export const breakPointLg = 1200;
export const breakPointMuiSm = 600;
export const breakPointMuiMd = 960;

export const breakPointXsMax = breakPointSm - 1;
export const breakPointSmMax = breakPointMd - 1;
export const breakPointMdMax = breakPointLg - 1;

// breakpoint utility function
export function snBreakpoint(size, unit) {
  unit = unit || 'px';
  return `${size}${unit}`;
}

const elementWidth =
  window.innerWidth > 0 ? window.innerWidth : window.screen.width;
export const isNotDesktopView = !(elementWidth >= breakPointMd);
export const mobileOnly = !(elementWidth >= breakPointXsMax);

export const scrollBar = css`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 12px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b5b5b5;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f1f1f1;
  }
`;
