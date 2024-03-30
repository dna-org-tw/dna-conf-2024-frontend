import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Guidelines from "@/app/components/guidelines";
import Banner from "@/app/components/Banner";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center gap-4 fixed top-0 left-0 bg-black/30 text-white p-8 m-4">
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
      <section className="w-full bg-[#D3D3D3] py-20 px-24">
        <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
      </section>
      <div className="flex flex-col">
        <Guidelines open title={t("TICKET PURCHASE GUIDE")}>
          {Array.from({ length: 7 }, (_, index) => t(`notice${index + 1}`))}
        </Guidelines>
      </div>
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
