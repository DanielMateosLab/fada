import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FADA - Film Autour De L'art</title>
        <meta
          name="description"
          content="Festival organisé à Châteauvert dans le Var"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <head>
          <h1>FADA</h1>
        </head>
      </Container>
    </div>
  );
};

export default Home;
