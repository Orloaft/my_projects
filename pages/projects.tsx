import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Orbit } from "../component/Orbit/OrbitingView";
import ArcadeMachine from "../component/ArcadeMachine";
import { HeroView } from "../component/Hero";
import { EmailForm } from "../component/EmailForm";
import ImageSlider from "../component/ImageSlider/ImageSlide";
interface Project {
  title: string;
  description: string;
  imagePath: string;
}
const projects = [
  { title: "Jambo", description: "", imagePaths: ["/images/jambo1.png"] },
  {
    title: "Jambo",
    description:
      "Jambo is a fighting game where two aliens and their swarms need to collide in space for supremacy.",
    imagePaths: ["/images/jambo1.png", "/images/jambo2.jpg"],
  },
  {
    title: "Landlocked",
    description:
      "Land Locked is a multi-year collaboration which combines chess and fantasy card games.",
    imagePaths: ["/images/landlocked1.png"],
  },
  {
    title: "Mnemo",
    description:
      "Mnemo allows players to face waves of enemies as wizards in turn based combat. Spell casting requires timely button pressing.",
    imagePaths: [
      "/images/mnemora1.png",
      "/images/mnemora2.png",
      "/images/mnemo_screenshot.jpg",
    ],
  },
  {
    title: "QuanderDome",
    description:
      "QuanderDome is a customizable trivia death match game, utilizing an open trivia db and websockets.",
    imagePaths: ["/images/quanderdome1.png", "/images/quanderdome2.png"],
  },
  {
    title: "SpaceDice",
    description:
      "Space Dice is a browser version of the dice rolling game `farkle`",
    imagePaths: ["/images/spacedice.jpg", "/images/spacedice2.jpg"],
  },
];
const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <ArcadeMachine
      selectedProject={selectedProject}
      setSelectedProject={setSelectedProject}
    >
      <div
        style={{
          background: "#030e4f",
          height: "100%",
        }}
      >
        <>
          {[...Array(50)].map((_, i) => {
            return (
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            );
          })}
        </>
        {(selectedProject === 0 && (
          <Orbit showModal={showModal} setShowModal={setShowModal} />
        )) ||
          (selectedProject && (
            <div className="project-image">
              {" "}
              <div className="game-text">
                <HeroView text={projects[selectedProject].description} />
              </div>{" "}
              <ImageSlider images={projects[selectedProject].imagePaths} />
            </div>
          ))}
        {showModal && <EmailForm showModal={setShowModal} />}
      </div>
    </ArcadeMachine>
  );
};

export default Home;
