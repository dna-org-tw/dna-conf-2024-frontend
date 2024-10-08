"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const _scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/*
  @param {number} threshold - The scroll position to show the button
  @param {number} throttleTime - The time to throttle the scroll event
  desktop: 1741, mobile: 1413
*/

const ScrollToTopButton = ({ threshold = 1741, throttleTime = 100 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // use throttle to control the frequency of the scroll event
  const toggleVisibility = throttle(() => {
    if (windowSize.width > 768) {
      threshold = 1200;
    } else {
      threshold = 800;
    }

    const shouldBeVisible = window.scrollY > threshold;
    if (isVisible !== shouldBeVisible) {
      setIsVisible(shouldBeVisible);
    }
  }, throttleTime);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = throttle(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, throttleTime);

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [throttleTime]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, [toggleVisibility]);

  const size =
    windowSize.width > 768
      ? { width: 80, height: 80 }
      : { width: 44, height: 44 };

  return isVisible ? (
    <button
      onClick={_scrollToTop}
      className="fixed z-10 bottom-36 md:bottom-4 right-4 md:right-6"
    >
      <Image
        src="/images/icon_scrollToTop.svg"
        alt="scrollToTop"
        className="object-cover"
        {...size}
      />
    </button>
  ) : null;
};

export default ScrollToTopButton;
