import Content from "@components/content";
import Film from "@components/Film";
import Head from "@components/Head";
import Prayer from "@components/Prayer";
import Map from "@components/Map";
import type { NextPage } from "next";
import Podcast from "@components/Podcast";

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<Content />
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
				<Film />
				<Film />
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">مداحی / پادکست</h3>
				<Podcast />
				<Podcast />
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">ادعیه و زیارات</h3>
				<div className="flex flex-wrap items-center justify-between">
					<Prayer link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
					<Prayer link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
					<Prayer link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
				</div>
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">نقشه‌ی راه</h3>
				<div className="flex flex-wrap items-center justify-between">
					<Map link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
					<Map link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
					<Map link="/" text="	زیارت‌نامه‌ی حضرت علی (ع)" />
				</div>
			</section>
		</>
	);
};

export default Home;
