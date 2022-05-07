const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const theme = {
  color: {
    primary: "#963c0d",
    primaryLight: "#f5af8a",
  },
  mq: {
    sm: mq[0],
    md: mq[1],
    lg: mq[2],
    xl: mq[3],
  },
};

export type AppTheme = typeof theme;
