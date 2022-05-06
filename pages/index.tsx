import { css } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import fadaImage from "../public/fada.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FADA - Film Autour De L'art</title>
        <meta
          name="description"
          content="Festival organisé à Châteauvert dans le Var"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <header>
          <span>
            FILM <br /> AUTOUR <br /> DE L'ART
          </span>
          <h1
            css={css`
              font-size: 4rem;
              margin: 0;
              font-weight: 900;
            `}
          >
            FADA
          </h1>
          <span>CHÀTEAUVERT. VAR.</span>
        </header>
        <div>
          <Image src={fadaImage}></Image>
        </div>
      </Container>
    </div>
  );
};

export default Home;
