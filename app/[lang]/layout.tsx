import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Taiwan Digital Nomad Association",
  description: "The official website of the Taiwan Digital Nomad Association",
};

export default function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { lang: 'en-US' | 'zh-TW' } }>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
