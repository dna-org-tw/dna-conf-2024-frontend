import type { Metadata } from "next";
import "../globals.css";
import I18nTranslateProvider from "@/context/I18nTranslateProvider";
import { LangParams } from "@/types/common";
import Footer from "../components/footer";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

export function generateMetadata( { params }: { params: LangParams } ): Metadata {
  switch (params.lang) {
    case "en-US":
      return {
        metadataBase: new URL('https://conf.dna.org.tw'),
        title: "TDNA Taiwan Digital Nomad Association",
        description: "Facilitating the career development and networking of digital nomads by integrating resources from various companies. We make the digital nomad life less lonely!",
        icons: [{ url: "/favicon.ico", type: "image/x-icon" }],
        openGraph: {
          locale: "en_US",
          type: "website",
          title: "TDNA Taiwan Digital Nomad Association",
          description: "Facilitating the career development and networking of digital nomads by integrating resources from various companies. We make the digital nomad life less lonely!",
          images: [{ url: "/meta.jpg" }],
          url: "http://conf.dna.org.tw/en-US/2024",
        },
        twitter: {
          title: "TDNA Taiwan Digital Nomad Association",
          description: "Facilitating the career development and networking of digital nomads by integrating resources from various companies. We make the digital nomad life less lonely!",
          images: [{ url: "/meta.jpg" }],
          card: "summary_large_image",
        }
      };
    default:
      return {
        metadataBase: new URL('https://conf.dna.org.tw'),
        title: "TDNA 台灣數位遊牧者協會",
        description: "透過整合各個公司的資源，協助數位遊牧者的職涯發展與交流。 我們讓數位遊牧生活不再孤單！",
        icons: [{ url: "/favicon.ico", type: "image/x-icon" }],
        openGraph: {
          locale: "zh-TW",
          type: "website",
          title: "TDNA 台灣數位遊牧者協會",
          description: "透過整合各個公司的資源，協助數位遊牧者的職涯發展與交流。 我們讓數位遊牧生活不再孤單！",
          images: [{ url: "/meta.jpg" }],
          url: "http://conf.dna.org.tw/zh-TW/2024",
        },
        twitter: {
          title: "TDNA 台灣數位遊牧者協會",
          description: "透過整合各個公司的資源，協助數位遊牧者的職涯發展與交流。 我們讓數位遊牧生活不再孤單！",
          images: [{ url: "/meta.jpg" }],
          card: "summary_large_image",
        }
      };
  }
}

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
        <GoogleAnalytics gaId="G-04W60ZKKVP" />
      </I18nTranslateProvider>
    </html>
  );
}
