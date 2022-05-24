import { css } from "@emotion/react";
import Container from "components/Container";
import type { NextPage } from "next";
import { programData } from "utils/data";

const Program: NextPage = () => {
  return (
    <Container
      css={css`
        margin-bottom: 2rem;
      `}
    >
      <h1>
        Programme 6<sup>e</sup> Édition
      </h1>

      {programData.map(({ date, events }) => (
        <article key={date}>
          <h2>{date}</h2>
          <ul>
            {events.map((event) =>
              event.kind === "show" ? (
                <li key={event.title}>
                  <span>{event.time}</span>{" "}
                  <span>
                    {event.title} de {event.author},
                    {event.year ? event.year + ", " : " "}
                    {event.duration} min. {event.notes && event.notes + "."}
                  </span>
                </li>
              ) : (
                <li key={event.name}>
                  <span>{event.time}</span>
                  <span>{event.name}</span>
                </li>
              )
            )}
          </ul>
        </article>
      ))}
    </Container>
  );
};

export default Program;
