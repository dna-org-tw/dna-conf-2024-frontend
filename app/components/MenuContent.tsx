"use client";
import Image from "next/image";
import { TranslationData } from "./Nav";
import Link from "next/link";
import useScrollTo from "@/hooks/useScrollTo";
import { Button } from "@/components/ui/button";

interface MenuContentProp {
  translatedData: TranslationData;
  lng: string;
}

const MenuContent: React.FC<MenuContentProp> = ({ translatedData, lng }) => {
  useScrollTo();

  return (
    <>
      <Link href={`/${lng}/2024#event`}> {translatedData.EVENT}</Link>
      <Link href={`/${lng}/2024#speaker`}> {translatedData.SPEAKER}</Link>
      <Link href={`/${lng}/2024#agenda`}> {translatedData.AGENDA}</Link>
      <Link href={`/${lng}/2024#ticket`}> {translatedData.TICKETS}</Link>
      <Link href={`/${lng}/2024#transportation`}>
        {translatedData.TRANSPORTATION}
      </Link>
      <Link href={`/${lng}/2024#call-for-sponsor`}>
        {translatedData.CALL_FOR_SPONSOR}
      </Link>
      <Button
        asChild
        className="bg-cta hover:bg-cta/90 rounded-lg px-4 py-2 w-fit"
      >
        <Link
          href="https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789"
          target="_blank"
        >
          {translatedData.BUY_TICKET}
        </Link>
      </Button>
      <Link href={`/${lng === "en-US" ? "zh-TW" : "en-US"}/2024`}>
        <Image
          src="/images/i18n.png"
          alt="i19n"
          width={50}
          height={50}
          className="h-full w-auto"
        />
      </Link>
    </>
  );
};
export default MenuContent;
