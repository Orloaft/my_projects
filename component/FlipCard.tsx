import Link from "next/link";
import styled from "styled-components";

const FlipCard = styled.div`
  background-color: transparent;

  perspective: 1000px;
  &:hover {
    & .flip-card-inner {
      @media (min-width: 48rem) {
        transform: rotateY(180deg);
      }
      transform: translate(0px, -200px);
    }
  }
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
`;
const FlipCardFront = styled.div`
  position: absolute;
  background-color: #393e41;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
const FlipCardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  border: 2px solid #58355e;
  position: absolute;
  background-color: #393e41;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const FlipCardProvider = ({ children, backText, href }: any) => {
  return (
    <FlipCard>
      <FlipCardInner className="flip-card-inner">
        <FlipCardFront>{children}</FlipCardFront>
        <FlipCardBack>
          {backText}{" "}
          <Link href={href}>
            <a target="_blank">Link</a>
          </Link>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
};
