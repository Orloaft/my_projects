import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { BackGround } from "../component/BackGround";
import { FlipCardProvider } from "../component/FlipCard";
import Link from "next/link";
import { useState } from "react";
import { EmailForm } from "../component/EmailForm";
const MainContainer = styled.div`
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: relative;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  & div {
    display: flex;
    flex-direction: column;
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
const Row = styled.div`
  gap: 1rem;
  display: flex;
  justify-content: space-around;
`;
const TopBar = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  height: 10vh;
  background-color: #ec0b43;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #e2294f;
`;
const Text = styled.p`
  font-size: 1rem;
  lineheight: 2rem;

  @media (min-width: 48rem) {
    font-size: 1.75rem;
    lineheight: 3rem;
  }
`;

const Frame = styled.div`
  background-color: #393e41;
  display: flex;
  border: 2px solid #58355e;
  padding: 0.5rem;
  font-size: 1rem;
  
 
  }
`;
const Hero = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;
  @media (max-width: 28rem) {
    flex-wrap: wrap;
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
const ProjectFrame = styled(Frame)`
  justify-content: center;
`;
const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <BackGround>
      <MainContainer>
        <Hero>
          <div style={{ width: "30%" }}>
            <Frame style={{ maxWidth: "140px", minWidth: "140px" }}>
              <Image
                objectFit="contain"
                src="/images/pixelAvatar.png"
                alt="Picture of the author"
                width={125}
                height={150}
              />
            </Frame>
          </div>
          <Frame
            style={{
              minWidth: "70%",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Text
              style={{
                width: "100%",
                margin: "0.5rem 0",
              }}
            >
              My name is Alex. <br></br>I am a lover of games and web
              technologies. I invite you to browse my existing projects or click
              on the mail icon to get in touch.
            </Text>
          </Frame>
        </Hero>
        <ProjectContainer>
          <FlipCardProvider backText="QuanderDome is a customizable trivia death match game, utilizing an open trivia db and websockets.">
            <ProjectFrame>
              <Link href="https://quanderdome.herokuapp.com">
                <a target="_blank">
                  {" "}
                  <Column>
                    <span>QuanderDome</span>

                    <div>
                      <Image
                        className="project-image"
                        objectFit="contain"
                        src="/images/quanderdome2.png"
                        alt="Picture of the app match"
                        width={200}
                        height={120}
                      />
                      <div className="aside">
                        QuanderDome is a customizable trivia death match game,
                        utilizing an open trivia db and websockets.
                      </div>
                    </div>
                  </Column>
                </a>
              </Link>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider backText="Mnemora allows players to face waves of enemies as wizards in turn based combat. Spell casting requires timely button pressing.">
            <ProjectFrame>
              <Column>
                <span>Mnemora</span>
                <div>
                  <Image
                    className="project-image"
                    objectFit="contain"
                    src="/images/mnemora2.png"
                    alt="Picture of the app match"
                    width={140}
                    height={110}
                  />
                  <div className="aside">
                    Mnemora allows players to face waves of enemies as wizards
                    in turn based combat. Spell casting requires timely button
                    pressing.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider backText="Jambo is a fighting game where two aliens and their swarms need to collide in space for supremacy.">
            <ProjectFrame>
              <Column>
                <span>Jambo</span>
                <div>
                  <Image
                    className="project-image"
                    objectFit="contain"
                    src="/images/jambo1.png"
                    alt="Picture of the app match"
                    width={200}
                    height={120}
                  />
                  <div className="aside">
                    Jambo is a fighting game where two aliens and their swarms
                    need to collide in space for supremacy.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider backText="Land Locked is a multi-year collaboration which combines chess and fantasy card games.">
            <ProjectFrame>
              <Column>
                <span>Land Locked</span>
                <div>
                  <Image
                    className="project-image"
                    objectFit="contain"
                    src="/images/landlocked1.png"
                    alt="Picture of the app match"
                    width={200}
                    height={120}
                  />
                  <div className="aside">
                    Land Locked is a multi-year collaboration which combines
                    chess and fantasy card games.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
        </ProjectContainer>
        {showModal && <EmailForm />}
      </MainContainer>
      <footer
        style={{
          position: "fixed",
          width: "100%",
          bottom: 15,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <div
          style={{
            position: "relative",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          <Link href="https://www.linkedin.com/in/alex-orlow/">
            <a target="_blank">
              <Image src="/images/linkedin.png" alt="" layout="fill" />
            </a>
          </Link>{" "}
        </div>
        <div
          style={{
            position: "relative",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          <Link href="https://github.com/Orloaft">
            <a target="_blank">
              <Image src="/images/github.png" alt="" layout="fill" />
            </a>
          </Link>
        </div>
        <div
          style={{
            position: "relative",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          <Image
            onClick={() => setShowModal(!showModal)}
            src="/images/mail.png"
            alt=""
            layout="fill"
          />{" "}
        </div>
      </footer>
    </BackGround>
  );
};

export default Home;
