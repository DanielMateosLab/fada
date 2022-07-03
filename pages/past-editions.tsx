import { css, useTheme } from "@emotion/react";
import Container from "components/Container";
import DarkButton from "components/DarkButton";
import type { NextPage } from "next";
import Image from "next/image";
import { pastEditions } from "utils/data";

const PastEditions: NextPage = () => {
  const theme = useTheme();

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
          objectFit="contain"
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
            <DarkButton text="Voir programme" handleClick={() => {}} />
          </div>
        )}
      </div>
    ));

  return (
    <Container marginBottom>
      <title>Éditions Passées</title>

      <h1>Éditions Passées</h1>

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
  );
};

export default PastEditions;
