import { ReactNode } from "react";
import { StartScreen } from "./StartScreen";
import { BackGround } from "./BackGround";

export const ScreenView = ({
  children,
  screenOn,
}: {
  children: ReactNode;
  screenOn: boolean;
}) => {
  return (
    <>
      {(screenOn && <>{children}</>) || (
        <BackGround>
          {" "}
          <StartScreen />
        </BackGround>
      )}
    </>
  );
};
