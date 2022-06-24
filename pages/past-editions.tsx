import { css } from "@emotion/react";
import Container from "components/Container";
import { ImageDTO } from "models/models.image";
import type { NextPage } from "next";
import Image from "next/image";
import poster1 from "public/pastEditions/1.jpg";
import poster2 from "public/pastEditions/2.jpg";
import poster3 from "public/pastEditions/3.jpg";
import poster4 from "public/pastEditions/4.jpg";
import poster5 from "public/pastEditions/5.jpg";

const PastEditions: NextPage = () => {
  const pastEditions: ImageDTO[] = [
    {
      src: poster1,
      alt: "Affiche de l'édition 1 - 2015",
    },
    {
      src: poster2,
      alt: "Affiche de l'édition 2 - 2016",
    },
    {
      src: poster3,
      alt: "Affiche de l'édition 3 - 2017",
    },
    {
      src: poster4,
      alt: "Affiche de l'édition 4 - 2018",
    },
    {
      src: poster5,
      alt: "Affiche de l'édition 5 - 2021",
    },
  ];

  const PastEditionsManager = () =>
    pastEditions.map((edition) => (
      <div
        key={edition.alt}
        css={css`
          position: relative;
          width: 100%;
          height: 100%;
        `}
      >
        <Image layout="responsive" src={edition.src} alt={edition.alt} />
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
