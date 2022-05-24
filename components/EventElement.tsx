import { css, useTheme } from "@emotion/react";
import { DayEvent } from "utils/types";

interface Props {
  event: DayEvent;
  key?: string;
}
const EventElement: React.FC<Props> = ({ event }) => {
  const theme = useTheme();

  return (
    <li
      data-testid="day-event"
      css={css`
        display: grid;
        grid-template-columns: 6ch 1fr;
        column-gap: 1rem;
        &:not(:last-of-type) {
          margin-bottom: 0.5rem;
        }
      `}
    >
      <div>{event.time}</div>
      <div>
        <span
          css={css`
            color: ${theme.color.primary};
            font-weight: bold;
          `}
        >
          {event.title}
        </span>{" "}
        {event.metadata} <u>{event.notes}</u>
      </div>
    </li>
  );
};

export default EventElement;
