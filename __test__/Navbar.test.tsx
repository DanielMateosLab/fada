import { render, screen } from "@testing-library/react";
import Navbar from "components/Navbar";

describe("Navbar", () => {
  describe.each([
    ["Fada", "/"],
    ["Programme", "/program"],
    ["Accès et Contact", "/access-and-contact"],
  ])("should have a link to %s", (text, href) => {
    it(`should have a link to ${text}`, () => {
      render(<Navbar />);
      const linkElement = screen.getByText(new RegExp(text, "i"));
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", href);
    });
  });
});
