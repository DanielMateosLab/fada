import { screen } from "@testing-library/react";
import Program from "pages/program";
import { getAllEvents, render } from "./test-utils";

describe("Program", () => {
  it("should render the title", () => {
    render(<Program />);

    const title = screen.getByRole("heading", { name: /Programme/ });

    expect(title).toBeInTheDocument();
  });

  it("should render all the events", () => {
    const events = getAllEvents();
    render(<Program />);

    const foundEvents = screen.getAllByTestId("day-event");

    expect(foundEvents.length).toBe(events.length);
  });
});
