import { useServerTranslation } from "@/i18n"
import { Lang } from "@/types/common"
import HeaderTitleWithLine from "./HeaderTitleWithLine"

export default async function Agenda({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang)
  const isZhTw = lang === "zh-TW"
  const mobileClass = isZhTw ? "bg-mobile-TBD-zh" : "bg-mobile-TBD-en";
  const desktopClass = isZhTw ? "bg-desktop-TBD-zh" : "bg-desktop-TBD-en";

  return (
    <section
      className={`relative w-full py-10 px-6 h-[270px] sm:h-[320px] md:h-[370px] lg:h-[420px] max-h-[420px] bg-contain bg-no-repeat bg-bottom bg-[#F6F6F6] ${mobileClass} md:${desktopClass}`}
    >
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
    </section>
  )
}
