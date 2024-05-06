import TicketBlock from "./TicketBlock";
import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import clsx from "clsx";
import TicketInfoMobile from "./TicketInfoMobile";
import { Trans } from "react-i18next/TransWithoutContext";

export const DNA_FB_LINK = "https://psee.io/5qfm8k";
export const PURCHASE_TICKET_LINK = "https://psee.io/5qfa4a";
const GOLDCARD_INFO_LINK =
  "https://dna.oen.tw/posts/2g318FmSQRI6uJEzVOrSxtbYApo";

export const ticketColor: { [key: string]: string[] } = {
  yellow: ["bg-single-ticket", "border-single-ticket"],
  pink: ["bg-group-ticket", "border-group-ticket"],
  blue: ["bg-classic-ticket", "border-classic-ticket"],
  red: ["bg-vip-ticket", "border-vip-ticket"],
} as const;

export const ticketType = {
  single: "single",
  twoPerson: "twoPerson",
  fivePerson: "fivePerson",
  singleClassic: "singleClassic",
  vip: "vip",
} as const;
export type TicketType = (typeof ticketType)[keyof typeof ticketType];

export default async function TicketInfo({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  const isZhTw = lang === "zh-TW";

  return (
    <div className="mt-[40px] xl:mt-[140px]  flex flex-col">
      <div className="hidden xl:block">
        <div className="flex">
          <TicketBlock
            type={ticketType.single}
            t={t}
            color={ticketColor.yellow}
            title={t("single ticket.title")}
            price={t("single ticket.price")}
            availablePeriod={t("single ticket.available period")}
            originalPrice={t("single ticket.original price")}
            content={[t("single ticket.content1")]}
          />
          <TicketBlock
            type={ticketType.twoPerson}
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
          />
          <TicketBlock
            type={ticketType.fivePerson}
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
          />
          <TicketBlock
            type={ticketType.singleClassic}
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
          />
        </div>
        <div className="flex mt-2 mx-4 h-[241px]">
          <div
            className="flex-none w-[381px] h-[241px] bg-no-repeat bg-contain pt-[46px] pr-[57px] pb-[25px] pl-[61px]"
            style={{ background: "url(/images/ticket-vip-bg.svg)" }}
          >
            <div className="h-[60%] flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-white uppercase">
                {t("vip ticket.title")}
              </h2>
              <h3 className="text-3xl font-bold">{t("vip ticket.price")}</h3>
            </div>
            <div className="h-[40%] flex flex-col items-center justify-center">
              <p
                className={clsx(
                  "text-[#F9D2E5] font-bold",
                  isZhTw ? "" : "text-sm"
                )}
              >
                {t("vip ticket.available period")}
              </p>
              <p
                className={clsx(
                  "text-[#F9D2E5] font-bold",
                  isZhTw ? "" : "text-sm"
                )}
              >
                {`${t("original price")} ${t("vip ticket.original price")}`}
              </p>
            </div>
          </div>
          <div
            className={`flex-1 bg-[#F6F6F6] mt-[20px] rounded-r-2xl border-[5px] border-l-0 ${ticketColor.red[1]} flex`}
          >
            <div className={`m-4 p-2 border ${ticketColor.red[1]} flex-1 flex`}>
              <div className="flex-none max-w-[60px] mr-2">
                {t("ticket content")}
              </div>
              <div className="flex-1 flex overflow-y-auto">
                {isZhTw ? (
                  <>
                    <ul className="list-disc ml-6 mr-6">
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content4")}
                      </li>
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content1")}
                      </li>
                    </ul>
                    <ul className="list-disc ml-6 mr-6">
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content2")}
                      </li>
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content3")}
                      </li>
                    </ul>
                    <ul className="list-disc ml-6 mr-6">
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content5")}
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="list-disc ml-6 mr-6">
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content4")}
                      </li>
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content1")}
                      </li>
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content2")}
                      </li>
                    </ul>
                    <ul className="list-disc ml-6 mr-6">
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content3")}
                      </li>
                      <li className="whitespace-pre-wrap mb-2">
                        {t("vip ticket.content5")}
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TicketInfoMobile lang={lang} />
      <div
        className={clsx(
          "flex flex-col lg:flex-row justify-center gap-y-10 text-center mt-16",
          isZhTw ? "tracking-[4px]" : ""
        )}
      >
        <div className="flex-1">
          <Trans
            t={t}
            i18nKey="looking for partner"
            values={{ ticketType: t("group tickets") }}
            components={{
              br: <br />,
              a: (
                <a
                  href={DNA_FB_LINK}
                  className={clsx(
                    "underline font-bold",
                    isZhTw ? "tracking-normal" : ""
                  )}
                  target="_blank"
                  rel="noreferrer"
                />
              ),
            }}
          />
        </div>
        <div className="flex-1">
          <Trans
            t={t}
            i18nKey="goldcard info"
            components={{
              br: <br />,
              a: (
                <a
                  href={GOLDCARD_INFO_LINK}
                  className={clsx(
                    "underline font-bold",
                    isZhTw ? "tracking-normal" : ""
                  )}
                  target="_blank"
                  rel="noreferrer"
                />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
