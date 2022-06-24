import { DeviceType } from "models/models.device";
import { useEffect, useState } from "react";
import { Breakpoints, breakpoints } from "styles/theme";

const useDeviceType = (): DeviceType => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width > breakpoints[Breakpoints.xs]
    ? DeviceType.Desktop
    : DeviceType.Mobile;
};

export default useDeviceType;
