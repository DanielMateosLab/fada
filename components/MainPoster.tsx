import { css, useTheme } from "@emotion/react";
import { Dictionary } from "models/models.gen";
import { DeviceType } from "models/models.theme";
import Image, { StaticImageData } from "next/image";
import useDeviceType from "utils/useDeviceType";
import fadaDesktop from "public/fada_desktop.jpg";
import fadaMobile from "public/fada_mobile.jpg";

interface MainPosterProperties {
  src: StaticImageData;
  heightK: number;
}

const MainPosterStyler: Dictionary<DeviceType, MainPosterProperties> = {
  [DeviceType.Mobile]: {
    src: fadaMobile,
    heightK: 1.5,
  },
  [DeviceType.Desktop]: {
    src: fadaDesktop,
    heightK: 0.48899468709031946,
  },
};

const MainPoster: React.FC = () => {
  const deviceType = useDeviceType();
  const theme = useTheme();

  return (
    <div
      css={css`
        max-width: 100%;
        width: 100vw;
        height: calc(100vw * ${MainPosterStyler.Mobile.heightK});
        background: ${theme.color.background};
        ${theme.mq.xs} {
          height: calc(100vw * ${MainPosterStyler.Desktop.heightK});
          padding-left: ${theme.responsiveSpacing.Desktop};
        }
      `}
    >
      {
        <div
          css={css`
            width: 100%;
            height: 100%;
            position: relative;
            visibility: ${deviceType ? "visible" : "hidden"};
          `}
        >
          {deviceType && (
            <Image
              src={MainPosterStyler[deviceType].src}
              alt="FADA Affiche 2022"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              placeholder="blur"
              priority
            />
          )}
        </div>
      }
    </div>
  );
};

export default MainPoster;
