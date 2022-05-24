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

      {programData.map(({ date }) => (
        <article key={date}>
          <h2>{date}</h2>
        </article>
      ))}
    </Container>
  );
};

export default Program;
