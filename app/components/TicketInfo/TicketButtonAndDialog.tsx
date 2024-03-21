import React from "react";
import { TFunction } from "i18next";
import clsx from "clsx";
import { ticketColor } from "./index";
import { Trans } from "react-i18next/TransWithoutContext";

const DNA_FB_LINK = "https://www.facebook.com/groups/dna.org.tw";
const PURCHASE_TICKET_LINK =
  "https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789";

export default function TicketButtonAndDialog({
  t,
  color,
  title,
  price,
  availablePeriod,
  originalPrice,
  content,
  label,
  isOpen,
  className,
  showTrumpet = false,
  showSpecialLabel = false,
  handleToggle,
  isGroupTicket = false,
}: {
  t: TFunction;
  color: string[];
  price: string;
  availablePeriod: string;
  originalPrice: string;
  title: string;
  content: string[];
  label?: string;
  isOpen: boolean;
  className?: string;
  showTrumpet?: boolean;
  showSpecialLabel?: boolean;
  handleToggle: () => void;
  isGroupTicket?: boolean;
}) {
  const goToPurchaseTicket = () => {
    window.open(PURCHASE_TICKET_LINK, "_blank");
    return false;
  };

  return (
    <>
      <div
        className={clsx(
          `cursor-pointer rounded-2xl border-4 ${color[1]} text-center relative`,
          showTrumpet
            ? "before:content-[''] before:absolute before:w-[48px] before:h-[48px] before:top-[-18px] before:left-[-20px] before:bg-[url('/images/ticket-mobile-label-trumpet.svg')]"
            : "",
          showSpecialLabel
            ? "before:content-[''] before:absolute before:w-[56px] before:h-[56px] before:top-[-18px] before:left-[-24px] before:bg-[url('/images/ticket-mobile-label-special.svg')]"
            : "",
          className,
        )}
        onClick={handleToggle}
      >
        <div
          className={clsx(
            `${color[0]} p-3 text-xl uppercase`,
            color === ticketColor.red ? "text-white" : "",
          )}
        >
          {title}
        </div>
        <div className="bg-[#F6F6F6] p-3 rounded-b-xl text-xl text-[#E4003D] font-bold uppercase">
          {price}
        </div>
      </div>
      {isOpen && (
        <div className="bg-white h-svh w-svw fixed top-0 left-0 z-10">
          <div
            className={`pt-[100px] pb-[30px] ${color[0]} flex flex-col items-center relative`}
          >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-2xl font-bold text-[#E4003D]">{price}</h3>
            {(showTrumpet || showSpecialLabel) && (
              <div
                className={clsx(
                  "w-[201px] h-[38px] absolute bottom-[-20px] px-[10px] uppercase text-white text-xl flex items-center justify-center font-bold",
                  showSpecialLabel
                    ? "bg-[url('/images/ticket-mobile-label-yellow.svg')]"
                    : "bg-[url('/images/ticket-mobile-label-red.svg')]",
                )}
              >
                {label}
              </div>
            )}
          </div>
          <div className="overflow-auto h-[calc(100%-202px)] pb-[130px]">
            <div className="mx-auto max-w-[500px] px-2 pt-[38px]">
              <p className="font-bold mb-1 text-center">{availablePeriod}</p>
              <p className="font-bold uppercase text-center">{`${t("original price")} ${originalPrice}`}</p>
              <div className="px-4">
                <p className="mt-4">{t("ticket content")}</p>
                <ul className="list-disc ml-6">
                  {content.map((item) => (
                    <li className="whitespace-pre-wrap mb-2" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {isGroupTicket && (
                <div className="text-center whitespace-pre-wrap mt-12 font-bold">
                  <Trans
                    t={t}
                    i18nKey="looking for partner"
                    values={{ ticketType: title }}
                    components={{
                      br: <br />,
                      a: (
                        <a
                          href={DNA_FB_LINK}
                          className="underline"
                          target="_blank"
                          rel="noreferrer"
                        />
                      ),
                    }}
                  />
                </div>
              )}
              <div className="flex flex-col items-center mt-12">
                <button
                  className="rounded-2xl bg-[#E74310] px-4 py-2 text-white text-xl font-bold min-w-[180px] mb-5 uppercase"
                  onClick={goToPurchaseTicket}
                >
                  {t("buy ticket")}
                </button>
                <button
                  className="rounded-2xl bg-[#1E1F1C] px-4 py-2 text-white text-xl font-bold min-w-[180px] mb-5 uppercase"
                  onClick={handleToggle}
                >
                  {t("back for more")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
