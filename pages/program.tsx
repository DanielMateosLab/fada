import { useTheme } from "@emotion/react";
import Container from "components/Container";
import EventElement from "components/EventElement";
import type { NextPage } from "next";
import { programData } from "utils/data";

const Program: NextPage = () => {
  const theme = useTheme();

  return (
    <Container marginBottom>
      <title>
        Programme 6<sup>eme</sup> Édition FADA | Juillet 2022
      </title>

      <h1>
        Programme 6<sup>eme</sup> Édition
      </h1>

      {programData.map(({ date, events }, dayIndex) => (
        <article key={date}>
          <h2>{date}</h2>
          <ul css={theme.flatList}>
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
