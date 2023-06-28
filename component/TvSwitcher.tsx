import React, { ReactNode, useEffect, useRef } from "react";
import { TimelineMax, Power2 } from "gsap";
interface SwitcherProps {
  children: ReactNode;
  screenRef: any;
  selectedProject: number;
}
const SwitcherTV: React.FC<SwitcherProps> = ({
  children,
  screenRef,
  selectedProject,
}) => {
  return (
    <div className="switcher-tv">
      <div
        ref={screenRef}
        className="screen"
        style={{ background: selectedProject ? `black` : `#030e4f` }}
      >
        {children}
      </div>
    </div>
  );
};

export default SwitcherTV;
