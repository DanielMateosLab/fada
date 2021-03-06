import { css } from "@emotion/react";
import { Breakpoints, DeviceType } from "models/models.theme";

const mq = (bp: Breakpoints) => `@media (min-width: ${bp}px)`;

const responsiveSpacing: { [key in DeviceType]: string } = {
  [DeviceType.Mobile]: "1rem",
  [DeviceType.Desktop]: "calc(100vw * 1/12)",
};

export const theme = {
  color: {
    typography: "#963c0d",
    gray: "#eeeeee",
    background: "#d14418",
  },
  mq: {
    xs: mq(Breakpoints.xs),
    sm: mq(Breakpoints.sm),
    md: mq(Breakpoints.md),
    lg: mq(Breakpoints.lg),
  },
  flatList: css`
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  sectionHeight: "500px",
  paddingX: css`
    padding-left: ${responsiveSpacing[DeviceType.Mobile]};
    padding-right: ${responsiveSpacing[DeviceType.Mobile]};
    ${mq(Breakpoints.xs)} {
      padding-left: ${responsiveSpacing[DeviceType.Desktop]};
      padding-right: ${responsiveSpacing[DeviceType.Desktop]};
    }
  `,
  responsiveSpacing,
};

export type AppTheme = typeof theme;
