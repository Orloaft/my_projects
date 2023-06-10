import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  backText: string;
  href: string;
  title: string;
  imageSrc: string;
  altText: string;
}

const DraggableProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      drag
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        cursor: "grab",
        boxShadow: isDragging
          ? "0px 0px 10px 5px rgba(255,105,180,0.75)"
          : "none",
      }}
    >
      <ProjectCard {...props} />
    </motion.div>
  );
};

export default DraggableProjectCard;
