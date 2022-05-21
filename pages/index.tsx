import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import poster from "public/fada_2021.jpg";

const Home: NextPage = () => {
  return (
    <div>
      <div
        css={css`
          width: calc(70vh * 2 / 3);
        `}
      >
        <Image src={poster} alt="L'affiche du FADA" />
      </div>
    </div>
  );
};

export default Home;
