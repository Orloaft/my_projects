import { Footer } from "../Footer";
import { HeroView } from "../Hero";

import Image from "next/image";

export const Orbit = (props: any) => {
  return (
    <div className="orbit">
      <ul className="orbit-wrap">
        <li className="orbit-center">
          <Footer {...props} />
          <Image
            style={{ borderRadius: "15%" }}
            objectFit="contain"
            src="/images/pixelAvatar.png"
            alt="Picture of the author"
            width={110}
            height={125}
          />
        </li>
        {/* <div className="giant-text">
          <span>Alex</span> <span>Orlow</span>
        </div> */}
        <div className="hero-text">
          <HeroView />
        </div>

        <li>
          <ul className="ring-0">
            <li>
              <div
                style={{ boxShadow: " 0 0 10px blue" }}
                className="project-icon"
              >
                Jambo
              </div>
            </li>
            <li></li>
            <li>
              {" "}
              <div
                style={{ boxShadow: " 0 0 10px green" }}
                className="project-icon"
              >
                Quander Dome
              </div>
            </li>
            <li>
              <div
                style={{ boxShadow: " 0 0 10px purple" }}
                className="project-icon"
              >
                Web Eyes
              </div>
            </li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li>
              <div
                style={{ boxShadow: " 0 0 10px red" }}
                className="project-icon"
              >
                Mnemo
              </div>
            </li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li>
              <div
                style={{ boxShadow: " 0 0 10px white" }}
                className="project-icon"
              >
                GPT-Autodoc
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <div
                style={{ boxShadow: " 0 0 10px yellow" }}
                className="project-icon"
              >
                Space Dice
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
