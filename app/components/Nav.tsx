'use client';

import Link from 'next/link';
import Image from 'next/image';
import MenuDropdown from './MenuDropdown';
import MenuContent from './MenuContent';
import { useContext } from 'react';
import { i18nTranslateContext } from '@/context/I18nTranslateProvider';

export interface TranslationData {
	EVENT: string;
	SPEAKER: string;
	AGENDA: string;
	TICKETS: string;
	TRANSPORTATION: string;
	CALL_FOR_SPONSOR: string;
}

export default function Nav() {
	const { translate, lng } = useContext(i18nTranslateContext);

	const translatedData: TranslationData = {
		EVENT: translate?.('EVENT') || '',
		SPEAKER: translate?.('SPEAKER') || '',
		AGENDA: translate?.('AGENDA') || '',
		TICKETS: translate?.('TICKETS') || '',
		TRANSPORTATION: translate?.('TRANSPORTATION') || '',
		CALL_FOR_SPONSOR: translate?.('CALL FOR SPONSOR') || '',
	};

	return (
		<nav className="w-full h-[60px] md:h-[94px] flex items-center justify-center xl:justify-between px-24 bg-brand-gray relative z-50">
			<MenuDropdown translatedData={translatedData} lng={lng} />
			<Link href="/" className="h-2/5  flex justify-center items-center">
				<Image
					src="/images/LOGO.png"
					alt="LOGO"
					width={414}
					height={78}
					className="h-full w-auto"
				/>
			</Link>

			<div className="hidden xl:flex items-center gap-6 text-white ">
				<MenuContent translatedData={translatedData} lng={lng} />
			</div>
		</nav>
	);
}
