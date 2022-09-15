import PatternButton from "./components/PatternButton";
import { VideoHorizontal, VoiceCricle, Bus, Calendar } from "iconsax-react";

interface IContentProps {
	className: string;
}

const Content = (props: IContentProps) => {
	return (
		<section className={`${props.className} flex  items-center justify-center `}>
			<div className="flex w-full flex-wrap items-center justify-center">
				<PatternButton
					className="basis-5/12"
					icon={VideoHorizontal}
					link="#top-slider"
					text="اصفهان زیبا"
				/>
				<PatternButton
					className="basis-5/12"
					icon={VoiceCricle}
					link="#top-slider"
					text="صدای شهر"
				/>
				<PatternButton className="basis-5/12" icon={Bus} link="#top-slider" text="مسیر اتوبوس‌ها" />
				<PatternButton
					className="basis-5/12"
					icon={Calendar}
					link="#top-slider"
					text="رویدادهای شهر"
				/>
			</div>
		</section>
	);
};

export default Content;
