import React, { ReactNode, useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import { ScreenView } from "./ScreenView";
import SwitcherTV from "./TvSwitcher";

interface ArcadeMachineProps {
  children: ReactNode;
}

function ArcadeMachine({ children }: ArcadeMachineProps) {
  const [screenOn, setScreenOn] = useState(false);
  const screenRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<any | null>(null);
  let isTurnedOn = true;

  const buildTimeline = () => {
    timelineRef.current = gsap.timeline({ paused: true });

    timelineRef.current
      .to(screenRef.current, {
        duration: 0.2,
        width: "100vw",
        height: "2px",
        background: "#ffffff",
        ease: Power2.easeOut,
      })
      .to(screenRef.current, {
        duration: 0.2,
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
  }, []);
  return (
    <div className="arcade-machine">
      <div className="arcade-machine__screen">
        <SwitcherTV screenRef={screenRef}>
          {" "}
          <ScreenView screenOn={screenOn}>{children}</ScreenView>{" "}
        </SwitcherTV>
      </div>
      <div className="arcade-machine__controls">
        <button
          onClick={toggleSwitcherTV}
          className="push--skeuo power "
        ></button>{" "}
        <button
          onClick={() => {
            setScreenOn(!screenOn);
          }}
          className="push--skeuo next"
        >
          {" "}
        </button>
      </div>
    </div>
  );
}

export default ArcadeMachine;
