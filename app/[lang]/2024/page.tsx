import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";

export default async function Home({
  params: { lang },
}: {
  params: LangParams;
}) {
  // const dict = await getDictionary(lang)
  const { t } = await useServerTranslation(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p className="text-4xl font-extrabold text-center">{t("conf")}</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/en-US/2024">en-US</Link>
          <Link href="/zh-TW/2024">zh-TW</Link>
        </div>
      </div>
      <Speaker
        name="大瀬良 亮"
        nameEN="OSERA Ryo"
        title="幹事"
        imgSrc="/images/osera-ryo.png"
      />
    </main>
  );
}
