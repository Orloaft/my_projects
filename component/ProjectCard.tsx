import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FlipCardProvider } from "./FlipCard";
import styled from "styled-components";
import { Column } from "../pages";

interface ProjectCardProps {
  backText: string;
  href: string;
  title: string;
  imageSrc: string;
  altText: string;
}
const Frame = styled.div`
  background-color: #393e41;
  display: flex;
  border: 2px solid #58355e;
  padding: 0.5rem;
  font-size: 1rem;
  
 
  }
`;
export const ProjectFrame = styled(Frame)`
  justify-content: center;
`;
const ProjectCard: React.FC<ProjectCardProps> = ({
  backText,
  href,
  title,
  imageSrc,
  altText,
}) => {
  return (
    <FlipCardProvider backText={backText} href={href}>
      <ProjectFrame>
        <Column>
          <span>{title}</span>
          <div>
            <Image
              className="project-image"
              objectFit="contain"
              src={imageSrc}
              alt={altText}
              width={200}
              height={120}
            />
            <Link href={href}>
              <a className="mobile_link" target="_blank">
                Link
              </a>
            </Link>
            <div className="aside">{backText}</div>
          </div>
        </Column>
      </ProjectFrame>
    </FlipCardProvider>
  );
};

export default ProjectCard;
