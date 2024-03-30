"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

interface buttonText {
  expand: string;
  collapse: string;
}

interface IProps {
  open?: boolean;
  title: string;
  children: React.ReactNode;
  buttonText: buttonText;
}

const Guidelines: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [showButton, setShowButton] = useState(false);

  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setShowButton(isSMScreen());
  }, [isOpen]);

  function isSMScreen() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  }

  return (
    <div className="container mx-auto mx-2 mx-0 lg:whitespace-nowrap lg:pt-10 lg:pb-20 lg:px-8">
      <div className="relative lg:whitespace-normal lg:pl-4 xl:pl-10">
        <div
          className={clsx("absolute left-0 top-0 w-full h-full", {
            "bg-[linear-gradient(to_bottom,transparent,white)]": !isOpen,
          })}
        ></div>
        <h6 className="mt-4 lg:text-[16px] text-black flex-2 font-bold text-center tracking-widest mb-2">
          {title}
        </h6>
        <ol
          className={clsx(
            "list-decimal tracking-widest mt-4 ml-8 mb-10 mr-8 pl-6 lg:ml-6 xl:ml-20 overflow-hidden",
            { "h-[140px]": !isOpen, "h-auto": isOpen }
          )}
        >
          {React.Children.map(children, (notice, index) => (
            <li key={index} className="mb-4 md:mb-4">
              {typeof notice === "string" &&
              notice.includes("us@dna.org.tw") ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: notice.replace(
                      "us@dna.org.tw",
                      "<u>us@dna.org.tw</u>"
                    ),
                  }}
                />
              ) : (
                notice
              )}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        {showButton && (
          <button type="button" onClick={collapsibleHandler}>
            {!isOpen ? (
              <Image
                src="/images/button-angle-down.png"
                alt="Collapsible button down"
                width={25}
                height={15}
              />
            ) : (
              <Image
                src="/images/button-angle-up.png"
                alt="Collapsible button up"
                width={25}
                height={15}
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Guidelines;
