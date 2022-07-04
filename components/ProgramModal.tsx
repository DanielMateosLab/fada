import { css, useTheme } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import Image from "next/image";
import { useEffect } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import CloseButton from "./CloseButton";

interface ProgramModalProps {
  program: ImageDTO | null;
  handleClose: () => void;
}
const ProgramModal: React.FC<ProgramModalProps> = (props) => {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflow = props.program ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [props.program]);

  return (
    <ClientOnlyPortal>
      {props.program && (
        <div
          css={css`
            position: fixed;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 2;
            overflow-y: scroll;
            display: flex;
            align-items: center;
            justify-content: center;
            ${theme.mq.xs} {
              align-items: flex-start;
            }
          `}
          onClick={props.handleClose}
        >
          <div
            css={css`
              position: fixed;
              top: 0;
              right: 0;
              ${theme.mq.xs} {
                top: 2rem;
                right: 2rem;
              }
            `}
          >
            <CloseButton handleClose={props.handleClose} />
          </div>

          <div
            css={css`
              max-width: calc(100% - ${theme.responsiveSpacing.Desktop} * 2);
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={props.program.src}
              alt={props.program.alt}
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </div>
      )}
    </ClientOnlyPortal>
  );
};

export default ProgramModal;
