import { Footer } from "../Footer";
import { HeroView } from "../Hero";
import ProjectCard from "../ProjectCard";

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
        <div className="hero-text">
          <HeroView />
        </div>
        <li>
          <ul className="ring-0">
            <li>
              <div>Jambo</div>
            </li>
            <li></li>
            <li></li>
            <li>
              <div>Web Eyes</div>
            </li>
          </ul>
        </li>

        <li>
          <ul className="ring-1">
            <li>
              <div>Mnemo</div>
            </li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <ul className="ring-2">
            <li>
              <div>GPT-Autodoc</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <div>Space Dice</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
        <li>
          <ul className="ring-3">
            <li></li>
            <li>
              <div>QuanderDome</div>
            </li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
