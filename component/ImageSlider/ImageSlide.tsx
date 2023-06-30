import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
const ImageSlider = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.container}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`${styles.image} ${
            index === activeIndex ? styles.active : ""
          }`}
        />
      ))}

      <button className={styles.button} onClick={handleNext}>
        <Image
          src="/images/arrow-icon.png"
          alt="arrow"
          height={50}
          width={50}
        />
      </button>
    </div>
  );
};

export default ImageSlider;
