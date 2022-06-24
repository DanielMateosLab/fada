import { css, useTheme } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import Image from "next/image";
import useDeviceType from "utils/useDeviceType";

interface SectionWithImageProps {
  image: {
    dto: ImageDTO;
    positon: "left" | "right";
    objectFit?: "contain" | "cover";
  };
  textContent: string | React.ReactNode;
}

const SectionWithImage: React.FC<SectionWithImageProps> = (props) => {
  const deviceType = useDeviceType();
  const theme = useTheme();
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
            position: relative;
            height: ${theme.sectionHeight};
          `}
        >
          <Image
            src={props.image.dto.src}
            alt={props.image.dto.alt}
            layout="fill"
            objectFit={props.image.objectFit || "cover"}
          />
        </div>
      </div>
      <div css={halfWidth}>
        <p
          css={css`
            margin: 0;
            padding: 2rem ${theme.paddingX[deviceType]};
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
