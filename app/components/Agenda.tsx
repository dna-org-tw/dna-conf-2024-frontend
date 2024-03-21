import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import HeaderTitleWithLine from "./HeaderTitleWithLine";

export default async function Agenda({ lang }: { lang: Lang }) {
  const isZhTw = lang === "zh-TW";
  const { t } = await useServerTranslation(lang);
  return (
    <section
      className="w-full py-20 px-6 sm:px-24 h-[500px] bg-[#F6F6F6] bg-w-100% bg-no-repeat bg-bottom bg-[100% auto]"
      style={{
        backgroundImage: isZhTw
          ? "url(/images/TBD-zh.png)"
          : "url(/images/TBD-en.png)",
      }}
    >
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
    </section>
  );
}
