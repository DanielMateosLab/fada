import { css, useTheme } from "@emotion/react";
import Container from "components/Container";
import type { NextPage } from "next";
import Image from "next/image";
import poster from "public/fada_2021.jpg";

const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Container
      marginBottom
      css={css`
        font-size: 20px;
      `}
    >
      <h1>Film Autour de L&apos;Art</h1>
      <p>
        Outrevert (Les amis du Centre d&apos;Art) et la commune de Châteauvert
        vous invitent au cinquième festival FADA: un événement annuel qui a lieu
        au mois de juillet sur le site exceptionnel du Centre d&apos;Art
        Contemporain de Châteauvert et son jardin de sculptures et qui permet de
        découvrir des captations de spectacle, des documentaires, des fictions,
        sur l&apos;art et les artistes du monde entier.
      </p>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          ${theme.mq.md} {
            display: grid;
            grid-template-columns: calc(70vh * 2 / 3) 1fr;
            gap: 1rem;
          }
        `}
      >
        <div>
          <Image src={poster} alt="L'affiche du FADA" />
        </div>

        <div>
          <blockquote
            css={css`
              margin: 0;
              margin-bottom: 0.5rem;
              font-style: italic;
            `}
          >
            Le film sur l&apos;art élargit ses perspectives, raconte les
            artistes, leurs démarches, leurs oeuvres. <br />
            Avec une programmation abordant musique, arts plastiques, danse,
            littérature, poésie, historie de l&apos;art et photographie, sous
            différents formats et formes cinématographiques le FADA se propose
            d&apos;accroître la connaissance et l&apos;appréciation de
            l&apos;art, mais aussi de faire reconnaître le travail des artistes,
            ainsi que l&apos;apport des professionnel/le/s œuvrant dans les
            domaines du cinéma, de la vidéo et de la télévision.
          </blockquote>

          <figcaption>
            — Béatrice Pellegrino, co-fondatrice du festival.
          </figcaption>
        </div>
      </div>
    </Container>
  );
};

export default Home;
