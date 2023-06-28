import { Footer } from "../Footer";
import { HeroView } from "../Hero";

import Image from "next/image";

export const Orbit = (props: any) => {
  return (
    <>
      {" "}
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
            <HeroView
              text={`My name is Alex. \nI am a lover of games and web technologies.
          I invite you to browse my existing projects or click on the mail icon
          to get in touch.`}
            />
          </div>

          <li>
            <ul className="ring-0">
              <li>
                <a
                  href="https://orloaft.itch.io/jambo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    style={{ boxShadow: " 0 0 10px blue" }}
                    className="project-icon"
                  >
                    Jambo
                  </div>
                </a>
              </li>
              <li></li>
              <li>
                <a
                  href="https://quanderdome.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div
                    style={{ boxShadow: " 0 0 10px green" }}
                    className="project-icon"
                  >
                    Quander Dome
                  </div>
                </a>
              </li>
              <li></li>
            </ul>
          </li>

          <li>
            <ul className="ring-1">
              <li>
                <a
                  href="https://mnemora.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    style={{ boxShadow: " 0 0 10px red" }}
                    className="project-icon"
                  >
                    Mnemo
                  </div>
                </a>
              </li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <ul className="ring-2">
              <li>
                <a
                  href="https://github.com/Orloaft/gpt-autodocs"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div
                    style={{ boxShadow: " 0 0 10px white" }}
                    className="project-icon"
                  >
                    GPT-Autodoc
                  </div>
                </a>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li>
                <a
                  href="https://spacedice.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div
                    style={{ boxShadow: " 0 0 10px yellow" }}
                    className="project-icon"
                  >
                    Space Dice
                  </div>
                </a>
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
    </>
  );
};
