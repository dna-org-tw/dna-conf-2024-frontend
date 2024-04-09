import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import Image from "next/image";

export default async function Agenda({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  const isZhTw = lang === "zh-TW";
  return (
    <section
      id="agenda"
      className={`relative w-full py-20 px-6 sm:h-[320px] md:h-[370px] lg:h-[420px] max-h-[420px] bg-cover bg-no-repeat bg-bottom bg-[#F6F6F6] bg-[url('/images/coming-soon-bg.png')]`}
    >
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
      <div className="md:text-2xl font-bold md:whitespace-pre-wrap text-center md:pt-20">
        {t("coming soon stay tuned")}
      </div>
      <Image
        src="/images/騎士.png"
        alt="knight"
        width={166}
        height={241}
        className="absolute bottom-[10%] left-[20%] w-[54px] md:w-[100px] lg:w-[166px]"
      />
    </section>
  );
}
