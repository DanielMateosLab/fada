import { render, screen } from "./test-utils";
import Home from "pages";

describe("Home", () => {
  it("should show fada's poster", () => {
    render(<Home />);

    const poster = screen.getByAltText("L'affiche du FADA");

    expect(poster).toBeInTheDocument();
  });
  it("should render outrevert's introduction", () => {
    render(<Home />);

    const introduction = screen.getByText(
      /Outrevert \(Les amis du Centre d'Art\) et la commune de Châteauvert vous invitent au cinquième festival FADA/
    );

    expect(introduction).toBeInTheDocument();
  });
  it("should render Béatrice's quote", () => {
    render(<Home />);

    const quote = screen.getByText(
      /Le film sur l'art élargit ses perspectives, raconte les artistes, leurs démarches, leurs oeuvres./
    );

    expect(quote).toBeInTheDocument();
  });
});
