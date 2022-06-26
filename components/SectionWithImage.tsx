import { css, SerializedStyles, useTheme } from "@emotion/react";
import { Dictionary } from "models/models.gen";
import { ImageDTO } from "models/models.image";
import { DeviceType } from "models/models.theme";
import Image from "next/image";
import useDeviceType from "utils/useDeviceType";

interface SectionWithImageStylerProperties {
  container: SerializedStyles;
  contentParagraph: SerializedStyles;
}
type SectionStyler = Dictionary<DeviceType, SectionWithImageStylerProperties>;

interface SectionWithImageProps {
  image: {
    dto: ImageDTO;
    positon: "left" | "right";
    objectFit?: "contain" | "cover";
    layout?: "fill" | "responsive";
    css?: SerializedStyles;
  };
  textContent: string | React.ReactNode;
}

const SectionWithImage: React.FC<SectionWithImageProps> = (props) => {
  const deviceType = useDeviceType();
  const theme = useTheme();
  const sectionWidth = css`
    width: 100%;
    ${theme.mq.xs} {
      width: 50%;
    }
  `;

  const sectionStyler: SectionStyler = {
    [DeviceType.Mobile]: {
      container: css`
        margin-bottom: 2rem;
      `,
      contentParagraph: css`
        padding: ${theme.paddingX[deviceType]};
      `,
    },
    [DeviceType.Desktop]: {
      container: css`
        margin-bottom: 0;
      `,
      contentParagraph: css`
        padding: 2rem ${theme.paddingX[deviceType]};
      `,
    },
  };

  const ImagePositionManager = () => {
    if (deviceType == DeviceType.Mobile) return "column";
    return props.image.positon == "left" ? "row" : "row-reverse";
  };

  return (
    <section
      css={css`
        display: flex;
        flex-direction: ${ImagePositionManager()};
        align-items: center;
        ${sectionStyler[deviceType].container}
      `}
    >
      <div
        css={css`
          ${sectionWidth};
        `}
      >
        <div
          css={css`
            position: relative;
            background: ${theme.color.gray};
            height: 250px;
            ${theme.mq.xs} {
              height: ${theme.sectionHeight};
            }
            ${props.image.css}
          `}
        >
          <Image
            src={props.image.dto.src}
            alt={props.image.dto.alt}
            layout={props.image.layout || "fill"}
            objectFit={props.image.objectFit || "cover"}
          />
        </div>
      </div>
      <div css={sectionWidth}>
        <p
          css={css`
            margin: 0;
            ${sectionStyler[deviceType].contentParagraph}
          `}
        >
          {props.textContent}
        </p>
      </div>
    </section>
  );
};

export default SectionWithImage;
