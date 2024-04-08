import React from "react";
import { TFunction } from "i18next";
import clsx from "clsx";
import { Trans } from "react-i18next/TransWithoutContext";
import { DNA_FB_LINK, PURCHASE_TICKET_LINK } from "./index";
import Image from "next/image";

export default function TicketButtonAndDialog({
  t,
  disabled = false,
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
  disabled?: boolean;
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

  const handleButtonClick = () => {
    if (disabled) {
      return;
    }
    handleToggle();
  };

  return (
    <>
      <div
        className={clsx(
          `rounded-2xl border-4 ${color[1]} text-center relative`,
          showTrumpet
            ? "before:content-[''] before:absolute before:w-[48px] before:h-[48px] before:top-[-18px] before:left-[-20px] before:bg-[url('/images/ticket-mobile-label-trumpet.svg')]"
            : "",
          showSpecialLabel
            ? "before:content-[''] before:absolute before:w-[56px] before:h-[56px] before:top-[-18px] before:left-[-24px] before:bg-[url('/images/ticket-mobile-label-special.svg')]"
            : "",
          className,
          disabled ? "cursor-default" : "cursor-pointer",
        )}
        onClick={handleButtonClick}
      >
        <div
          className={clsx(
            `${color[0]} p-3 text-xl uppercase`,
            color[0] === "bg-vip-ticket" ? "text-white" : "",
          )}
        >
          {title}
        </div>
        <div className="bg-[#F6F6F6] p-3 rounded-b-xl text-xl text-[#E4003D] font-bold uppercase">
          {price}
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#757575cc] h-lvh w-lvw fixed top-0 left-0 z-10 flex items-center justify-center">
          <div className="bg-white h-[calc(100%-160px)] w-[85%] mt-[40px] lg:mt-[120px] rounded-lg">
            <div
              className={`pt-[30px] pb-[30px] ${color[0]} flex flex-col items-center relative rounded-t-lg`}
            >
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <h3
                className={clsx(
                  "text-2xl font-bold ",
                  color[0] === "bg-vip-ticket"
                    ? "text-white"
                    : "text-[#E4003D]",
                )}
              >
                {price}
              </h3>
              <p className="line-through uppercase text-center">{`${t("original price")} ${originalPrice}`}</p>
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
              <button onClick={handleToggle}>
                <Image
                  src="/images/close.svg"
                  alt="close button"
                  width={48}
                  height={48}
                  className="absolute top-[-20px] right-[-20px]"
                />
              </button>
            </div>
            <div className="overflow-auto h-[calc(100%-156px)] pb-[80px]">
              <div className="mx-auto max-w-[500px] px-2 pt-[38px]">
                <p className="font-bold mb-1 text-center text-[#E74310] text-lg">
                  {availablePeriod}
                </p>
                <div className="px-4">
                  <p className="mt-4 text-center text-[#757575] text-lg font-bold">
                    {t("ticket content")}
                  </p>
                  <ul className="">
                    {content.map((item) => (
                      <li
                        className="whitespace-pre-wrap mb-2 text-[#757575] text-center"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {isGroupTicket && (
                  <div className="text-center whitespace-pre-wrap mt-12 font-bold text-[#757575]">
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
                    className="rounded-full bg-[#E74310] py-2 text-white text-2xl font-bold min-w-[220px] mb-5 uppercase"
                    onClick={goToPurchaseTicket}
                  >
                    {t("buy ticket")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
