import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Lang } from '@/types/common';
import { useServerTranslation } from '@/i18n';

export default async function Banner({ lang }: { lang: Lang }) {
	const isZhTw = lang === 'zh-TW';
	const { t } = await useServerTranslation(lang);
	return (
		<section
			id="event"
			className="w-full bg-right-top bg-no-repeat bg-w-100% lg:py-8"
			style={{ backgroundImage: 'url(/images/banner-background.png)' }}
		>
			<div className="container mx-auto pt-11 sm:pt-36">
				<div
					className={clsx(
						'relative',
						'ml-[40px] lg:ml-[120px]',
						isZhTw
							? 'w-[146px] h-[80px] sm:w-[370px] sm:h-[209px] md:w-[495px] md:h-[279px]'
							: 'w-[198px] h-[87px] sm:w-[465px] sm:h-[204px] md:w-[620px] md:h-[273px]'
					)}
				>
					<Image
						src={
							isZhTw
								? '/images/banner-slogan-zh.svg'
								: '/images/banner-slogan-en.svg'
						}
						alt="adventuring in 2024"
						objectFit="cover"
						fill
					/>
				</div>
				<div
					className={clsx(
						isZhTw ? 'hidden md:flex' : 'hidden',
						'mt-12 items-center gap-x-10 lg:mx-[120px]'
					)}
				>
					<div className="flex flex-col  gap-y-2 min-w-[287px]">
						<h2 className="text-4xl tracking-[4px] font-bold">
							{t('conf date')}
						</h2>
						<h2 className="text-4xl tracking-[4px] font-bold">
							{t('conf time')}
						</h2>
						<h2 className="flex gap-x-2 items-center font-bold text-2xl tracking-[4px]">
							<Image
								src="/images/place-icon.svg"
								width={16}
								height={21}
								alt="place icon"
							/>
							{t('conf location')}
						</h2>
					</div>
					<div
						className="flex w-[30px] h-[180px] bg-no-repeat bg-center bg-cover"
						style={{ backgroundImage: 'url(/images/divider-vertical.svg)' }}
					/>
					<div className="flex flex-col gap-y-2">
						<h1 className="text-4xl tracking-[10px]">{t('conf')}</h1>
						<p>{t('conf description')}</p>
					</div>
				</div>

				<div
					className={clsx(
						isZhTw ? 'flex md:hidden' : 'flex',
						'flex-col mt-12 items-center gap-x-10 lg:mx-[120px] px-4'
					)}
				>
					<div className="flex flex-col gap-y-2">
						<h2
							className={clsx(
								isZhTw ? '' : 'flex-col lg:flex-row',
								'flex gap-x-2 items-center font-bold text-2xl justify-center tracking-[4px]'
							)}
						>
							<Image
								src="/images/time-icon.svg"
								width={16}
								height={21}
								alt="time icon"
							/>
							<span className="text-center">{`${t('conf date short')} ${t(
								'conf time'
							)}`}</span>
						</h2>
						<h2
							className={clsx(
								isZhTw ? '' : 'flex-col lg:flex-row',
								'flex gap-x-2 items-center font-bold text-2xl justify-center'
							)}
						>
							<Image
								src="/images/place-icon.svg"
								width={16}
								height={21}
								alt="place icon"
							/>
							<span className="text-center">{t('conf location')}</span>
						</h2>
					</div>
					<div
						className="flex w-[180px] h-[30px] bg-no-repeat bg-center bg-cover my-7"
						style={{ backgroundImage: 'url(/images/divider-horizontal.svg)' }}
					/>
					<div className={clsx(isZhTw ? 'flex flex-col' : '')}>
						<h1
							className={clsx(
								'text-2xl tracking-[4px] text-center',
								isZhTw ? 'mb-3' : 'inline mb-0'
							)}
						>
							{t('conf')}
						</h1>
						<p className={clsx(isZhTw ? '' : 'inline')}>
							{t('conf description')}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
