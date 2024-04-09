"use client";

import { useState, useEffect } from "react";
import { useClientTranslation } from "@/i18n/client";
import TicketButtonAndDialog from "./TicketButtonAndDialog";
import { ticketColor } from "./index";
import { Lang } from "@/types/common";

const ticketType = {
  Single: "single",
  TwoPerson: "twoPerson",
  FivePerson: "fivePerson",
  SingleClassic: "singleClassic",
  Vip: "vip",
} as const;
type TicketType = (typeof ticketType)[keyof typeof ticketType];

export default function TicketInfoMobile({ lang }: { lang: Lang }) {
  const [isOpen, setIsOpen] = useState<TicketType>();
  const { t } = useClientTranslation(lang);

  const handleToggle = (type: TicketType) => {
    if (isOpen === type) {
      setIsOpen(undefined);
    } else {
      setIsOpen(type);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex xl:hidden flex-col items-center px-4">
        <p className="text-center mb-1">{t("available period")}</p>
        <p className="text-center mb-5">{t("click for details")}</p>
        <div className="max-w-[600px] w-full">
          <TicketButtonAndDialog
            t={t}
            color={ticketColor.yellow}
            title={t("single ticket.title")}
            price={t("single ticket.price")}
            availablePeriod={t("single ticket.available period")}
            originalPrice={t("single ticket.original price")}
            content={[t("single ticket.content1")]}
            isOpen={isOpen === ticketType.Single}
            handleToggle={() => handleToggle(ticketType.Single)}
            className="mb-4"
          />
          <TicketButtonAndDialog
            t={t}
            color={ticketColor.pink}
            title={t("two person ticket.title")}
            price={t("two person ticket.price")}
            availablePeriod={t("two person ticket.available period")}
            originalPrice={t("two person ticket.original price")}
            content={[
              t("two person ticket.content1"),
              t("two person ticket.content2"),
            ]}
            label={t("two person ticket.label")}
            showTrumpet
            isOpen={isOpen === ticketType.TwoPerson}
            handleToggle={() => handleToggle(ticketType.TwoPerson)}
            className="mb-4"
            isGroupTicket
          />
          <TicketButtonAndDialog
            t={t}
            color={ticketColor.pink}
            title={t("five person ticket.title")}
            price={t("five person ticket.price")}
            availablePeriod={t("five person ticket.available period")}
            originalPrice={t("five person ticket.original price")}
            content={[
              t("five person ticket.content1"),
              t("five person ticket.content2"),
            ]}
            isOpen={isOpen === ticketType.FivePerson}
            handleToggle={() => handleToggle(ticketType.FivePerson)}
            className="mb-4"
            isGroupTicket
          />
          <TicketButtonAndDialog
            t={t}
            color={ticketColor.blue}
            title={t("single classic ticket.title")}
            price={t("single classic ticket.price")}
            availablePeriod={t("single classic ticket.available period")}
            originalPrice={t("single classic ticket.original price")}
            content={[
              t("single classic ticket.content4"),
              t("single classic ticket.content1"),
              t("single classic ticket.content2"),
              t("single classic ticket.content3"),
            ]}
            label={t("single classic ticket.label")}
            showTrumpet
            isOpen={isOpen === ticketType.SingleClassic}
            handleToggle={() => handleToggle(ticketType.SingleClassic)}
            className="mb-4"
          />
          <TicketButtonAndDialog
            t={t}
            color={ticketColor.red}
            title={t("vip ticket.title")}
            price={t("vip ticket.price")}
            availablePeriod={t("vip ticket.available period")}
            originalPrice={t("vip ticket.original price")}
            content={[
              t("vip ticket.content4"),
              t("vip ticket.content1"),
              t("vip ticket.content2"),
              t("vip ticket.content3"),
              t("vip ticket.content5"),
            ]}
            label={t("vip ticket.label")}
            showSpecialLabel
            isOpen={isOpen === ticketType.Vip}
            handleToggle={() => handleToggle(ticketType.Vip)}
            className="mb-4"
          />
        </div>
      </div>
    </>
  );
}
