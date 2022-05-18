import { css } from "@emotion/react";

export default function Summary() {
  return (
    <div>
      <blockquote
        css={css`
          margin: 0;
          padding: 0.5rem;
          border-radius: 5px;
          font-style: italic;
        `}
      >
        Le film sur l&apos;art élargit ses perspectives, raconte les artistes,
        leurs démarches, leurs oeuvres. <br />
        Avec une programmation abordant musique, arts plastiques, danse,
        littérature, poésie, historie de l&apos;art et photographie, sous
        différents formats et formes cinématographiques le FADA se prpose
        d&apos;accroìtre la connaissance et l&apos;appréciation de l&apos;art,
        mais aussi de faire reconnaître le travail des artistes, ainsi que
        l&apos;apport des professionnel/le/s œuvrant dans les domaines du
        cinéma, de la vidéo et de la télévision.
      </blockquote>
      <figcaption>
        — Béatrice Pellegrino, co-foundatrice du festival, en 2014.
      </figcaption>
    </div>
  );
}
