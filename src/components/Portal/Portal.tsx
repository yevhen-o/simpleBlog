import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export const Portal: React.FC<PortalProps> = ({ children }) => {
  return createPortal(children, document.body);
};
