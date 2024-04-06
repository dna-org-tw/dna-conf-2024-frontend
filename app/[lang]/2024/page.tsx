import Link from "next/link";
import { useServerTranslation } from "@/i18n";
import { LangParams } from "@/types/common";
import Speaker from "../../components/speaker";
import HeaderTitleWithLine from "@/app/components/HeaderTitleWithLine";
import Transportation from "@/app/components/transportation";
import Guidelines from "@/app/components/guidelines";
import Banner from "@/app/components/Banner";
import Agenda from "@/app/components/Agenda";
import CountDownTimer from "@/app/components/CountDownTimer";
import HighLights from "@/app/components/HighLights";
import { Button } from "@/components/ui/button";
import ColorfulButton from "@/app/components/ColorfulButton";
import TicketInfo from "@/app/components/TicketInfo";
import Nav from '@/app/components/Nav';

export default async function Home({
	params: { lang },
}: {
	params: LangParams;
}) {
	const { t } = await useServerTranslation(lang);

	return (
		<>
			<Nav lang={lang} />
			<main className="flex min-h-screen flex-col items-center justify-between gap-y-20">
				<Banner lang={lang} />
				<section className="fixed bottom-0 z-50 w-full md:h-1/4 bg-[url('/images/mobile-countdown-background.png')] bg-cover md:relative md:py-12 md:bg-[url('/images/countdown-background.png')] md:bg-contain">
					<CountDownTimer lang={lang} />
				</section>
				<section id="speaker" className="w-full px-6 md:px-24">
					<HeaderTitleWithLine
						title={t('KEYNOTE SPEAKER')}
						lineColor="darkBlue"
					/>
					<Speaker
						name="大瀬良 亮"
						nameEN="OSERA Ryo"
						title="幹事"
						imgSrc="/images/osera-ryo.png"
					/>
				</section>
				<Agenda lang={lang} />
				<HighLights lang={lang} />
				<section id="ticket" className="w-full px-6 md:px-24">
					<HeaderTitleWithLine title={t('TICKET INFO')} lineColor="cyan" />
					<TicketInfo lang={lang} />
					<div className="flex flex-col items-center mt-9">
						<ColorfulButton href="https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789">
							{t('BUY TICKET')}
						</ColorfulButton>
					</div>
					<div className="flex flex-col mt-6">
						<Guidelines open title={t('TICKET PURCHASE GUIDE')}>
							{Array.from({ length: 7 }, (_, index) => t(`notice${index + 1}`))}
						</Guidelines>
					</div>
				</section>
				<section id="transportation" className="w-full py-20 px-6 md:px-24">
					<HeaderTitleWithLine
						title={t('TRANSPORTATION INFORMATION')}
						lineColor="green"
					/>
					<div className="flex flex-col">
						<Transportation
							location={t('TRANSPORTATION_TITLE')}
							address={t('TRANSPORTATION_ADDRESS')}
							detail={t('TRANSPORTATION_DESCRIPTION')}
						/>
					</div>
				</section>
				<section id="call-for-sponsor" className="w-full px-6 md:px-24">
					<HeaderTitleWithLine
						title={t('CALL FOR SPONSOR')}
						lineColor="yellow"
					/>
					<div className="flex flex-col items-center pt-7 md:pt-20 pb-9 md:pb-36">
						<ColorfulButton href="https://forms.gle/u5XVdrCqjpwitT2m7">
							{t('APPLICATION FORM')}
						</ColorfulButton>
					</div>
				</section>
			</main>
		</>
	);
}
