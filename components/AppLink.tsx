import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import { AnchorHTMLAttributes, ClassAttributes } from "react";

type Props = ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    css?: Interpolation<Theme>;
  };
const AppLink: React.FC<Props> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <a
      css={css`
        text-decoration-line: none;
        color: ${theme.color.typography};
        &:hover,
        &:focus,
        &:active {
          text-decoration-line: underline;
        }
      `}
      {...props}
    >
      {children}
    </a>
  );
};

export default AppLink;
