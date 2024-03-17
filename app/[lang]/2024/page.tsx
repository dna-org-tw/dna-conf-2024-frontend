import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Transportation from "@/app/components/transportation";
import Guidelines from "@/app/components/guidelines";
import Banner from "@/app/components/Banner";
import Agenda from "@/app/components/Agenda";
import CountDownTimer from "@/app/components/CountDownTimer";
import HighLights from "@/app/components/HighLights";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-20">
      <div className="flex justify-center gap-4 fixed top-0 left-0 bg-black/30 text-white p-8 m-4 z-10">
        <Link href="/en-US/2024">en-US</Link>
        <Link href="/zh-TW/2024">zh-TW</Link>
      </div>
      <Banner lang={lang} />
      <section className="w-full py-12 px-24 bg-[url('/images/countdown-background.png')] bg-contain">
        <CountDownTimer lang={lang} />
      </section>
      <section className="w-full px-24">
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
      <HighLights lang={lang} />
      <section className="w-full px-24">
        <HeaderTitleWithLine title={t("TICKET INFO")} lineColor="cyan" />
      </section>
      <section className="w-full px-24">
        <div className="App container">
          <Guidelines
            open
            title={t("TICKET PURCHASE GUIDE")}
            lang={lang}
            buttonText={{
              expand: t("expand"),
              collapse: t("collapse"),
            }}
          >
            {Array.from({ length: 7 }, (_, index) => t(`notice${index + 1}`))}
          </Guidelines>
        </div>
      </section>
      <section className="w-full py-20 px-8 sm:px-24">
        <HeaderTitleWithLine
          title={t("TRANSPORTATION INFORMATION")}
          lineColor="green"
        />
        <div className="flex flex-col">
          <Transportation
            location={t("TRANSPORTATION_TITLE")}
            address={t("TRANSPORTATION_ADDRESS")}
            detail={t("TRANSPORTATION_DESCRIPTION")}
          />
        </div>
      </section>
      <section className="w-full px-24">
        <HeaderTitleWithLine title={t("CALL FOR SPONSOR")} lineColor="yellow" />
      </section>
    </main>
  );
}
