import { css, useTheme } from "@emotion/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import fadaImage from "../public/fada.png";

const Home: NextPage = () => {
  const theme = useTheme();

  const column = css`
    ${theme.mq.sm} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;

  return (
    <div
      css={css`
        display: block;
        ${theme.mq.sm} {
          display: grid;
          grid-template-columns: min(50vw, 490px) 1fr;
          grid-template-rows: 100vh;
        }
      `}
    >
      <Head>
        <title>FADA - Film Autour De L&apos;art</title>
        <meta
          name="description"
          content="Festival organisé à Châteauvert dans le Var"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        css={css`
          color: white;
          border-bottom: 1px solid black;
          background-color: ${theme.color.primary};
          ${column}
          ${theme.mq.sm} {
            padding-top: 2rem;
            overflow-y: hidden;
          }
        `}
      >
        <Title />

        <div
          css={css`
            width: 100%;
          `}
        >
          <Image src={fadaImage} layout="responsive" />
        </div>
      </header>

      <main
        css={css`
          ${column}
        `}
      >
        <Container>
          <blockquote
            css={css`
              margin: 0;
              padding: 0.5rem;
              border-radius: 5px;
              font-style: italic;
            `}
          >
            Le film sur l&apos;art élargit ses perspectives, raconte les
            artistes, leurs démarches, leurs oeuvres. <br />
            Avec une programmation abordant musique, arts plastiques, danse,
            littérature, poésie, historie de l&apos;art et photographie, sous
            différents formats et formes cinématographiques le FADA se prpose
            d&apos;accroìtre la connaissance et l&apos;appréciation de
            l&apos;art, mais aussi de faire reconnaître le travail des artistes,
            ainsi que l&apos;apport des professionnel/le/s œuvrant dans les
            domaines du cinéma, de la vidéo et de la télévision.
          </blockquote>
          <figcaption>
            — Béatrice Pellegrino, co-foundatrice du festival, en 2014.
          </figcaption>
        </Container>
      </main>
    </div>
  );
};

export default Home;

const Title = () => (
  <div
    css={css`
      padding: 1rem;
    `}
  >
    <h1
      css={css`
        font-size: 4rem;
        margin: 0;
        font-weight: 900;
      `}
    >
      FADA
    </h1>

    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <span>FILM AUTOUR DE L&apos;ART. </span>
      <span>
        CHÀTEAUVERT. <b>VAR.</b>
      </span>
    </div>
  </div>
);
