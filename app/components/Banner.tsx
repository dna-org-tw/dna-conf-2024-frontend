import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Lang } from "@/types/common";
import { useServerTranslation } from "@/i18n";

export default async function Banner({ lang }: { lang: Lang }) {
  const isZhTw = lang === "zh-TW";
  const { t } = await useServerTranslation(lang);
  return (
    <section
      id="event"
      className="w-full bg-right-top bg-no-repeat bg-w-100% lg:py-8"
      style={{ backgroundImage: "url(/images/banner-background.png)" }}
    >
      <div className="container md:container pt-36 md:pt-28">
        <div
          className={clsx(
            "relative",
            "mx-auto lg:ml-[120px]",
            isZhTw
              ? "w-[260px] h-[142px] sm:w-[370px] sm:h-[209px] md:w-[495px] md:h-[279px]"
              : "w-[288px] h-[126px] sm:w-[465px] sm:h-[204px] md:w-[620px] md:h-[273px]"
          )}
        >
          <Image
            src={
              isZhTw
                ? "/images/banner-slogan-zh.svg"
                : "/images/banner-slogan-en.svg"
            }
            alt="adventuring in 2024"
            objectFit="cover"
            fill
          />
        </div>
        {/* zh-tw desktop */}
        <div
          className={clsx(
            isZhTw ? "hidden md:flex" : "hidden",
            "mt-12 items-center gap-x-10 lg:mx-[120px]"
          )}
        >
          <div className="flex flex-col  gap-y-2 min-w-[287px]">
            <h2 className="text-4xl tracking-[4px] font-bold">
              {t("conf date")}
            </h2>
            <h2 className="text-4xl tracking-[4px] font-bold">
              {t("conf time")}
            </h2>
            <h2 className="flex gap-x-2 items-center font-bold text-2xl tracking-[4px]">
              <Image
                src="/images/place-icon.svg"
                width={16}
                height={21}
                alt="place icon"
              />
              {t("conf location")}
            </h2>
          </div>
          <div
            className="flex w-[30px] h-[180px] bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: "url(/images/divider-vertical.svg)" }}
          />
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl tracking-[10px]">{t("conf")}</h1>
            <p>{t("conf description")}</p>
          </div>
        </div>
        {/* en-us desktop */}
        <div
          className={clsx(
            isZhTw ? "hidden" : "hidden md:flex",
            "flex-col mt-12 items-center gap-x-10 lg:mx-[120px] px-4"
          )}
        >
          <div className="flex flex-col gap-y-2">
            <h2
              className={clsx(
                "flex flex-row gap-x-2 font-bold text-2xl justify-center tracking-[4px] text-center"
              )}
            >
              <Image
                src="/images/time-icon.svg"
                width={16}
                height={21}
                alt="time icon"
              />
              {`${t("conf date")} ${t("conf time")}`}
            </h2>
            <h2
              className={clsx(
                "flex flex-row gap-x-2 font-bold text-2xl justify-center text-center"
              )}
            >
              <Image
                src="/images/place-icon.svg"
                width={16}
                height={21}
                alt="place icon"
              />
              {t("conf location")}
            </h2>
          </div>
          <div
            className="flex w-[300px] h-[14px] bg-no-repeat bg-center bg-contain my-7"
            style={{ backgroundImage: "url(/images/divider-horizontal.svg)" }}
          />
          <div className={clsx(isZhTw ? "flex flex-col" : "")}>
            <h1
              className={clsx(
                "text-2xl tracking-[4px] text-center font-bold",
                isZhTw ? "mb-3" : "inline mb-0"
              )}
            >
              {t("conf")}
            </h1>
            <p className={clsx(isZhTw ? "" : "inline")}>
              {t("conf description")}
            </p>
          </div>
        </div>
        {/* mobile */}
        <div className="block md:hidden mt-12">
          <div className="px-2 flex justify-center">
            <h2 className="font-bold text-4xl uppercase">
              {t("conf date short")}
            </h2>
            <h2 className="text-[#C8C8C8] text-lg uppercase rotate-90 ml-[-12px]">
              {t("conf day")}
            </h2>
            <h2 className="ml-3 w-[45px] font-bold text-[16px] leading-none mt-[4px]">
              {t("conf time")}
            </h2>
          </div>
          <h2
            className={clsx(
              isZhTw ? "tracking-[4px]" : "",
              "mx-auto flex justify-center mt-4 font-bold text-lg text-center max-w-[360px]"
            )}
          >
            {t("conf location")}
          </h2>
          <div
            className="mx-auto flex w-[173px] h-[8px] bg-no-repeat bg-center bg-contain my-12"
            style={{ backgroundImage: "url(/images/divider-horizontal.svg)" }}
          />
          <div className="text-[#5C5C5C]">
            <h1
              className={clsx(
                isZhTw ? "text-[#F4B013]" : "",
                "lg:text-xl lg:tracking-[2px] font-bold inline mb-0"
              )}
            >
              {t("conf")}
            </h1>
            <p className="inline">{` ${t("conf description")}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
