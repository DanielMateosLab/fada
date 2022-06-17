import { render, screen } from "./test-utils";
import Home from "pages";

describe("Home", () => {
  it("should show fada's poster", () => {
    render(<Home />);

    const poster = screen.getByAltText("L'affiche du FADA");

    expect(poster).toBeInTheDocument();
  });
  it("should render FADA's introduction and argument", () => {
    render(<Home />);

    const introduction = screen.getByText(
      /Le Fada - festival du film autour de l'art - a été créé en 2015/
    );
    const argument = screen.getByText(
      /Intervention de réalisateurs-trices, ou professionnels-les du cinéma./
    );

    expect(introduction).toBeInTheDocument();
    expect(argument).toBeInTheDocument();
  });
});
