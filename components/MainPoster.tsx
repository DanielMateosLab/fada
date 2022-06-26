import { css, useTheme } from "@emotion/react";
import { CurrentEditionPoster } from "models/models.image";
import { DeviceType } from "models/models.theme";
import Image from "next/image";
import useDeviceType from "utils/useDeviceType";

interface MainPosterProps {
  poster: CurrentEditionPoster;
}

const MainPoster: React.FC<MainPosterProps> = (props) => {
  const deviceType = useDeviceType(DeviceType.Mobile);
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        background: ${theme.color.background};
        ${theme.mq.xs} {
          padding-left: ${theme.paddingX[deviceType]};
        }
      `}
    >
      <Image
        src={props.poster[deviceType].src}
        alt={props.poster[deviceType].alt}
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
        priority
      />
    </div>
  );
};

export default MainPoster;
