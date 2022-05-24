import { ThemeProvider } from "@emotion/react";
import { render, RenderOptions } from "@testing-library/react";
import { theme } from "styles/theme";
import { programData } from "utils/data";
import { DayEvent } from "utils/types";

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

/** Returns all the events in the programData */
export const getAllEvents = (): DayEvent[] =>
  programData.reduce(
    (acc, { events }) => [...acc, ...events],
    [] as DayEvent[]
  );
