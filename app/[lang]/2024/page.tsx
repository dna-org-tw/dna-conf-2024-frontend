import Image from "next/image";
import { getDictionary } from "@/dictionaries";
import Link from "next/link";

export default async function Home({ params: { lang } }: { params: { lang: 'en-US' | 'zh-TW' } }) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link href="/" className="text-center">Back</Link>
        <p className="text-4xl font-extrabold text-center">{dict.conf}</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/en-US/2024">en-US</Link>
          <Link href="/zh-TW/2024">zh-TW</Link>
        </div>
      </div>
    </main>
  );
}
