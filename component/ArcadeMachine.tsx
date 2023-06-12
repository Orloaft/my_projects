import React, { ReactNode } from "react";

interface ArcadeMachineProps {
  children: ReactNode;
}

function ArcadeMachine({ children }: ArcadeMachineProps) {
  return (
    <div className="arcade-machine">
      <div className="arcade-machine__screen">
        <>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
          {children}
        </>
      </div>
      <div className="arcade-machine__controls">
        <div className="arcade-machine__joystick" />
        <div className="arcade-machine__buttons">
          <button className="arcade-machine__button" />
          <button className="arcade-machine__button" />
          <button className="arcade-machine__button" />
        </div>
      </div>
    </div>
  );
}

export default ArcadeMachine;
