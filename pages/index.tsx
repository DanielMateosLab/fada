import { css } from "@emotion/react";
import Container from "components/Container";
import Summary from "components/Summary";
import type { NextPage } from "next";
import Image from "next/image";
import poster from "public/fada_2021.jpg";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Film Autour de L&apos;Art</h1>
      <div
        css={css`
          display: grid;
          grid-template-columns: calc(70vh * 2 / 3) 1fr;
          gap: 1rem;
        `}
      >
        <div>
          <Image src={poster} alt="L'affiche du FADA" />
        </div>
        <Summary />
      </div>
    </Container>
  );
};

export default Home;
