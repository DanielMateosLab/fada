import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => (
  <div
    css={css`
      padding: 1rem;
      margin: 0 auto;
      max-width: 960px;
    `}
  >
    {children}
  </div>
);

export default Container;
