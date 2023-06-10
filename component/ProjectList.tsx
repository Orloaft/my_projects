import React from "react";
import ProjectCard from "./ProjectCard";
import { v4 as uuidv4 } from "uuid";
import DraggableProjectCard from "./Draggable";
interface Project {
  backText: string;
  href: string;
  title: string;
  imageSrc: string;
  altText: string;
}

const ProjectList: React.FC = () => {
  const projects: Project[] = [
    {
      backText:
        "QuanderDome is a customizable trivia death match game, utilizing an open trivia db and websockets.",
      href: "https://quanderdome.herokuapp.com",
      title: "QuanderDome",
      imageSrc: "/images/quanderdome2.png",
      altText: "Picture of the app match",
    },
    {
      backText:
        "Mnemora allows players to face waves of enemies as wizards in turn based combat. Spell casting requires timely button pressing.",
      href: "https://mnemora.herokuapp.com",
      title: "Mnemora",
      imageSrc: "/images/mnemora2.png",
      altText: "Picture of the app match",
    },
    {
      backText:
        "Jambo is a fighting game where two aliens and their swarms need to collide in space for supremacy.",
      href: "https://orloaft.itch.io/jambo",
      title: "Jambo",
      imageSrc: "/images/jambo1.png",
      altText: "Picture of the app match",
    },
    {
      backText:
        "Space Dice is a browser version of the dice rolling game `farkle`",
      href: "https://spacedice.herokuapp.com",
      title: "Space Dice",
      imageSrc: "/images/spacedice.jpg",
      altText: "Picture of the app match",
    },
    {
      backText:
        "Land Locked is a multi-year collaboration which combines chess and fantasy card games.",
      href: "https://locked.land",
      title: "Land Locked",
      imageSrc: "/images/landlocked1.png",
      altText: "Picture of the app match",
    },
    {
      backText:
        "Web eyes is a hackathon project that uses an open api for automatic tagging of uploaded images.",
      href: "https://github.com/Orloaft/week8-hackathon",
      title: "Web eyes",
      imageSrc: "/images/webeyes.png",
      altText: "Picture of the app",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <DraggableProjectCard key={uuidv4()} {...project} />
      ))}
    </>
  );
};

export default ProjectList;
