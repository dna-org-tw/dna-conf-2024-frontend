import { useServerTranslation } from "@/i18n";
import Sponsor from "./Sponsor";
import { Lang } from "@/types/common";

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

export default async function SponsorSession({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  return (
    <div className="flex flex-col items-center gap-5 min-w-full min-h-0 md:px-20">
      <Sponsor sponsorType={t("sponsor.Diamond Sponsor")} sponsors={diamond} />
      <Sponsor sponsorType={t("sponsor.Gold Sponsor")} sponsors={gold} />
      <Sponsor sponsorType={t("sponsor.Copper Sponsor")} sponsors={copper} />
      <Sponsor sponsorType={t("sponsor.Special Sponsor")} sponsors={special} />
    </div>
  );
}
