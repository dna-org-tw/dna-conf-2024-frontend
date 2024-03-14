import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Banner from "@/app/components/Banner";
import Agenda from "@/app/components/Agenda";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center gap-4 fixed top-0 left-0 bg-black/30 text-white p-8 m-4 z-10">
        <Link href="/en-US/2024">en-US</Link>
        <Link href="/zh-TW/2024">zh-TW</Link>
      </div>
      <Banner lang={lang} />
      <section className="w-full py-20 px-24">
        <HeaderTitleWithLine
          title={t("KEYNOTE SPEAKER")}
          lineColor="darkBlue"
        />
        <Speaker
          name="大瀬良 亮"
          nameEN="OSERA Ryo"
          title="幹事"
          imgSrc="/images/osera-ryo.png"
        />
      </section>
      <Agenda lang={lang} />
      <section className="w-full py-20 px-24">
        <HeaderTitleWithLine
          title={t("TRANSPORTATION INFORMATION")}
          lineColor="green"
        />
      </section>
      <section className="w-full py-20 px-24">
        <HeaderTitleWithLine title={t("CALL FOR SPONSOR")} lineColor="yellow" />
      </section>
    </main>
  );
}
