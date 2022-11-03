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
        <footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start ",
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
              cursor: "pointer",
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
        <ProjectContainer>
          <FlipCardProvider
            backText="QuanderDome is a customizable trivia death match game, utilizing an open trivia db and websockets."
            href="https://quanderdome.herokuapp.com"
          >
            <ProjectFrame>
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
                  />{" "}
                  <Link href="https://quanderdome.herokuapp.com">
                    <a className="mobile_link" target="_blank">
                      Link
                    </a>
                  </Link>
                  <div className="aside">
                    QuanderDome is a customizable trivia death match game,
                    utilizing an open trivia db and websockets.
                  </div>
                </div>{" "}
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider
            backText="Mnemora allows players to face waves of enemies as wizards in turn based combat. Spell casting requires timely button pressing."
            href="https://mnemora.herokuapp.com"
          >
            <ProjectFrame>
              <Column>
                <span>Mnemora</span>
                <div>
                  <Image
                    className="project-image"
                    objectFit="contain"
                    src="/images/mnemora2.png"
                    alt="Picture of the app match"
                    width={270}
                    height={120}
                  />{" "}
                  <Link href="https://mnemora.herokuapp.com">
                    <a className="mobile_link" target="_blank">
                      Link
                    </a>
                  </Link>
                  <div className="aside">
                    Mnemora allows players to face waves of enemies as wizards
                    in turn based combat. Spell casting requires timely button
                    pressing.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider
            backText="Jambo is a fighting game where two aliens and their swarms need to collide in space for supremacy."
            href="https://orloaft.itch.io/jambo"
          >
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
                  />{" "}
                  <Link href="https://orloaft.itch.io/jambo">
                    <a className="mobile_link" target="_blank">
                      Link
                    </a>
                  </Link>
                  <div className="aside">
                    Jambo is a fighting game where two aliens and their swarms
                    need to collide in space for supremacy.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider
            backText="Land Locked is a multi-year collaboration which combines chess and fantasy card games."
            href="https://locked.land"
          >
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
                  />{" "}
                  <Link href="https://locked.land">
                    <a className="mobile_link" target="_blank">
                      Link
                    </a>
                  </Link>
                  <div className="aside">
                    Land Locked is a multi-year collaboration which combines
                    chess and fantasy card games.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
          <FlipCardProvider
            backText="Web eyes is a hackathon project that uses an open api for automatic tagging of uploaded images."
            href="https://github.com/Orloaft/week8-hackathon"
          >
            <ProjectFrame>
              <Column>
                <span>Web eyes</span>
                <div>
                  <Image
                    className="project-image"
                    objectFit="contain"
                    src="/images/webeyes.png"
                    alt="Picture of the app"
                    width={190}
                    height={150}
                  />{" "}
                  <Link href="https://github.com/Orloaft/week8-hackathon">
                    <a className="mobile_link" target="_blank">
                      Link
                    </a>
                  </Link>
                  <div className="aside">
                    Web eyes is a hackathon project that uses an open api for
                    automatic tagging of uploaded images.
                  </div>
                </div>
              </Column>
            </ProjectFrame>
          </FlipCardProvider>
        </ProjectContainer>
        {showModal && <EmailForm />}
      </MainContainer>
    </BackGround>
  );
};

export default Home;
