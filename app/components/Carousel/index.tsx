"use client";
import { useEffect, useState, ReactElement } from "react";
import CarouselSlide from "./CarouselSlide";
import Image from "next/image";

export default function Carousel({
  children,
  speed,
}: {
  children: ReactElement[];
  speed?: number;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cols, setCols] = useState(3);

  const childList = children.reduce<ReactElement[][]>((result, child, i) => {
    if (i % cols === 0) {
      result.push([child]);
    } else {
      result[result.length - 1].push(child);
    }
    return result;
  }, []);

  const page = Math.ceil(children.length / cols);

  const handleSlideChange = (slideIndex: number) => {
    if (slideIndex > childList.length - 1) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = childList.length - 1;
    }
  };

  const handleNextSlideChange = () => handleSlideChange(currentSlide + 1);
  const handlePreSlideChange = () => handleSlideChange(currentSlide - 1);

  useEffect(() => {
    const updateCols = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768) {
        setCols(3);
      } else if (windowWidth >= 640) {
        setCols(2);
      } else {
        setCols(1);
      }
    };
    updateCols();

    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  if (!!speed) {
    useEffect(() => {
      const timer = setTimeout(() => {
        handleNextSlideChange();
      }, speed);
      return () => clearTimeout(timer);
    });
  }

  const updateCurrentSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!childList[currentSlide]) {
      setCurrentSlide(childList.length - 1);
    }
  }, [childList[currentSlide]]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full overflow-hidden">
        <button
          className="z-10 bg-white hidden sm:block"
          onClick={handlePreSlideChange}
          disabled={children.length === cols}
        >
          <Image
            width={144}
            height={144}
            src="/images/arrow_left.png"
            alt="arrow_left"
            className="max-w-8"
          />
        </button>
        <div
          className={`grid relative max-w-7xl snap-x snap-mandatory overflow-x-scroll`}
          style={{
            gridTemplateColumns: `repeat(${page},100%)`,
            transition: "transform 0.5s ease-in-out",
            scrollbarWidth: "none",
          }}
        >
          {childList.map((child, index) => (
            <CarouselSlide
              key={index}
              slideIndex={index}
              updateCurrentSlide={updateCurrentSlide}
            >
              {child}
            </CarouselSlide>
          ))}
        </div>
        <button
          className="z-10 bg-white hidden sm:block"
          onClick={handleNextSlideChange}
          disabled={children.length === cols}
        >
          <Image
            width={144}
            height={144}
            src="/images/arrow_right.png"
            alt="arrow_right"
            className="max-w-8"
          />
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {Array.from({ length: childList.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`${index === currentSlide ? "border-black border-solid border" : "bg-black"} rounded-full w-3 h-3 cursor-pointer`}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
    </div>
  );
}
