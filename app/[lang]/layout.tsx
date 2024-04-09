import type { Metadata } from "next";
import "../globals.css";
import I18nTranslateProvider from "@/context/I18nTranslateProvider";
import { LangParams } from "@/types/common";
import Footer from "../components/footer";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

export function generateMetadata({ params }: { params: LangParams }): Metadata {
	switch (params.lang) {
		case "en-US":
			return {
				metadataBase: new URL("https://conf.dna.org.tw"),
				title:
					"TDNA Taiwan Digital Nomad Conference 2024 - Exploring the Infinite Possibilities of Future Work",
				description:
					"TDNA 2024 is a premier gathering designed for digital nomads and remote work enthusiasts, offering a platform for learning, sharing, and innovation. Join us to explore the future trends of remote working!",
				icons: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
				openGraph: {
					locale: "en_US",
					type: "website",
					title:
						"TDNA Taiwan Digital Nomad Conference 2024 - Exploring the Infinite Possibilities of Future Work",
					description:
						"Join TDNA 2024 to discover the latest trends in remote working, network with like-minded professionals, and create new opportunities for work and life.",
					images: [{ url: "/images/meta.png" }],
					url: "http://conf.dna.org.tw/en-US/2024",
				},
				twitter: {
					title:
						"TDNA Taiwan Digital Nomad Conference 2024 - Exploring the Infinite Possibilities of Future Work",
					description:
						"Join TDNA 2024 to discover the latest trends in remote working, network with like-minded professionals, and create new opportunities for work and life.",
					images: [{ url: "/images/meta.png" }],
					card: "summary_large_image",
				},
			};
		default:
			return {
				metadataBase: new URL("https://conf.dna.org.tw"),
				title: "TDNA 台灣數位遊牧者大會 2024 - 探索未來工作方式的無限可能",
				description:
					"TDNA 2024 是一場為數位遊牧者與遠端工作愛好者設計的頂尖交流盛會，提供一個促進學習、分享與創新的平台。加入我們，一起探索遠程工作的未來趨勢！",
				icons: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
				openGraph: {
					locale: "zh-TW",
					type: "website",
					title: "TDNA 台灣數位遊牧者大會 2024 - 探索未來工作方式的無限可能",
					description:
						"加入 TDNA 2024，探索遠端工作的最新趨勢，與志同道合的專業人士交流，共同創造新的工作與生活機會。",
					images: [{ url: "/images/meta.png" }],
					url: "http://conf.dna.org.tw/zh-TW/2024",
				},
				twitter: {
					title: "TDNA 台灣數位遊牧者大會 2024 - 探索未來工作方式的無限可能",
					description:
						"加入 TDNA 2024，探索遠端工作的最新趨勢，與志同道合的專業人士交流，共同創造新的工作與生活機會。",
					images: [{ url: "/images/meta.png" }],
					card: "summary_large_image",
				},
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
              className="hidden lg:block absolute w-screen -z-10 object-contain object-right-bottom"
            />
          </div>
        </body>
        <GoogleAnalytics gaId="G-04W60ZKKVP" />
      </I18nTranslateProvider>
    </html>
  );
}
