import { screen, waitFor } from "@testing-library/react";
import Program from "pages/program";
import { programData } from "utils/data";
import { render } from "./test-utils";

describe("Program", () => {
  it("should render the title", () => {
    render(<Program />);

    const title = screen.getByRole("heading", { name: /Programme/ });

    expect(title).toBeInTheDocument();
  });
  describe.each(programData)(
    "should render the program day '$date'",
    ({ date, events }) => {
      it(`should render the day title "${date}"`, () => {
        render(<Program />);
        const dayTitle = screen.getByRole("heading", {
          name: new RegExp(date, "i"),
        });

        expect(dayTitle).toBeInTheDocument();
      });

      describe.each(events)("should render the day events", (event) => {
        it(`should render the event '${event.title}'`, () => {
          render(<Program />);

          const shows = screen.getAllByText(
            (content) =>
              content.includes(event.title) &&
              (event.metadata ? content.includes(event.metadata) : true) &&
              (event.time ? content.includes(event.time) : true)
          );

          expect(shows[0]).toBeInTheDocument();
        });
      });

      it("should render the breaks", () => {
        render(<Program />);

        const breaks = screen.getAllByText(/Dîner/i);

        expect(breaks).toHaveLength(3);
      });
    }
  );
});
