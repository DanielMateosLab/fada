import { Breakpoints, DeviceType } from "models/models.theme";
import { useEffect, useState } from "react";

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

  return width > Breakpoints.xs ? DeviceType.Desktop : DeviceType.Mobile;
};

export default useDeviceType;
