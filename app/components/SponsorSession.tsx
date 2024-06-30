import { useServerTranslation } from "@/i18n";
import Sponsor from "./Sponsor";
import { Lang } from "@/types/common";

const diamond = ["digigoldcard.png", "digitalnomad.png"];
const gold = ["chain.png"];
const copper = ["leo-travel.png"];
const special = ["zeabur.svg", "emoji.svg"];
const organizer = ["emoji.svg"];
const coHost = [
  "CrossroadsTaiwan.svg",
  "taiwan-kotlin-user-group.jpeg",
  "JDNA.png",
];
const community = [
  "sidd-blue.png",
  "Digitalnomadstaiwan.png",
  "tw_dnvillage.png",
  "thesingularity.png",
  "yugyo.png",
  "Manabu.svg",
  "Fukuoka.svg",
  "Dinsight.jpg",
];

export default async function SponsorSession({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  return (
    <div className="flex flex-col items-center gap-5 min-w-full min-h-0 md:px-20">
      <Sponsor sponsorType={t("sponsor.Diamond Sponsor")} sponsors={diamond} />
      <Sponsor sponsorType={t("sponsor.Gold Sponsor")} sponsors={gold} />
      <Sponsor sponsorType={t("sponsor.Copper Sponsor")} sponsors={copper} />
      <Sponsor sponsorType={t("sponsor.Special Sponsor")} sponsors={special} />
      <Sponsor sponsorType={t("sponsor.Organizer")} sponsors={organizer} />
      <Sponsor sponsorType={t("sponsor.Co-Host Partner")} sponsors={coHost} />
      <Sponsor
        sponsorType={t("sponsor.Community Partner")}
        sponsors={community}
      />
    </div>
  );
}
