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
  children: React.ReactNode;
  buttonText: buttonText
}


const Guidelines: React.FC<IProps> = ({ open, children, title, buttonText }) => {
  
  const [isOpen, setIsOpen] = useState(open);

  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto mx-2 mx-0 lg:whitespace-nowrap lg:pt-10 lg:pb-20 lg:px-8">
      <h6 className="mt-4 lg:text-[16px] text-black flex-2 font-bold text-center tracking-widest mb-2">
        {title}
      </h6>
      <div className="lg:whitespace-normal lg:pl-4 xl:pl-10">
        {!isOpen && <ol className="list-decimal tracking-widest mt-4 m-16 mb-10 mr-8 pl-2 lg:ml-6 xl:ml-20">
          {React.Children.map(children, (notice, index) => (
            <li key={index} className="mb-2 md:mb-4">
              {typeof notice === 'string' && notice.includes("us@dna.org.tw") ? (
                <p dangerouslySetInnerHTML={{ __html: notice.replace("us@dna.org.tw", '<u>us@dna.org.tw</u>') }} />
              ) : (
                notice
              )}
            </li>
          ))}
        </ol>}
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <button type="button" className="mx-auto mt-4 mb-2 lg:mt-3" onClick={collapsibleHandler}>
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
            {isOpen ? buttonText.expand: buttonText.collapse}
          </div>
      </div>
    </div>
  );
};

export default Guidelines;