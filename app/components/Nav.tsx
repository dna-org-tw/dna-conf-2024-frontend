"use client";

import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "./MenuDropdown";
import MenuContent from "./MenuContent";
import { useClientTranslation } from "@/i18n/client";
import { Button } from "@/components/ui/button";
import { Lang } from "@/types/common";

export default function Nav({ lang }: { lang: Lang }) {
	const { t } = useClientTranslation(lang);
	return (
		<nav className="fixed w-full h-[60px] lg:h-[94px] flex items-center justify-between px-8 lg:px-12 bg-brand-gray z-[100]">
			<Link href={`/${lang}/2024`} className="h-2/5 flex  items-center">
				<Image
					src="/images/LOGO.png"
					alt="LOGO"
					width={414}
					height={78}
					className="h-full w-auto max-w-[150px] object-contain"
				/>
			</Link>

			<div className="hidden lg:flex items-center gap-4 text-sm text-white ">
				<MenuContent t={t} lang={lang} />
				<Button
					asChild
					className="bg-cta hover:bg-cta/80 rounded-lg px-4 py-2 w-fit hidden lg:block"
				>
					<Link
						href="https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789"
						target="_blank"
					>
						{t("BUY_TICKET")}
					</Link>
				</Button>
				<Link href={`/${lang === "en-US" ? "zh-TW" : "en-US"}/2024`}>
					<Image
						src="/images/i18n.png"
						alt="i18n"
						width={50}
						height={50}
						className="h-full w-full"
					/>
				</Link>
			</div>

			<MenuDropdown t={t} lang={lang} />
		</nav>
	);
}
