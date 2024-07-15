import { useServerTranslation } from "@/i18n";
import Sponsor from "./Sponsor";
import { Lang } from "@/types/common";

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
const diamond = [
  { image: "digigoldcard.png", link: "https://digigoldcard.tca.org.tw/" },
  { image: "digitalnomad.png", link: "https://digitalnomad.press/" },
  { image: "TLI.svg", link: "https://tli1956.com/?lang=tc" },
];
const gold = [
  { image: "chain.png", link: "https://www.chain.tw" },
  { image: "SWise.png", link: "https://swise.tw/" },
  { image: "RTM.svg", link: "https://sites.google.com/rtmasia.org/home/" },
];
const copper = [
  { image: "leo-travel.svg", link: "https://www.leo-travel.idv.tw/" },
  { image: "xfriend.svg", link: "#" },
];
const special = [
  { image: "emoji.svg", link: "https://www.instagram.com/emoji0701/" },
  { image: "zeabur.svg", link: "https://zeabur.com/zh-TW" },
  { image: "routea0601.svg", link: "https://www.instagram.com/routea0601/" },
  { image: "smpu.svg", link: "https://smpu.com.tw/" },
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

export default async function SponsorSession({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  return (
    <div className="flex flex-col items-center gap-5 min-w-full min-h-0 md:px-20">
      <Sponsor sponsorType={t("sponsor.Organizer")} sponsors={organizer} />
      <Sponsor sponsorType={t("sponsor.Co-Host Partner")} sponsors={coHost} />
      <Sponsor sponsorType={t("sponsor.Diamond Sponsor")} sponsors={diamond} />
      <Sponsor sponsorType={t("sponsor.Gold Sponsor")} sponsors={gold} />
      <Sponsor sponsorType={t("sponsor.Copper Sponsor")} sponsors={copper} />
      <Sponsor sponsorType={t("sponsor.Special Sponsor")} sponsors={special} />
      <Sponsor
        sponsorType={t("sponsor.Community Partner")}
        sponsors={community}
        isCommunity
      />
    </div>
  );
}
