"use sever";

import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import clsx from "clsx";
import { Trans } from "react-i18next/TransWithoutContext";

const prefixStyle =
  "before:content-[''] before:absolute before:w-[100px] before:h-[50px] before:z-[-1] before:left-[-45px] before:bottom-0 before:skew-x-[-45deg]";
const numberStyle = "text-[64px] inline-block px-2 mt-[-10px] font-bold";

export default async function HighLights({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);

  return (
    <section className="w-full px-3 md:px-10 pt-8 md:pt-20 pb-4 md:pb-6 bg-no-repeat bg-cover bg-center bg-[url(/images/highlights-background.svg)] lg:bg-none">
      <div className="flex flex-col lg:items-center">
        <h2 className="text-2xl mx-10 lg:text-3xl lg:text-center font-bold tracking-[10%] mb-6 lg:mb-[70px] whitespace-pre-wrap lg:whitespace-normal leading-loose lg:leading-normal">
          {t("ENGAGE AND SHAPE OUR FUTURE")}
        </h2>
        <div className="hidden lg:block">
          <p
            className={clsx(
              "mb-14 text-xl tracking-[2px] flex items-center relative",
              prefixStyle,
              "before:bg-[#FFD028]"
            )}
          >
            <Trans i18nKey="2024 is our 1st Digital Nomad Conference" t={t}>
              2024 是我們第
              <span className={clsx(numberStyle, "text-[#10B8D9]")}>1</span>
              屆數位遊牧者大會
            </Trans>
          </p>
          <p
            className={clsx(
              "mb-14 text-xl tracking-[2px] flex items-center relative",
              prefixStyle,
              "before:bg-[#004E9D]"
            )}
          >
            <Trans i18nKey="We connect digital nomad enthusiasts" t={t}>
              <span className="bg-highlight-text-gradient bg-clip-text text-transparent">
                我們連結
              </span>
              <span className={clsx(numberStyle, "text-[#E74310]")}>150+</span>
              位數位遊牧愛好者
            </Trans>
          </p>
          <p
            className={clsx(
              "mb-14 text-xl tracking-[2px] flex items-center relative",
              prefixStyle,
              "before:bg-[#F9D2E5]"
            )}
          >
            <Trans i18nKey="We present non-stop exciting topics" t={t}>
              呈現不間斷的
              <span className={clsx(numberStyle, "text-[#00993E]")}>11</span>
              場精采講題
            </Trans>
          </p>
          <p
            className={clsx(
              "mb-14 text-xl tracking-[2px] flex items-center relative",
              prefixStyle,
              "before:bg-[#00993E]"
            )}
          >
            <Trans i18nKey="We have selected booths" t={t}>
              <span className="bg-highlight-text-gradient bg-clip-text text-transparent">
                現場加碼
              </span>
              <span className={clsx(numberStyle, "text-[#C54090]")}>6</span>
              家精選展位
            </Trans>
          </p>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <ul className="list-[square] pl-6">
            <li className="pl-1 text-lg mb-4">
              <Trans i18nKey="2024 is our 1st Digital Nomad Conference" t={t}>
                2024 是我們第<span className="px-2">1</span>屆數位游牧者大會
              </Trans>
            </li>
            <li className="pl-1 text-lg mb-4">
              <Trans i18nKey="We connect digital nomad enthusiasts" t={t}>
                <span>我們連結</span>
                <span className="px-2">150+</span>
                位數位遊牧愛好者
              </Trans>
            </li>
            <li className="pl-1 text-lg mb-4">
              <Trans i18nKey="We present non-stop exciting topics" t={t}>
                呈現不間斷的
                <span className="px-2">11</span>
                場精采講題
              </Trans>
            </li>
            <li className="pl-1 text-lg mb-4">
              <Trans i18nKey="We have selected booths" t={t}>
                <span>現場加碼</span>
                <span className="px-2">6</span>
                家精選展位
              </Trans>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
