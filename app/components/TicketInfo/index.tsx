import TicketBlock from "./TicketBlock";
import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import clsx from "clsx";
import TicketInfoMobile from "./TicketInfoMobile";

export const ticketColor = {
  yellow: "#FFD028",
  pink: "#F9D2E5",
  blue: "#10B8D9",
  red: "#E4003D",
} as const;

export default async function TicketInfo({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  const isZhTw = lang === "zh-TW";

  return (
    <div className="mt-[140px] flex flex-col">
      <div className="hidden xl:flex">
        <TicketBlock
          t={t}
          color={ticketColor.yellow}
          title={t("single ticket.title")}
          price={t("single ticket.price")}
          availablePeriod={t("single ticket.available period")}
          originalPrice={t("single ticket.original price")}
          content={[t("single ticket.content1")]}
        />
        <TicketBlock
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
          t={t}
          color={ticketColor.blue}
          title={t("single classic ticket.title")}
          price={t("single classic ticket.price")}
          availablePeriod={t("single classic ticket.available period")}
          originalPrice={t("single classic ticket.original price")}
          content={[
            t("single classic ticket.content1"),
            t("single classic ticket.content2"),
            t("single classic ticket.content3"),
            t("single classic ticket.content4"),
          ]}
          label={t("single classic ticket.label")}
        />
      </div>
      <div className="hidden xl:flex mt-2 mx-4 h-[241px]">
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
                isZhTw ? "" : "text-sm",
              )}
            >
              {t("vip ticket.available period")}
            </p>
            <p
              className={clsx(
                "text-[#F9D2E5] font-bold",
                isZhTw ? "" : "text-sm",
              )}
            >
              {`${t("original price")} ${t("vip ticket.original price")}`}
            </p>
          </div>
        </div>
        <div
          className={`flex-1 bg-[#F6F6F6] mt-[20px] rounded-r-2xl border-[5px] border-l-0 border-[${ticketColor.red}] flex`}
        >
          <div
            className={`m-4 p-2 border border-[${ticketColor.red}] flex-1 flex`}
          >
            <div className="flex-none max-w-[60px] mr-2">
              {t("ticket content")}
            </div>
            <div className="flex-1 flex overflow-y-auto">
              {isZhTw ? (
                <>
                  <ul className="list-disc ml-6 mr-6">
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
                      {t("vip ticket.content4")}
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
                      {t("vip ticket.content1")}
                    </li>
                    <li className="whitespace-pre-wrap mb-2">
                      {t("vip ticket.content2")}
                    </li>
                    <li className="whitespace-pre-wrap mb-2">
                      {t("vip ticket.content3")}
                    </li>
                  </ul>
                  <ul className="list-disc ml-6 mr-6">
                    <li className="whitespace-pre-wrap mb-2">
                      {t("vip ticket.content4")}
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
      <TicketInfoMobile lang={lang} />
    </div>
  );
}
