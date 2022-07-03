import { css } from "@emotion/react";
import { ImageDTO } from "models/models.image";
import Image from "next/image";
import ClientOnlyPortal from "./ClientOnlyPortal";

interface ProgramModalProps {
  program: ImageDTO | null;
  handleClose: () => void;
}
const ProgramModal: React.FC<ProgramModalProps> = (props) => (
  <ClientOnlyPortal>
    {props.program && (
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2;
          overflow-y: scroll;
        `}
        onClick={props.handleClose}
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

export default ProgramModal;
