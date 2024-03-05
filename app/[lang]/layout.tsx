import type { Metadata } from "next";
import "../globals.css";
import I18nTranslateProvider from "@/context/I18nTranslateProvider";
import { LangParams } from "@/types/common";
import Footer from "../components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Taiwan Digital Nomad Association",
  description: "The official website of the Taiwan Digital Nomad Association",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  return (
    <html lang={params.lang}>
      <I18nTranslateProvider lng={params.lang}>
        <body>
          <div className="relative">
            {children}
            <Footer />

            <Image
              src="/images/footer-bg.png"
              alt=""
              fill
              className="absolute w-screen -z-10 object-contain object-right-bottom"
            />
          </div>
        </body>
      </I18nTranslateProvider>
    </html>
  );
}
