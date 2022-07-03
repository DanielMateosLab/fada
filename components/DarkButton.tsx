import { css } from "@emotion/react";

interface DarkButtonProps {
  text: string;
  handleClick: () => void;
}

const DarkButton: React.FC<DarkButtonProps> = (props) => (
  <button
    css={css`
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.9);
      color: #cecece;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
      transition: all 0.1s ease-out;
      :active {
        transform: scale(1.05);
      }
    `}
    onClick={props.handleClick}
  >
    {props.text}
  </button>
);

export default DarkButton;
