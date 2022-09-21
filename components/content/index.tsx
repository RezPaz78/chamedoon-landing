import PatternButton from "./components/PatternButton";
import { VideoHorizontal, VoiceCricle, Bus, Calendar } from "iconsax-react";

interface IContentProps {
	className: string;
}

const Content = (props: IContentProps) => {
	return (
		<section className={`${props.className} flex  items-center justify-center `}>
			<div className="flex w-11/12 flex-wrap items-center justify-between ">
				<PatternButton
					className="box-border min-w-[130px]  max-w-[200px] basis-5/12 md:max-w-min lg:max-w-xs lg:basis-1/5"
					icon={VideoHorizontal}
					link="#top-slider"
					text="اصفهان زیبا"
				/>
				<PatternButton
					className="box-border min-w-[130px] max-w-[200px] basis-5/12 md:max-w-min lg:max-w-xs lg:basis-1/5"
					icon={VoiceCricle}
					link="#Isfahan_Voice"
					text="صدای شهر"
				/>
				<PatternButton
					className="box-border min-w-[130px] max-w-[200px] basis-5/12 md:max-w-min lg:max-w-xs lg:basis-1/5"
					icon={Bus}
					link="#top-slider"
					text="مسیر اتوبوس‌ها"
				/>
				<PatternButton
					className="box-border min-w-[130px] max-w-[200px] basis-5/12 md:max-w-min lg:max-w-xs lg:basis-1/5"
					icon={Calendar}
					link="#city_events"
					text="رویدادهای شهر"
				/>
			</div>
		</section>
	);
};

export default Content;
