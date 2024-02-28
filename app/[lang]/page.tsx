import Image from "next/image";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";

export default async function Home({ params: { lang } }: { params: { lang: 'en-US' | 'zh-TW' } }) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-4 mt-2">
        <Link href="/en-US">en-US</Link>
        <Link href="/zh-TW">zh-TW</Link>
      </div>
      <div>
        <p className="text-4xl font-extrabold text-center">{dict.tdna}</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/2024">2024</Link>
          <Link href="/2025">2025</Link>
        </div>
      </div>
    </main>
  );
}
