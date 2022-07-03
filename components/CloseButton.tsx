import { css } from "@emotion/react";

interface CloseButtonProps {
  handleClose: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = (props) => (
  <div
    onClick={props.handleClose}
    css={css`
      cursor: pointer;
      padding: 0.5rem;
    `}
  >
    <div
      role="button"
      css={css`
        position: relative;
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        &::before,
        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: 2px;
          background-color: white;
          transform: rotate(45deg);
        }
        &::before {
          transform: rotate(-45deg);
        }
      `}
    ></div>
  </div>
);

export default CloseButton;
