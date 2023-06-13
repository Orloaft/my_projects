import React, { ReactNode, useEffect, useRef } from "react";
import { TimelineMax, Power2 } from "gsap";
interface SwitcherProps {
  children: ReactNode;
  screenRef: any;
}
const SwitcherTV: React.FC<SwitcherProps> = ({ children, screenRef }) => {
  return (
    <div className="switcher-tv">
      <div ref={screenRef} className="screen">
        {children}
      </div>
    </div>
  );
};

export default SwitcherTV;
