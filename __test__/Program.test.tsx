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
    }
  );
});
