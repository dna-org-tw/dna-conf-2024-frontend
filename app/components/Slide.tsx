"use client";
import { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

export default function Slide({
  children,
  speed,
}: {
  children: ReactElement[];
  speed: number;
}) {
  const [currentPage, setCurrentPage] = useState(0);
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

  const handleNextSlideChange = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage === childList.length - 1) {
      setCurrentPage(0);
    }
  };
  const handlePreSlideChange = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage === 0) {
      setCurrentPage(childList.length - 1);
    }
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlideChange();
    }, speed);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (!childList[currentPage]) {
      setCurrentPage(childList.length - 1);
    }
  }, [childList[currentPage]]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex w-full overflow-hidden">
        <button
          className="z-10 bg-white"
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
          className={`grid relative max-w-7xl`}
          style={{
            gridTemplateColumns: `repeat(${page},100%)`,
            transform: `translateX(-${currentPage * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {childList.map((child, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3`}
            >
              {child}
            </div>
          ))}
        </div>
        <button
          className="z-10 bg-white"
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
            className={`${index === currentPage ? "border-black border-solid border" : "bg-black"} rounded-full w-3 h-3`}
            style={{ marginBottom: "20px" }}
          />
        ))}
      </div>
    </div>
  );
}
