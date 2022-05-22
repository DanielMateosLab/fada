import { screen } from "@testing-library/react";
import Program from "pages/program";
import { render } from "./test-utils";

describe("Program", () => {
  it("should render the title", () => {
    render(<Program />);

    const title = screen.getByRole("heading", { name: /Programme/ });

    expect(title).toBeInTheDocument();
  });
});
