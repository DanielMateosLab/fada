import { css } from "@emotion/react";

export const breakpoints = [576, 768, 992, 1200];
export enum Breakpoints {
  xs,
  sm,
  md,
  lg,
}

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const theme = {
  color: {
    typography: "#963c0d",
    gray: "#cfcfcf",
    background: "#d14418",
  },
  mq: {
    sm: mq[0],
    md: mq[1],
    lg: mq[2],
    xl: mq[3],
  },
  flatList: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  sectionHeight: "500px",
  paddingX: "calc(100vw * 1/12)",
};

export type AppTheme = typeof theme;
