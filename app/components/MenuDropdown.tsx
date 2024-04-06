"use client";
import { useState } from 'react';
import MenuContent from './MenuContent';
import Link from 'next/link';
import { TFunction } from 'i18next';

export default function MenuDropdown({
	t,
	lang,
}: {
	t: TFunction;
	lang: string;
}) {
	const [showDropdown, setShowDropdown] = useState(false);
	const genericHamburgerLine = `h-[3px] w-7 my-1 rounded-full bg-white transition ease transform duration-300`;

	return (
		<>
			<div className="lg:hidden inline-flex gap-4 items-center text-xl text-white font-bold">
				{lang === 'en-US' ? (
					<Link href={'/zh-TW/2024'}>繁</Link>
				) : (
					<Link href={'/en-US/2024'}>EN</Link>
				)}

				<button
					className="flex flex-col h-12 w-12 rounded justify-center items-center group"
					onClick={() => setShowDropdown(!showDropdown)}
				>
					<div
						className={`${genericHamburgerLine} ${
							showDropdown
								? 'rotate-45 translate-y-[11px] opacity-90 group-hover:opacity-100'
								: 'opacity-90 group-hover:opacity-100'
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							showDropdown
								? 'opacity-0'
								: 'opacity-90 group-hover:opacity-100 w-5'
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							showDropdown
								? '-rotate-45 -translate-y-[11px] opacity-90 group-hover:opacity-100'
								: 'opacity-90 group-hover:opacity-100'
						}`}
					/>
				</button>
			</div>

			{showDropdown && (
				<div className="flex flex-col gap-6 bg-black/80 text-white h-fit p-12 absolute left-0 top-[60px] lg:hidden w-full items-center">
					<MenuContent t={t} lang={lang} />
				</div>
			)}
		</>
	);
}
