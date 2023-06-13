import React, { ReactNode, useEffect, useRef } from "react";
import { TimelineMax, Power2 } from "gsap";
interface SwitcherProps {
  children: ReactNode;
}
const SwitcherTV: React.FC<SwitcherProps> = ({ children }) => {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<TimelineMax | null>(null);
  let isTurnedOn = true;

  const buildTimeline = () => {
    timelineRef.current = new TimelineMax({
      paused: true,
    });

    timelineRef.current
      .to(screenRef.current, 0.2, {
        width: "100vw",
        height: "2px",
        background: "#ffffff",
        ease: Power2.easeOut,
      })
      .to(screenRef.current, 0.2, {
        width: "0",
        height: "0",
        background: "#ffffff",
      });
  };

  const toggleSwitcherTV = () => {
    if (isTurnedOn) {
      timelineRef.current?.reverse();
    }

    if (!isTurnedOn) {
      timelineRef.current?.restart();
    }

    isTurnedOn = !isTurnedOn;
  };

  useEffect(() => {
    buildTimeline();

    // Bindings
    const switcherTV = document.querySelector("#switcher-tv");
    switcherTV?.addEventListener("click", toggleSwitcherTV);

    return () => {
      switcherTV?.removeEventListener("click", toggleSwitcherTV);
    };
  }, []);

  return (
    <div className="switcher-tv">
      <div ref={screenRef} className="screen">
        {children}
      </div>
    </div>
  );
};

export default SwitcherTV;
