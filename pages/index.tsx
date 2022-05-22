import { css } from "@emotion/react";
import Container from "components/Container";
import Summary from "components/Summary";
import type { NextPage } from "next";
import Image from "next/image";
import poster from "public/fada_2021.jpg";

const Home: NextPage = () => {
  return (
    <Container
      css={css`
        margin-bottom: 2rem;
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
