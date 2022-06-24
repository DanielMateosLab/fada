import { css, Interpolation, Theme, useTheme } from "@emotion/react";
import useDeviceType from "utils/useDeviceType";

interface Props {
  children: React.ReactNode;
  css?: Interpolation<Theme>;
  marginBottom?: boolean;
}
const Container: React.FC<Props> = ({ children, marginBottom, ...props }) => {
  const deviceType = useDeviceType();
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 0 ${theme.paddingX[deviceType]};
        margin: 0 auto;
        margin-bottom: ${marginBottom ? "4rem" : 0};
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
