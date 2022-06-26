import { css, SerializedStyles, useTheme } from "@emotion/react";
import { Dictionary } from "models/models.gen";
import { ImageDTO } from "models/models.image";
import { DeviceType, ResponsiveStyler } from "models/models.theme";
import Image from "next/image";
import useDeviceType from "utils/useDeviceType";

enum SectionWithImageStylerProperties {
  Subsection = "Subsection",
  Container = "Container",
  ContentParagraph = "ContentParagraph",
}

type SectionStyler = Dictionary<
  SectionWithImageStylerProperties,
  ResponsiveStyler
>;

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
  const sectionStyler: SectionStyler = {
    Container: {
      base: css`
        display: flex;
        align-items: center;
      `,
      responsive: {
        [DeviceType.Mobile]: css`
          margin-bottom: 2rem;
          flex-direction: column;
        `,
        [DeviceType.Desktop]: css`
          margin-bottom: 0;
          flex-direction: ${props.image.positon == "left"
            ? "row"
            : "row-reverse"};
        `,
      },
    },
    ContentParagraph: {
      base: css`
        margin: 0;
      `,
      responsive: {
        [DeviceType.Mobile]: css`
          padding: ${theme.paddingX[deviceType]};
        `,
        [DeviceType.Desktop]: css`
          padding: 2rem ${theme.paddingX[deviceType]};
        `,
      },
    },
    Subsection: {
      responsive: {
        [DeviceType.Mobile]: css`
          width: 100%;
        `,
        [DeviceType.Desktop]: css`
          width: 50%;
        `,
      },
    },
  };
  const Subsection: React.FC<{ children: React.ReactNode }> = (props) => (
    <div css={sectionStyler.Subsection.responsive[deviceType]}>
      {props.children}
    </div>
  );

  return (
    <section
      css={[
        sectionStyler.Container.base,
        sectionStyler.Container.responsive[deviceType],
      ]}
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
          css={[
            sectionStyler.ContentParagraph.base,
            sectionStyler.ContentParagraph.responsive[deviceType],
          ]}
        >
          {props.textContent}
        </p>
      </Subsection>
    </section>
  );
};

export default SectionWithImage;
