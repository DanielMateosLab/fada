import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const ClientOnlyPortal: React.FC<PortalProps> = ({ children }) => {
  const ref = useRef<Element>();

  useEffect(() => {
    ref.current = document.querySelector("#modal")!;
  }, []);

  return ref.current ? createPortal(children, ref.current) : null;
};

export default ClientOnlyPortal;
