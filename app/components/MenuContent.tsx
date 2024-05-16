"use client";
import Image from "next/image";
import { TranslationData } from "./Nav";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MenuContentProp {
  translatedData: TranslationData;
  lng: string;
  onClick?: () => void;
}

const MenuContent: React.FC<MenuContentProp> = ({
  translatedData,
  lng,
  onClick,
}) => (
  <>
    <Link href={`/${lng}/2024#event`} onClick={onClick}>
      {" "}
      {translatedData.EVENT}
    </Link>
    <Link href={`/${lng}/2024#speaker`} onClick={onClick}>
      {" "}
      {translatedData.SPEAKER}
    </Link>
    <Link href={`/${lng}/2024#agenda`} onClick={onClick}>
      {" "}
      {translatedData.AGENDA}
    </Link>
    <Link href={`/${lng}/2024#ticket`} onClick={onClick}>
      {" "}
      {translatedData.TICKETS}
    </Link>
    <Link href={`/${lng}/2024#transportation`} onClick={onClick}>
      {translatedData.TRANSPORTATION}
    </Link>
    <Link href={`/${lng}/2024#call-for-sponsor`} onClick={onClick}>
      {translatedData.CALL_FOR_SPONSOR}
    </Link>
    <Button
      asChild
      className="bg-cta hover:bg-cta/90 rounded-lg px-4 py-2 w-fit"
    >
      <Link href="https://psee.io/5qfa4a" target="_blank" onClick={onClick}>
        {translatedData.BUY_TICKET}
      </Link>
    </Button>
    <Link
      href={`/${lng === "en-US" ? "zh-TW" : "en-US"}/2024`}
      onClick={onClick}
    >
      <Image
        src="/images/i18n.png"
        alt="i19n"
        width={50}
        height={50}
        className="h-full w-auto hidden lg:block"
      />
    </Link>
  </>
);

export default MenuContent;
