import { css, SerializedStyles } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import Image from "next/image";

interface SectionWithImageProps {
  image: {
    dto: ImageDTO;
    positon: "left" | "right";
    css?: SerializedStyles;
  };
  textContent: string | React.ReactNode;
}

const SectionWithImage: React.FC<SectionWithImageProps> = (props) => {
  const halfWidth = css`
    width: 50%;
  `;

  const ImagePositionManager = () =>
    props.image.positon == "left" ? "row" : "row-reverse";

  return (
    <section
      css={css`
        display: flex;
        flex-direction: ${ImagePositionManager()};
        align-items: center;
      `}
    >
      <div
        css={css`
          ${halfWidth};
        `}
      >
        <div
          css={css`
            ${props.image.css}
          `}
        >
          <Image
            src={props.image.dto.src}
            alt={props.image.dto.alt}
            layout="responsive"
          />
        </div>
      </div>
      <div css={halfWidth}>
        <p
          css={css`
            margin: 0;
            padding: 2rem;
            font-size: 1.5rem;
          `}
        >
          {props.textContent}
        </p>
      </div>
    </section>
  );
};

export default SectionWithImage;
