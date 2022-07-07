import { css, useTheme } from "@emotion/react";
import AppLink from "components/AppLink";
import type { NextPage } from "next";
import Image from "next/image";
import { DeviceType } from "models/models.theme";
import useDeviceType from "utils/useDeviceType";
import SectionWithImage from "components/SectionWithImage";
import outrevertImage from "public/outrevert.png";
import cacImage from "public/cac.jpg";
import dancerImage from "public/dancer.jpg";
import projectionImage from "public/projection.jpg";
import microphoneImage from "public/microphone.jpg";
import barImage from "public/bar.jpg";
import restaurantImage from "public/restaurant.jpg";
import Container from "components/Container";
import MainPoster from "components/MainPoster";
import Head from "next/head";

const Home: NextPage = () => {
  const theme = useTheme();
  const deviceType = useDeviceType();

  return (
    <div
      css={css`
        font-size: 1.2rem;
      `}
    >
      <Head>
        <title>
          FADA - Film Autour de L&apos;Art | Outrevert. Châteauvert, Var.
        </title>
      </Head>

      <MainPoster />

      <SectionWithImage
        image={{
          dto: {
            src: outrevertImage,
            alt: "Outrevert Logo",
          },
          positon: "left",
          layout: deviceType == DeviceType.Mobile ? "responsive" : "fill",
          objectFit: "contain",
          css: css`
            background: none;
            height: auto;
            margin: 2rem ${theme.responsiveSpacing[DeviceType.Mobile]} 1rem
              ${theme.responsiveSpacing[DeviceType.Mobile]};
            ${theme.mq.xs} {
              margin: 0 ${theme.responsiveSpacing[DeviceType.Desktop]};
            }
          `,
        }}
        textContent={
          <>
            Le Fada - festival du film autour de l&apos;art - a été créé en 2015
            par l&apos;association des amis du centre d&apos;art de Châteauvert
            récemment rebaptisée Outrevert.
          </>
        }
      />

      <div
        css={css`
          position: relative;
          width: 100%;
          height: 70vh;
        `}
      >
        <Image
          src={cacImage}
          alt="Centre d'art de Châteauvert"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          placeholder="blur"
        />
      </div>

      <div
        css={css`
          padding: 2rem 0;
          text-align: center;
        `}
      >
        <h2
          css={css`
            color: ${theme.color.typography};
            margin: 0;
          `}
        >
          FADA 2022
        </h2>
        <h3
          css={css`
            font-size: 1.2rem;
            margin: 0;
          `}
        >
          22 au 24 juillet
        </h3>
      </div>

      <Container>
        <p
          css={css`
            margin: 0;
            margin-bottom: 2rem;
          `}
        >
          Avec une programmation abordant différents champs de l&apos;art sous
          des formats et des formes cinématographiques variées, la 6ème édition
          du FADA se propose d&apos;accroître la connaissance et
          l&apos;appréciation de l&apos;art, également de faire reconnaître le
          travail des artistes et des professionnels œuvrant dans le domaine du
          cinéma, de la vidéo et de la télévision.
        </p>
      </Container>

      <SectionWithImage
        image={{
          dto: {
            src: dancerImage,
            alt: "ballerine à l'écran",
          },
          positon: "right",
        }}
        textContent={
          <>
            Projection de films [fictions ou documentaires, courts, moyens et
            longs métrages]. La programmation du dimanche 24 juillet est en lien
            avec l&apos;exposition de Léna Durr au Centre d&apos;art, son court
            métrage sera présenté ce même jour.
          </>
        }
      />
      <SectionWithImage
        image={{
          dto: {
            src: projectionImage,
            alt: "projection",
          },
          positon: "left",
        }}
        textContent={
          <>
            Afin de participer à l&apos;éducation artistique et culturelle, un
            film est consacré au jeune public, [public familial et enfants des
            Centres de loisir], sur une séance en début d&apos;après-midi.
          </>
        }
      />
      <SectionWithImage
        image={{
          dto: {
            src: microphoneImage,
            alt: "réalisateur",
          },
          positon: "right",
        }}
        textContent={
          <>
            Intervention de réalisateurs-trices, ou professionnels-les du
            cinéma.
          </>
        }
      />
      <SectionWithImage
        image={{
          dto: {
            src: restaurantImage,
            alt: "restaurant",
          },
          positon: "left",
        }}
        textContent={
          <>
            Restauration le soir, réservation indispensable au{" "}
            <AppLink href={`tel:06 32 06 41 67`}>06 32 06 41 67</AppLink>.
          </>
        }
      />
      <SectionWithImage
        image={{
          dto: {
            src: barImage,
            alt: "Outrevert le bar",
          },
          positon: "right",
        }}
        textContent={
          <>
            Bar et boutique temporaire d&apos;artisanat d&apos;artistes. Ouverts
            pendant la durée du Festival, de 14h à 24h.
          </>
        }
      />
    </div>
  );
};

export default Home;
