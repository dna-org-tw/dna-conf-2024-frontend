"use client";
import { useState } from "react";
import { TranslationData } from "./Nav";
import MenuContent from "./MenuContent";

export default function MenuDropdown({
  translatedData,
  lng,
}: {
  translatedData: TranslationData;
  lng: string;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const genericHamburgerLine = `h-[3px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <>
      <div className="absolute xl:hidden right-12">
        <button
          className="flex flex-col h-12 w-12 rounded justify-center items-center group"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div
            className={`${genericHamburgerLine} ${
              showDropdown
                ? "rotate-45 translate-y-[11px] opacity-90 group-hover:opacity-100"
                : "opacity-90 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showDropdown ? "opacity-0" : "opacity-90 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              showDropdown
                ? "-rotate-45 -translate-y-[11px] opacity-90 group-hover:opacity-100"
                : "opacity-90 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      {showDropdown && (
        <div className="flex flex-col gap-6 bg-black/80 text-white h-fit p-12 absolute left-0 top-[60px] md:top-[94px] xl:hidden w-full items-center">
          <MenuContent translatedData={translatedData} lng={lng} />
        </div>
      )}
    </>
  );
}
