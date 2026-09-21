"use client";
import { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Slide({
  children,
  slideIndex,
  updateCurrentSlide,
}: {
  children: ReactElement[];
  slideIndex: number;
  updateCurrentSlide: (slideIndex: number) => void;
}) {
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      updateCurrentSlide(slideIndex);
    }
  }, [inView, slideIndex, updateCurrentSlide]);

  return (
    <div
      id={`slide-${slideIndex}`}
      key={slideIndex}
      ref={ref}
      className={`grid gap-3 grid-cols-1 w-full snap-center	sm:grid-cols-2 md:grid-cols-3`}
    >
      {children}
    </div>
  );
}
