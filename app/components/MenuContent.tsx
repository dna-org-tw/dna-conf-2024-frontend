"use client";
import Link from "next/link";
import useScrollTo from "@/hooks/useScrollTo";
import { TFunction } from "i18next";

interface MenuContentProp {
	t: TFunction;
	lang: string;
}

const MenuContent: React.FC<MenuContentProp> = ({ t, lang }) => {
	useScrollTo();

	return (
		<>
			<Link className="hover:text-cta" href={`/${lang}/2024#event`}>
				{t("EVENT")}
			</Link>
			<Link className="hover:text-cta" href={`/${lang}/2024#speaker`}>
				{t("SPEAKER")}
			</Link>
			<Link className="hover:text-cta" href={`/${lang}/2024#agenda`}>
				{t("AGENDA")}
			</Link>
			<Link className="hover:text-cta" href={`/${lang}/2024#ticket`}>
				{t("TICKETS")}
			</Link>
			<Link className="hover:text-cta" href={`/${lang}/2024#transportation`}>
				{t("TRANSPORTATION")}
			</Link>
			<Link className="hover:text-cta" href={`/${lang}/2024#call-for-sponsor`}>
				{t("CALL FOR SPONSOR")}
			</Link>
		</>
	);
};
export default MenuContent;
