import { css, SerializedStyles, useTheme } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import { DeviceType } from "models/models.theme";
import Image from "next/image";

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
  const theme = useTheme();

  const Subsection: React.FC<{ children: React.ReactNode }> = (props) => (
    <div
      css={css`
        width: 100%;
        ${theme.mq.xs} {
          width: 50%;
        }
      `}
    >
      {props.children}
    </div>
  );

  return (
    <section
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        flex-direction: column;
        ${theme.mq.xs} {
          margin-bottom: 0;
          flex-direction: ${props.image.positon == "left"
            ? "row"
            : "row-reverse"};
        }
      `}
    >
      <Subsection>
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
            placeholder="blur"
          />
        </div>
      </Subsection>

      <Subsection>
        <p
          css={css`
            margin: 0;
            padding: ${theme.responsiveSpacing[DeviceType.Mobile]};
            ${theme.mq.xs} {
              padding: 2rem ${theme.responsiveSpacing[DeviceType.Desktop]};
            }
          `}
        >
          {props.textContent}
        </p>
      </Subsection>
    </section>
  );
};

export default SectionWithImage;
