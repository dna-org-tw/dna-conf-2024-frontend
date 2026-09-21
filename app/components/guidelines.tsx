"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

interface IProps {
  open?: boolean;
  title: string[];
  cocParagraph: string[];
  needHelpParagraph: string[];
  children: React.ReactNode;
}

const Guidelines: React.FC<IProps> = ({
  open,
  children,
  title,
  cocParagraph,
  needHelpParagraph,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [showButton, setShowButton] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setShowButton(isSMScreen());
    setShowBorder(isSMScreen());
  }, [isOpen]);

  function isSMScreen() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  }

  return (
    <div className="container p-2 lg:whitespace-nowrap lg:pt-10 lg:px-8">
      <div className="relative lg:whitespace-normal lg:pl-4 xl:pl-10">
        <div
          className={clsx("absolute left-0 top-0 w-full h-full", {
            "bg-[linear-gradient(to_bottom,transparent,white)]": !isOpen,
          })}
        ></div>
        <h6 className="text-black flex-2 font-bold text-center tracking-widest mt-4">
          {title[0]}
        </h6>
        <div className={`overflow-hidden h-[140px] ${isOpen ? "h-auto" : ""}`}>
          <ol className="list-decimal mt-6 pl-5 p-auto lg:ml-6 xl:ml-20">
            {React.Children.map(children, (content, index) => (
              <li key={index} className="mb-4 md:mb-4">
                {typeof content === "string" &&
                content.includes("us@dna.org.tw") ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.replace(
                        "us@dna.org.tw",
                        "<u>us@dna.org.tw</u>"
                      ),
                    }}
                  />
                ) : (
                  content
                )}
              </li>
            ))}
          </ol>
          {showBorder && <div className="border-b-2 border-b-gray-200"></div>}
          <h6 className="text-black flex-2 font-bold text-center tracking-widest pt-6 pb-2">
            {title[1]}
          </h6>
          <div className="lg:ml-6 xl:ml-20">
            {React.Children.map(cocParagraph, (content, index) => (
              <ul key={index} className="my-4 md:mb-4">
                {content}
              </ul>
            ))}
          </div>
          {showBorder && <div className="border-b-2 border-b-gray-200"></div>}
          <h6 className="text-black flex-2 font-bold text-center tracking-widest pt-6 pb-2">
            {title[2]}
          </h6>
          <div className="lg:ml-6 xl:ml-20">
            {React.Children.map(needHelpParagraph, (content, index) => (
              <ul key={index} className="my-4 md:mb-4">
                {typeof content === "string" &&
                content.includes("us@dna.org.tw") ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.replace(
                        "us@dna.org.tw",
                        "<u>us@dna.org.tw</u>"
                      ),
                    }}
                  />
                ) : (
                  content
                )}
              </ul>
            ))}
          </div>
        </div>
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
