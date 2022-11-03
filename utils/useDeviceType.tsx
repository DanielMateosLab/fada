import { Breakpoints, DeviceType } from "models/models.theme";
import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const xsMediaQuery = window.matchMedia(`(min-width: ${Breakpoints.xs}px)`);
    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setDeviceType(e.matches ? DeviceType.Desktop : DeviceType.Mobile);
    xsMediaQuery.addEventListener("change", handleMediaChange);

    handleMediaChange(xsMediaQuery);

    return () => {
      xsMediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
