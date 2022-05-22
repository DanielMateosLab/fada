import { render, screen } from "@testing-library/react";
import Home from "pages";

describe("Home", () => {
  it("should show fada's poster", () => {
    render(<Home />);

    const poster = screen.getByAltText("L'affiche du FADA");

    expect(poster).toBeInTheDocument();
  });
  it("should render Béatrice's introduction", () => {
    render(<Home />);

    const introduction = screen.getByText(
      /Le film sur l'art élargit ses perspectives, raconte les artistes, leurs démarches, leurs oeuvres./
    );

    expect(introduction).toBeInTheDocument();
  });
});
