import { Breakpoints, DeviceType } from "models/models.theme";
import { useEffect, useState } from "react";

const useDeviceType = (
  defaultDeviceType: DeviceType = DeviceType.Mobile
): DeviceType => {
  const initialWidth =
    defaultDeviceType == DeviceType.Desktop
      ? Breakpoints.sm + 1
      : Breakpoints.xs - 1;
  const [width, setWidth] = useState(initialWidth);

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
