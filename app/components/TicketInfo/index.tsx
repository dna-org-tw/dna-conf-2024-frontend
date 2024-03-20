import TicketBlock from "./TicketBlock";
import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";

const color1 = "#FFD028";
const color2 = "#F9D2E5";
const color3 = "#10B8D9";

export default async function index({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  const isZhTw = lang === "zh-TW";

  return (
    <section className="mt-[140px] flex flex-col">
      <div className="hidden xl:flex">
        <TicketBlock
          lang={lang}
          color={color1}
          title={t("single ticket.title")}
          price={t("single ticket.price")}
          availablePeriod={t("single ticket.availablePeriod")}
          originalPrice={t("single ticket.originalPrice")}
          content={[t("single ticket.content1")]}
        />
        <TicketBlock
          lang={lang}
          color={color2}
          title={t("two person ticket.title")}
          price={t("two person ticket.price")}
          availablePeriod={t("two person ticket.availablePeriod")}
          originalPrice={t("two person ticket.originalPrice")}
          content={[
            t("two person ticket.content1"),
            t("two person ticket.content2"),
          ]}
          label={t("two person ticket.label")}
        />
        <TicketBlock
          lang={lang}
          color={color2}
          title={t("five person ticket.title")}
          price={t("five person ticket.price")}
          availablePeriod={t("five person ticket.availablePeriod")}
          originalPrice={t("five person ticket.originalPrice")}
          content={[
            t("five person ticket.content1"),
            t("five person ticket.content2"),
          ]}
        />
        <TicketBlock
          lang={lang}
          color={color3}
          title={t("single classic ticket.title")}
          price={t("single classic ticket.price")}
          availablePeriod={t("single classic ticket.availablePeriod")}
          originalPrice={t("single classic ticket.originalPrice")}
          content={[
            t("single classic ticket.content1"),
            t("single classic ticket.content2"),
            t("single classic ticket.content3"),
            t("single classic ticket.content4"),
          ]}
          label={t("single classic ticket.label")}
        />
      </div>
      <div className="mt-2 flex mx-4 h-[241px]">
        <div
          className="flex-none w-[381px] h-[241px] bg-no-repeat bg-contain pt-[46px] pr-[57px] pb-[25px] pl-[61px]"
          style={{ background: "url(/images/ticket-vip-bg.svg)" }}
        >
          <div className="h-[60%] flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white">
              {t("vip ticket.title")}
            </h2>
            <h3 className="text-3xl font-bold">{t("vip ticket.price")}</h3>
          </div>
          <div className="h-[40%] flex flex-col items-center justify-center">
            <p className="text-[#F9D2E5] font-bold">
              {t("vip ticket.availablePeriod")}
            </p>
            <p className="text-[#F9D2E5] font-bold">
              {t("vip ticket.originalPrice")}
            </p>
          </div>
        </div>
        <div className="flex-1 bg-[#F6F6F6] mt-[20px] rounded-r-2xl border-[5px] border-l-0 border-[#E4003D] flex">
          <div className="m-4 p-2 border border-[#E4003D] flex-1 flex">
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
    </section>
  );
}
