import { css, useTheme } from "@emotion/react";
import AppLink from "components/AppLink";
import type { NextPage } from "next";
import Image from "next/image";
import { CurrentEditionPoster } from "models/models.image";
import { DeviceType } from "models/models.theme";
import useDeviceType from "utils/useDeviceType";
import SectionWithImage from "components/SectionWithImage";
import fadaDesktop from "public/fada_desktop.jpg";
import fadaMobile from "public/fada_mobile.jpg";
import outrevertImage from "public/outrevert.jpg";
import cacImage from "public/cac.jpg";
import dancerImage from "public/dancer.jpg";
import childrenImage from "public/children.jpg";
import microphoneImage from "public/microphone.jpg";
import barImage from "public/bar.jpg";
import restaurantImage from "public/restaurant.jpg";
import Container from "components/Container";
import MainPoster from "components/MainPoster";

const Home: NextPage = () => {
  const poster: CurrentEditionPoster = {
    [DeviceType.Desktop]: {
      src: fadaDesktop,
      alt: "FADA Affiche 2022",
    },
    [DeviceType.Mobile]: {
      src: fadaMobile,
      alt: "FADA Affiche 2022",
    },
  };
  const theme = useTheme();
  const deviceType = useDeviceType();

  return (
    <div
      css={css`
        font-size: 1.2rem;
      `}
    >
      <title>
        FADA - Film Autour de L&apos;Art | Outrevert. Châteauvert, Var.
      </title>
      <MainPoster poster={poster} />
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
            margin: 0 ${theme.paddingX[deviceType]};
            background: none;
            height: ${deviceType == DeviceType.Mobile ? "auto" : "250px"};
            margin-top: ${deviceType == DeviceType.Mobile ? "2rem" : "0"};
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
          height: 700px;
          ${theme.mq.xs} {
            height: ${theme.sectionHeight};
          }
        `}
      >
        <div
          css={css`
            width: 100%;
            height: 100%;
            background: lightgray;
            position: relative;
          `}
        >
          <Image
            src={cacImage}
            alt="Centre d'art de Châteauvert"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div
          css={css`
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
          `}
        >
          <Container>
            <p
              css={css`
                color: white;
                padding: 2rem;
                background: rgba(0, 0, 0, 0.66);
                backdrop-filter: blur(2px);
                text-shadow: 0px 1px 2px black, 0px -1px 2px black;
              `}
            >
              Avec une programmation abordant différents champs de l&apos;art
              sous des formats et des formes cinématographiques variées, la 6ème
              édition du FADA se propose d&apos;accroître la connaissance et
              l&apos;appréciation de l&apos;art, également de faire reconnaître
              le travail des artistes et des professionnels œuvrant dans le
              domaine du cinéma, de la vidéo et de la télévision.
            </p>
          </Container>
        </div>
      </div>
      <h2
        css={css`
          color: ${theme.color.typography};
          text-align: center;
        `}
      >
        Cette année à la FADA
      </h2>

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
            src: childrenImage,
            alt: "des gamins",
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
            alt: "microphone",
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
