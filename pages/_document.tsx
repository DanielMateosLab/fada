import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Outrevert (Les amis du Centre d'Art) et la commune de Châteauvert
        vous invitent au cinquième festival FADA: un événement annuel qui a lieu
        au mois de juillet sur le site exceptionnel du Centre d'Art
        Contemporain de Châteauvert et son jardin de sculptures et qui permet de
        découvrir des captations de spectacle, des documentaires, des fictions,
        sur l'art et les artistes du monde entier."
        />
        <meta
          name="keywords"
          content="FADA, Film Autour de L'Art, Outrevert, Châteauvert, Var, 2022, 6eme, festival,
            musique, arts plastiques, danse, littérature, poésie, historie de l'art, photographie"
        />
      </Head>
      <body>
        <div id="modal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
