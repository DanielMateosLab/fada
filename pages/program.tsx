import { useTheme } from "@emotion/react";
import Container from "components/Container";
import EventElement from "components/EventElement";
import type { NextPage } from "next";
import Head from "next/head";
import { programData } from "utils/data";

const Program: NextPage = () => {
  const theme = useTheme();

  return (
    <Container marginBottom>
      <Head>
        <title>Programme 2022 - FADA</title>
      </Head>

      <h1>Programme 2022</h1>

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
