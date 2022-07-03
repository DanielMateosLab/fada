import { css } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import Image from "next/image";
import { useEffect } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";

interface ProgramModalProps {
  program: ImageDTO | null;
  handleClose: () => void;
}
const ProgramModal: React.FC<ProgramModalProps> = (props) => {
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
          `}
        >
          <div
            css={css`
              width: 60%;
              margin: auto;
            `}
          >
            <Image
              src={props.program.src}
              alt={props.program.alt}
              layout="responsive"
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
