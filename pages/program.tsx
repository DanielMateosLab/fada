import { css } from "@emotion/react";
import Container from "components/Container";
import EventElement from "components/EventElement";
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

      {programData.map(({ date, events }, dayIndex) => (
        <article key={date}>
          <h2>{date}</h2>
          <ul>
            {events.map((event) => (
              <EventElement event={event} key={`d${dayIndex}` + event.title} />
            ))}
          </ul>
        </article>
      ))}
    </Container>
  );
};

export default Program;
