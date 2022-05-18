import { render } from "@testing-library/react";
import Navbar from "components/Navbar";

describe("Navbar", () => {
  it("should have the FADA brand", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText("FADA")).toBeInTheDocument();
  });
});
