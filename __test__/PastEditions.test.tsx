import { screen } from "@testing-library/react";
import PastEditions from "pages/past-editions";
import { render } from "./test-utils";

describe("PastEditions", () => {
  it("should render the title", () => {
    render(<PastEditions />);

    const title = screen.getByRole("heading", { name: /Éditions Passées/ });

    expect(title).toBeInTheDocument();
  });

  it("should render 5 posters", () => {
    render(<PastEditions />);

    const posters = screen.getAllByRole("img", { name: /Affiche/ });

    expect(posters).toHaveLength(5);
  });
});
