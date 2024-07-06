"use client";

import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "./MenuDropdown";
import MenuContent from "./MenuContent";
import { useContext } from "react";
import { i18nTranslateContext } from "@/context/I18nTranslateProvider";

export interface TranslationData {
  EVENT: string;
  SPEAKER: string;
  AGENDA: string;
  TICKETS: string;
  TRANSPORTATION: string;
  SPONSORS: string;
  BUY_TICKET: string;
}

export default function Nav() {
  const { translate, lng } = useContext(i18nTranslateContext);

  // advise to use useClientTranslation hook to get the translation function
  // const { t } = useClientTranslation(lng);

  const translatedData: TranslationData = {
    EVENT: translate?.("EVENT") || "",
    SPEAKER: translate?.("SPEAKER") || "",
    AGENDA: translate?.("AGENDA") || "",
    TICKETS: translate?.("TICKETS") || "",
    TRANSPORTATION: translate?.("TRANSPORTATION") || "",
    SPONSORS: translate?.("SPONSORS") || "",
    BUY_TICKET: translate?.("BUY_TICKET") || "",
  };

  return (
    <nav className="fixed w-full h-[60px] lg:h-[94px] flex items-center ps-6 lg:justify-between lg:px-24 bg-brand-gray z-50">
      <MenuDropdown translatedData={translatedData} lng={lng} />
      <Link
        href={`/${lng}/2024`}
        className="h-2/5  flex justify-center items-center"
      >
        <Image
          src="/images/LOGO.png"
          alt="LOGO"
          width={414}
          height={78}
          className="h-full w-auto"
        />
      </Link>

      <div className="hidden lg:flex items-center gap-6 text-white ">
        <MenuContent translatedData={translatedData} lng={lng} />
      </div>
    </nav>
  );
}
