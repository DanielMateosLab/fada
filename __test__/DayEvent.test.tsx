import { screen } from "@testing-library/react";
import EventElement from "components/EventElement";
import { getAllEvents, render } from "./test-utils";

describe("DayEvent", () => {
  const events = getAllEvents();

  describe.each(events)("should render the event details", (event) => {
    it(`should render the event title`, () => {
      render(<EventElement event={event} />);
      const eventTitle = screen.getByText(event.title);

      expect(eventTitle).toBeInTheDocument();
    });

    it(`should render the event metadata`, () => {
      if (!event.metadata) return;

      render(<EventElement event={event} />);
      const eventMetadata = screen.getByText(event.metadata);

      expect(eventMetadata).toBeInTheDocument();
    });

    it(`should render the event time`, () => {
      if (!event.time) return;

      render(<EventElement event={event} />);
      const eventTime = screen.getByText(event.time);

      expect(eventTime).toBeInTheDocument();
    });

    it(`should render the event notes`, () => {
      if (!event.notes) return;

      render(<EventElement event={event} />);
      const eventNotes = screen.getByText(event.notes);

      expect(eventNotes).toBeInTheDocument();
    });
  });
});
