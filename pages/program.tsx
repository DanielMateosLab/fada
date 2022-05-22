import { css } from "@emotion/react";
import Container from "components/Container";
import type { NextPage } from "next";

const Program: NextPage = () => {
  return (
    <Container
      css={css`
        margin-bottom: 2rem;
      `}
    >
      <h1>
        Programme 5<sup>e</sup> Édition
      </h1>
    </Container>
  );
};

export default Program;
