import NavButton from "@components/content/components/NavButton";
import React from "react";
import Podcast from "@assets/images/podcast.png";
import Mosque from "@assets/images/mosque.png";
import Folder from "@assets/images/folder.png";
import Map from "@assets/images/map.png";
import Play from "@assets/images/play.png";

const Content = () => {
	return (
		<section className="mb-4">
			<h3 className="mb-5 font-IRANSans text-base font-bold text-white">دسته‌بندی محتوا</h3>
			<div className="flex w-full flex-wrap items-center justify-center">
				<NavButton text="مداحی / پادکست" link="/podcasts" icon={Podcast} />
				<NavButton text="فیلم و مستند" link="/films" icon={Play} />
				<NavButton text="ادعیه و زیارت" link="/prays" icon={Mosque} />
				<NavButton text="نقشه‌ی راه" link="/maps" icon={Map} />
				<NavButton text="فایل‌های راهنما" link="/" icon={Folder} />
			</div>
		</section>
	);
};

export default Content;
