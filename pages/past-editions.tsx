import { css } from "@emotion/react";
import Container from "components/Container";
import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import poster1 from "public/pastEditions/1.jpg";
import poster2 from "public/pastEditions/2.jpg";
import poster3 from "public/pastEditions/3.jpg";
import poster4 from "public/pastEditions/4.jpg";
import poster5 from "public/pastEditions/5.jpg";

const PastEditions: NextPage = () => {
  const posters: StaticImageData[] = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
  ];

  const AltManager = (i: number) => `Affiche de l'édition ${i + 1}`;

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
        {posters.map((poster, index) => (
          <div
            key={index}
            css={css`
              position: relative;
              width: 100%;
              height: 100%;
            `}
          >
            <Image layout="responsive" src={poster} alt={AltManager(index)} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PastEditions;
