import type { Metadata } from "next";
import "../globals.css";
import I18nTranslateProvider from "@/context/I18nTranslateProvider";
import { LangParams } from "@/types/common";

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
        <body>{children}</body>
      </I18nTranslateProvider>
    </html>
  );
}
