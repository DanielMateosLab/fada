import { css } from "@emotion/react";

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = (props) => (
  <span
    css={css`
      color: white;
      font-weight: bold;
    `}
  >
    {props.text}
  </span>
);

export default Title;
