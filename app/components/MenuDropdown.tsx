'use client';
import { useState } from 'react';
import { TranslationData } from './Nav';
import MenuContent from './MenuContent';

export default function MenuDropdown({
	translatedData,
	lng,
}: {
	translatedData: TranslationData;
	lng: string;
}) {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<>
			<div className="absolute left-12 xl:hidden">
				<button onClick={() => setShowDropdown(!showDropdown)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{showDropdown ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>
			</div>

			{showDropdown && (
				<div
					className={`
					flex flex-col gap-6 bg-black/80 text-white  h-fit p-12 absolute left-0 top-[60px] md:top-[94px] xl:hidden
					${lng === 'zh-TW' ? 'w-screen items-center' : 'w-fit'}
				`}
				>
					<MenuContent translatedData={translatedData} lng={lng} />
				</div>
			)}
		</>
	);
}
