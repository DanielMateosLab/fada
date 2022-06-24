import { css } from "@emotion/react";
import { Breakpoints, DeviceType } from "models/models.theme";

const mq = (bp: Breakpoints) => `@media (min-width: ${bp}px)`;

const paddingX: { [key in DeviceType]: string } = {
  [DeviceType.Mobile]: "1rem",
  [DeviceType.Desktop]: "calc(100vw * 1/12)",
};

export const theme = {
  color: {
    typography: "#963c0d",
    gray: "#cfcfcf",
    background: "#d14418",
  },
  mq: {
    md: mq(Breakpoints.md),
  },
  flatList: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  sectionHeight: "500px",
  paddingX,
};

export type AppTheme = typeof theme;
