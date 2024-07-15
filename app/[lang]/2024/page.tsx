import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Transportation from "@/app/components/transportation";
import Guidelines from "@/app/components/guidelines";
import Banner from "@/app/components/Banner";
import Agenda from "@/app/components/Agenda";
import CountDownTimer from "@/app/components/CountDownTimer";
import HighLights from "@/app/components/HighLights";
import ColorfulButton from "@/app/components/ColorfulButton";
import TicketInfo from "@/app/components/TicketInfo";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import Image from "next/image";
import { getSessions, getSpeakers } from "@/lib/notion";
import SpeakerSection from "@/app/components/SpeakerSection";
import SponsorSession from "@/app/components/SponsorSession";
import Sponsor from "@/app/components/Sponsor";

const organizer = [{ image: "TDNA.svg", link: "https://dna.oen.tw/" }];
const coHost = [
  { image: "JDNA.png", link: "https://japandigitalnomad.com/" },
  {
    image: "CrossroadsTaiwan.svg",
    link: "https://www.facebook.com/CrossroadsTaiwan",
  },
  {
    image: "taiwan-kotlin-user-group.jpeg",
    link: "https://taiwan-kotlin-user-group.github.io/",
  },
];

const community = [
  {
    image: "Digitalnomadstaiwan.png",
    link: "https://linktr.ee/digitalnomadstaiwan",
  },
  {
    image: "tw_dnvillage.png",
    link: "https://www.instagram.com/tw_dnvillage?igsh=MXY0ODMxeHNhem9zbA==",
  },
  { image: "yugyo.png", link: "#" },
  { image: "Manabu.svg", link: "https://digitalnomads.jp/" },
  { image: "Fukuoka.svg", link: "https://www.linkedin.com/groups/13972107" },
  { image: "Dinsight.jpg", link: "https://www.facebook.com/cryptodinsight" },
  { image: "sidd-blue.png", link: "https://www.instagram.com/sidd.blue/" },
  { image: "thesingularity.png", link: "https://thesingularity.tw/" },
  {
    image: "LaVitaNomad.svg",
    link: "https://www.instagram.com/lavita_nomad?igsh=djZleTJqYjFhNXU2",
  },
  {
    image: "JustCo.svg",
    link: "https://www.justcoglobal.com/tw/",
  },
  {
    image: "WorkationLab.png",
    link: "https://workationlab.com/",
  },
  {
    image: "Co-WorkingOnline.svg",
    link: "https://www.instagram.com/co_working_online/",
  },
];

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  const { t } = await useServerTranslation(lang);

  const speakers = await getSpeakers();
  const sessions = await getSessions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ScrollToTopButton />
      <Banner lang={lang} />
      <section className="fixed bottom-0 z-30 w-full md:h-1/4 bg-[url('/images/mobile-countdown-background.png')] bg-cover md:relative md:py-12 md:bg-[url('/images/countdown-background.png')] md:bg-contain">
        <CountDownTimer lang={lang} />
      </section>
      <section
        id="speaker"
        className=" pt-6 md:pt-20 pb-16 md:pb-6 px-6 md:px-24"
      >
        <SpeakerSection
          title={t("KEYNOTE SPEAKER")}
          speakers={speakers}
          sessions={sessions}
          lang={lang}
        />
      </section>
      <section
        id="agenda"
        className="w-full pt-6 md:pt-20 pb-16 md:pb-6 px-6 md:px-24"
      >
        <Agenda lang={lang} speakers={speakers} sessions={sessions} />
      </section>
      <HighLights lang={lang} />
      <section
        id="ticket"
        className="w-full px-6 md:px-24 pt-16 md:pt-20 pb-16 md:pb-6"
      >
        <HeaderTitleWithLine title={t("TICKET INFO")} lineColor="cyan" />
        <TicketInfo lang={lang} />
        <div className="flex flex-row justify-center items-end mt-9 gap-8">
          <Image
            className="hidden lg:block"
            src="/images/knight.jpg"
            alt="Knight"
            width={118}
            height={171}
          />
          <Image
            className="hidden lg:block"
            src="/images/rogue.jpg"
            alt="Rogue"
            width={124}
            height={100}
          />
          <ColorfulButton href="https://psee.io/5qfa4a">
            {t("BUY TICKET")}
          </ColorfulButton>

          <Image
            className="hidden lg:block"
            src="/images/wizard.jpg"
            alt="Wizard"
            width={107}
            height={128}
          />
          <Image
            className="hidden lg:block"
            src="/images/bard.jpg"
            alt="bard"
            width={69}
            height={113}
          />
        </div>
        <div className="flex flex-col mt-6">
          <Guidelines
            open
            title={[
              t("TICKET PURCHASE GUIDE"),
              t("COC.title"),
              t("NEED HELP.title"),
            ]}
            cocParagraph={[
              t("COC.paragraph1"),
              t("COC.paragraph2"),
              t("COC.paragraph3"),
              t("COC.paragraph4"),
            ]}
            needHelpParagraph={[t("NEED HELP.paragraph")]}
          >
            {Array.from({ length: 7 }, (_, index) => t(`notice${index + 1}`))}
          </Guidelines>
        </div>
      </section>
      <section
        id="transportation"
        className="w-full px-6 md:px-24 pt-16 md:pt-20 pb-16 md:pb-6"
      >
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
      <section id="partners" className="w-full px-6 md:px-24 pt-16 md:pt-20">
        <HeaderTitleWithLine title={t("PARTNERS")} lineColor="brightPink" />
        <div className="flex flex-col items-center gap-5 min-w-full min-h-0 md:px-20">
          <Sponsor sponsorType={t("sponsor.Organizer")} sponsors={organizer} />
          <Sponsor
            sponsorType={t("sponsor.Co-Host Partner")}
            sponsors={coHost}
          />
        </div>
      </section>
      <section id="sponsors" className="w-full px-6 md:px-24 pt-16 md:pt-20">
        <HeaderTitleWithLine title={t("SPONSORS")} lineColor="brightPink" />
        <SponsorSession lang={lang} />
      </section>
      <section
        id="community-partner"
        className="w-full px-6 md:px-24 pt-16 md:pt-20 pb-24 md:pb-12 lg:pb-[500px] xl:pb-[900px]"
      >
        <HeaderTitleWithLine
          title={t("COMMUNITY PARTNERS")}
          lineColor="brightPink"
        />
        <div className="flex flex-col items-center gap-5 min-w-full min-h-0 md:px-20">
          <Sponsor sponsors={community} isCommunity />
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
export const revalidate = 60;
