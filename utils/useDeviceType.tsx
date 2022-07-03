import { Breakpoints, DeviceType } from "models/models.theme";
import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    function handleResize() {
      setDeviceType(
        window.innerWidth > Breakpoints.xs
          ? DeviceType.Desktop
          : DeviceType.Mobile
      );
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
