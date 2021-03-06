import { render, screen } from "./test-utils";
import Navbar from "components/Navbar";

describe.skip("Navbar", () => {
  describe.each([
    ["Fada", "/"],
    ["Programme", "/program"],
    ["Contact", "/contact"],
    ["Éditions Passées", "/past-editions"],
  ])("should have a link to %s", (text, href) => {
    it(`should have a link to ${text}`, () => {
      render(<Navbar />);
      const linkElement = screen.getByText(new RegExp(text, "i"));
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });
});
