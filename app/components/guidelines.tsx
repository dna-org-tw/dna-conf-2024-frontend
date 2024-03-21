"use client";

import React, { useState } from "react";
import Image from "next/image";

interface buttonText {
  expand: string;
  collapse: string;
}

interface IProps {
  open?: boolean;
  title: string;
  lang: string;
  children: string[];
  buttonText: buttonText;
}

const Guidelines: React.FC<IProps> = ({
  open,
  children,
  title,
  lang,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container lg:whitespace-nowrap lg:pt-10 lg:px-8">
      <h6 className="lg:text-[16px] text-black flex-2 font-bold text-center tracking-widest mb-2">
        {title}
      </h6>
      <div className="lg:whitespace-normal lg:pl-4 xl:pl-10">
        {!isOpen && (
          <ol className="list-decimal lg:ml-6 p-4 xl:ml-20">
            {children.map((notice, index) => (
              <li
                key={index}
                className={`lg:pb-4 ${
                  lang === "zh-TW" ? "tracking-widest" : ""
                }`}
              >
                {notice.includes("us@dna.org.tw") ? (
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
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          type="button"
          className="mx-auto lg:mt-3"
          onClick={collapsibleHandler}
        >
          {!isOpen ? (
            <Image
              src="/images/button-up.png"
              alt="Collapsible button up"
              width={18}
              height={15}
            />
          ) : (
            <Image
              src="/images/button-down.png"
              alt="Collapsible button down"
              width={18}
              height={15}
            />
          )}
        </button>
        <div className="lg:p-2 text-[#7D7D77] text-sm tracking-widest">
          {isOpen ? buttonText.expand : buttonText.collapse}
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
