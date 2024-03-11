import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Guidelines from "@/app/components/guidelines";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  // const dict = await getDictionary(lang)
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div>
        <p className="text-4xl font-extrabold text-center">{t("conf")}</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/en-US/2024">en-US</Link>
          <Link href="/zh-TW/2024">zh-TW</Link>
        </div>
      </div>
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
          <div className="App container">
            <Guidelines
              open
              title={t("Ticket Purchase Guidelines")}
              buttonText={{
                expand: t("expand"),
                collapse: t("collapse")
              }}
            >
            {t("notice")}
            </Guidelines>
          </div>
      </section>
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
