import styled from "styled-components";
import Image from "next/image";

const Text = styled.p`
  font-size: 1rem;
  lineheight: 2rem;

  @media (min-width: 48rem) {
    font-size: 1.75rem;
    lineheight: 3rem;
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
const Frame = styled.div`
background-color: #393e41;
display: flex;
border: 2px solid #58355e;
padding: 0.5rem;
font-size: 1rem;


}
`;
export const HeroView = () => {
  return (
    <Hero>
      <div style={{ width: "30%" }}></div>
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
            color: "white",
          }}
        >
          My name is Alex. <br></br>I am a lover of games and web technologies.
          I invite you to browse my existing projects or click on the mail icon
          to get in touch.
        </Text>
      </Frame>
    </Hero>
  );
};
