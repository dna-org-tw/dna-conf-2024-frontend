'use client';

import React, { useState } from "react";
import Image from "next/image";

interface buttonText {
  expand: string;
  collapse: string;
}

interface IProps {
  open?: boolean;
  title: string;
  children: string[];
  buttonText: buttonText
}


const Guidelines: React.FC<IProps> = ({ open, children, title, buttonText }) => {
  
  const [isOpen, setIsOpen] = useState(open);
  
  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:mx-2 mx-0 lg:whitespace-nowrap container mx-auto pt-10 pb-20 px-8">
      <h6 className="text-[16px] text-black flex-2 font-bold text-center tracking-widest mb-4">
        {title}
      </h6>
      <div className="whitespace-normal tracking-widest list-outside mt-2">
        {!isOpen && <ul className="p-2">
          {children.map((notice, index) => (
            <li key={index} className="p-3">
              {notice.includes("us@dna.org.tw") ? (
                <p dangerouslySetInnerHTML={{ __html: notice.replace("us@dna.org.tw", '<u>us@dna.org.tw</u>') }} />
              ) : (
                notice
              )}
            </li>
          ))}
        </ul>}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button type="button" className="mx-auto mt-2" onClick={collapsibleHandler}>
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
        <div className="p-2 text-[#7D7D77] text-sm tracking-widest">
          {isOpen ? buttonText.expand: buttonText.collapse}
        </div>
      </div>
    </div>
  );
};

export default Guidelines;