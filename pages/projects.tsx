import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { Orbit } from "../component/Orbit/OrbitingView";
import ArcadeMachine from "../component/ArcadeMachine";
import { HeroView } from "../component/Hero";
interface Project {
  title: string;
  description: string;
  imagePath: string;
}
const projects = [
  { title: "Jambo", description: "", imagePath: "/images/jambo1.png" },
  {
    title: "Jambo",
    description:
      "Jambo is a fighting game where two aliens and their swarms need to collide in space for supremacy.",
    imagePath: "/images/jambo1.png",
  },
  {
    title: "Landlocked",
    description:
      "Land Locked is a multi-year collaboration which combines chess and fantasy card games.",
    imagePath: "/images/landlocked1.png",
  },
  {
    title: "Mnemo",
    description:
      "Mnemora allows players to face waves of enemies as wizards in turn based combat. Spell casting requires timely button pressing.",
    imagePath: "/images/mnemora1.png",
  },
  {
    title: "QuanderDome",
    description:
      "QuanderDome is a customizable trivia death match game, utilizing an open trivia db and websockets.",
    imagePath: "/images/quanderdome1.png",
  },
  {
    title: "SpaceDice",
    description:
      "Space Dice is a browser version of the dice rolling game `farkle`",
    imagePath: "/images/spacedice.jpg",
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
      {(selectedProject === 0 && (
        <div style={{ background: "#030e4f" }}>
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
          <Orbit showModal={showModal} setShowModal={setShowModal} />
        </div>
      )) ||
        (selectedProject && (
          <div className="project-image">
            {" "}
            <div className="game-text">
              <HeroView text={projects[selectedProject].description} />
            </div>{" "}
            <Image
              src={projects[selectedProject].imagePath}
              alt=""
              layout={"fill"}
              objectFit="contain"
            />
          </div>
        ))}
    </ArcadeMachine>
  );
};

export default Home;
