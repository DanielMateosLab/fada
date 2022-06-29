import { screen } from "@testing-library/react";
import ContactElement from "components/ContactElement";
import { contactInfo } from "utils/data";
import { render } from "./test-utils";

describe("ContactElement", () => {
  describe.each(contactInfo)("should render all contact details", (contact) => {
    it("should show the contact name", () => {
      render(<ContactElement contact={contact} />);

      expect(
        screen.getByText(contact.name, { exact: false })
      ).toBeInTheDocument();
    });

    it("should show the contact email", () => {
      render(<ContactElement contact={contact} />);

      expect(screen.getByText(contact.email)).toBeInTheDocument();
    });

    it("should show the contact phone number", () => {
      if (contact.phone) {
        render(<ContactElement contact={contact} />);

        expect(screen.getByText(contact.phone)).toBeInTheDocument();
      }
    });

    it("should show the contact address", () => {
      if (contact.address) {
        render(<ContactElement contact={contact} />);

        expect(screen.getByText(contact.address)).toBeInTheDocument();
      }
    });
  });
});
