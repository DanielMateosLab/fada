import { css, useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 1rem;
        margin: 0 auto;
        max-width: 960px;
        ${theme.mq.sm} {
          padding: 0 4rem;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Container;
