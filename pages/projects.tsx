import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { BackGround } from "../component/BackGround";
import { useState } from "react";
import { EmailForm } from "../component/EmailForm";

import { Footer } from "../component/Footer";
import { HeroView } from "../component/Hero";
import { Orbit } from "../component/Orbit/OrbitingView";
import ArcadeMachine from "../component/ArcadeMachine";
interface Project {
  title: string;
  description: string;
  imagePath: string;
}
const projects = [
  { title: "Jambo", description: "", imagePath: "/images/jambo1.png" },
  { title: "Jambo", description: "", imagePath: "/images/jambo1.png" },
  {
    title: "Landlocked",
    description: "",
    imagePath: "/images/landlocked1.png",
  },
  { title: "Mnemo", description: "", imagePath: "/images/mnemora1.png" },
  {
    title: "QuanderDome",
    description: "",
    imagePath: "/images/quanderdome1.png",
  },
  { title: "SpaceDice", description: "", imagePath: "/images/spacedice.jpg" },
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
        <>
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
        </>
      )) ||
        (selectedProject && (
          <Image
            src={projects[selectedProject].imagePath}
            alt=""
            layout={"fill"}
          />
        ))}
    </ArcadeMachine>
  );
};

export default Home;
