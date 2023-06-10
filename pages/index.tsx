import type { NextPage } from "next";

import styled from "styled-components";
import { BackGround } from "../component/BackGround";
import { useState } from "react";
import { EmailForm } from "../component/EmailForm";
import ProjectList from "../component/ProjectList";
import { Footer } from "../component/Footer";
import { HeroView } from "../component/Hero";
import { Orbit } from "../component/Orbit/OrbitingView";
const MainContainer = styled.div`
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  & div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 48rem) {
    & div {
      justify-content: center;
      & .project-image {
        display: flex;
      }
    }

    & .aside {
      display: none;
    }
  }
`;

export const Frame = styled.div`
  background-color: #393e41;
  display: flex;
  border: 2px solid #58355e;
  padding: 0.5rem;
  font-size: 1rem;
  
 
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
  height: 100%;

  @media (min-width: 48rem) {
    gap: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    & div {
      width: 15rem;
      height: 12rem;
    }
  }
`;

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <BackGround>
      <Orbit showModal={showModal} setShowModal={setShowModal} />
    </BackGround>
  );
};

export default Home;
