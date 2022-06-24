import { css, useTheme } from "@emotion/react";
import AppLink from "components/AppLink";
import type { NextPage } from "next";
import Image from "next/image";
import { CurrentEditionPoster } from "models/models.image";
import { DeviceType } from "models/models.device";
import useDeviceType from "utils/useWindowSize";
import fadaDesktop from "public/fada_desktop.jpg";
import fadaMobile from "public/fada_mobile.jpg";

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
        font-size: 20px;
      `}
    >
      <title>
        FADA - Film Autour de L&apos;Art | Outrevert. Châteauvert, Var.
      </title>

      <div
        css={css`
          width: 100%;
          background: ${theme.color.primary};
        `}
      >
        <Image
          src={poster[deviceType].src}
          alt={poster[deviceType].alt}
          layout="responsive"
        />
      </div>
      <h1>Film Autour de L&apos;Art</h1>
      <p>
        Le Fada - festival du film autour de l&apos;art - a été créé en 2015 par
        l&apos;association des amis du centre d&apos;art de Châteauvert
        récemment rebaptisée Outrevert.
      </p>

      <h2
        css={css`
          color: ${theme.color.primary};
          margin: 0;
        `}
      >
        Argument
      </h2>

      <p>
        Avec une programmation abordant différents champs de l&apos;art sous des
        formats et des formes cinématographiques variées, la 6ème édition du
        FADA se propose d&apos;accroître la connaissance et l&apos;appréciation
        de l&apos;art, également de faire reconnaître le travail des artistes et
        des professionnels œuvrant dans le domaine du cinéma, de la vidéo et de
        la télévision.
      </p>

      <ul
        css={css`
          li:not(:last-child) {
            margin-bottom: 0.5rem;
          }
        `}
      >
        <li>
          Projection de films [fictions ou documentaires, courts, moyens et
          longs métrages]. La programmation du dimanche 24 juillet est en lien
          avec l&apos;exposition de Léna Durr au Centre d&apos;art, son court
          métrage sera présenté ce même jour.
        </li>
        <li>
          Afin de participer à l&apos;éducation artistique et culturelle, un
          film est consacré au jeune public, [public familial et enfants des
          Centres de loisir], sur une séance en début d&apos;après-midi.
        </li>
        <li>
          Intervention de réalisateurs-trices, ou professionnels-les du cinéma.
        </li>
        <li>
          Restauration le soir, réservation indispensable au{" "}
          <AppLink href={`tel:06 32 06 41 67`}>06 32 06 41 67</AppLink>.
        </li>
        <li>
          Bar et boutique temporaire d&apos;artisanat d&apos;artistes. Ouverts
          pendant la durée du Festival, de 14h à 24h.
        </li>
      </ul>
    </div>
  );
};

export default Home;
