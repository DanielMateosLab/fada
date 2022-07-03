import { SerializedStyles } from "@emotion/react";
import { Dictionary } from "./models.gen";

export enum DeviceType {
  Desktop = "Desktop",
  Mobile = "Mobile",
}

export enum Breakpoints {
  xs = 576,
  sm = 768,
  md = 992,
  lg = 1200,
}

type ResponsiveStyles = Dictionary<DeviceType, SerializedStyles>;

export interface ResponsiveStyler {
  base?: SerializedStyles;
  responsive?: ResponsiveStyles;
}
