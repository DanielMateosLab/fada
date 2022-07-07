import { css, useTheme } from "@emotion/react";
import Container from "components/Container";
import DarkButton from "components/DarkButton";
import ProgramModal from "components/ProgramModal";
import { ImageDTO } from "models/models.image";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { pastEditions } from "utils/data";

const PastEditions: NextPage = () => {
  const theme = useTheme();
  const [selectedProgram, setSelectedProgram] = useState<ImageDTO | null>(null);

  const PastEditionsManager = () =>
    pastEditions.map((edition) => (
      <div
        tabIndex={0}
        key={edition.poster.alt}
        css={css`
          outline: 0;
          position: relative;
          ${theme.mq.xs} {
            & button {
              display: none;
            }
            &:hover button,
            &:active button,
            &:focus button {
              display: block;
            }
          }
        `}
      >
        <Image
          layout="responsive"
          src={edition.poster.src}
          alt={edition.poster.alt}
          placeholder="blur"
        />
        {edition.programme && (
          <div
            css={css`
              position: absolute;
              width: 100%;
              left: 0;
              bottom: 0.5rem;
              display: grid;
              place-items: center;
            `}
          >
            <DarkButton
              text="Voir programme"
              handleClick={() => setSelectedProgram(edition.programme || null)}
            />
          </div>
        )}
      </div>
    ));

  return (
    <>
      <Container marginBottom>
        <Head>
          <title>Éditions Passées - FADA</title>
        </Head>

        <h1>Éditions Passées</h1>

        <p
          css={css`
            font-style: italic;
          `}
        >
          Pour accéder aux programmes des années passées, cliquez en bas des
          affiches. (L&apos;année 2015 ne comporte pas de programme).
        </p>

        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          `}
        >
          {PastEditionsManager()}
        </div>
      </Container>

      <ProgramModal
        program={selectedProgram}
        handleClose={() => setSelectedProgram(null)}
      />
    </>
  );
};

export default PastEditions;
