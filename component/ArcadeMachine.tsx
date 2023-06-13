import React, { ReactNode, useState } from "react";
import { ArcadeButton } from "./ArcadeButton/ArcadeButton";
import { ScreenView } from "./ScreenView";
import SwitcherTV from "./TvSwitcher";

interface ArcadeMachineProps {
  children: ReactNode;
}

function ArcadeMachine({ children }: ArcadeMachineProps) {
  const [screenOn, setScreenOn] = useState(false);

  return (
    <div className="arcade-machine">
      <div className="arcade-machine__screen">
        <SwitcherTV>
          {" "}
          <ScreenView screenOn={screenOn}>{children}</ScreenView>{" "}
        </SwitcherTV>
      </div>
      <div className="arcade-machine__controls">
        <button id="switcher-tv" className="push--skeuo power "></button>{" "}
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
