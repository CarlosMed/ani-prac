import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import style from "./Carousel.module.css";
import { useState } from "react";
import CarouselButton from "./CarouselButton";
import { CarouselProps } from "../../lib/types";

const iconSize = 26;

export default function Carousel({ baseUrl, images }: CarouselProps) {
  const [currentImg, setCurrentImg] = useState(0);

  // Set state to false for auto scroll animation
  const [isPause, setIsPause] = useState(true);

  const handlePrevImg = () => {
    setCurrentImg((currentImg) => {
      if (currentImg === 0) return images.length - 1;
      return currentImg - 1;
    });
  };

  const handleNextImg = () => {
    setCurrentImg((currentImg) => {
      if (currentImg === images.length - 1) return 0;
      return currentImg + 1;
    });
  };

  return (
    <section className={style.carousel}>
      <div className={style.container}>
        <div className={style.wrapper}>
          {images.map(({ id, imageURL, altTag }) => (
            <motion.img
              animate={{
                x: isPause
                  ? `${-50 * currentImg * 2.2}%`
                  : `-${images.length * 100}%`,
              }}
              transition={
                {
                  // Uncomment below for auto scroll transition
                  // duration: 10,
                  // ease: "linear",
                  // repeat: Infinity,
                  // repeatType: "loop",
                }
              }
              key={id}
              src={baseUrl + imageURL}
              alt={altTag}
            />
          ))}
        </div>
        <div className={style.icons}>
          <CarouselButton
            ariaLabel="Previous Image"
            handleClick={handlePrevImg}
          >
            <FaArrowLeft size={iconSize} aria-hidden />
          </CarouselButton>
          <CarouselButton ariaLabel="Next Image" handleClick={handleNextImg}>
            <FaArrowRight size={iconSize} aria-hidden />
          </CarouselButton>
        </div>
      </div>
    </section>
  );
}
