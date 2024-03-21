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
import { Button } from "@/components/ui/button";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-y-20">
      {/* <div className="flex justify-center gap-4 fixed top-0 left-0 bg-black/30 text-white p-8 m-4 z-10">
        <Link href="/en-US/2024">en-US</Link>
        <Link href="/zh-TW/2024">zh-TW</Link>
      </div> */}
      <Banner lang={lang} />
      <section className="w-full py-12 px-24 bg-[url('/images/countdown-background.png')] bg-contain">
        <CountDownTimer lang={lang} />
      </section>
      <section className="w-full px-6 sm:px-24">
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
      <section className="w-full px-6 sm:px-24">
        <div className="flex justify-center items-center max-w-[500px] mx-auto">
          <h1 className="lg:mx-2 mx-0 lg:whitespace-nowrap text-[32px] flex-2 text-black text-center font-bold">
            {t("ENGAGE AND SHAPE OUR FUTURE ")}
          </h1>
        </div>
      </section>
      <HighLights lang={lang} />
      <section className="w-full px-6 sm:px-24">
        <HeaderTitleWithLine title={t("TICKET INFO")} lineColor="cyan" />
        <div className="flex flex-col items-center">
          <div className="bg-[url('/images/button-bg.png')] bg-contain rounded-[40px] p-3">
            <Button
              asChild
              variant="ghost"
              className="bg-white rounded-[40px] text-4xl font-bold tracking-wider px-12 py-8"
            >
              <Link
                href="https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789"
                target="_blank"
              >
                {t("BUY TICKET")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full px-6 sm:px-24">
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
      </section>
      <section className="w-full py-20 px-6 sm:px-24">
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
      <section className="w-full px-6 sm:px-24">
        <HeaderTitleWithLine title={t("CALL FOR SPONSOR")} lineColor="yellow" />
      </section>
    </main>
  );
}
