import { render, screen } from "@testing-library/react";
import Home from "pages";

describe("Home", () => {
  it("should show fada's poster", () => {
    render(<Home />);

    const poster = screen.getByAltText("L'affiche du FADA");

    expect(poster).toBeInTheDocument();
  });
});
