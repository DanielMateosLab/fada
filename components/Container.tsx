import { css, Interpolation, Theme, useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
  css?: Interpolation<Theme>;
}
const Container: React.FC<Props> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 0 1rem;
        margin: 0 auto;
        ${theme.mq.sm} {
          width: calc(100vw * 5 / 6);
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
