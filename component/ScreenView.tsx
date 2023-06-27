import { ReactNode } from "react";
import { StartScreen } from "./StartScreen";
import { BackGround } from "./BackGround";

export const ScreenView = ({
  children,
  selectedProject,
}: {
  children: ReactNode;
  selectedProject: any;
}) => {
  return (
    <>
      {(selectedProject !== null && <>{children}</>) || (
        <BackGround>
          {" "}
          <StartScreen />
        </BackGround>
      )}
    </>
  );
};
