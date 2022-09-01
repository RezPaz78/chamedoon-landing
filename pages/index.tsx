import Content from "@components/content";
import Film, { IFilmProps } from "@components/Film";
import Head from "@components/Head";
import Prayer from "@components/Prayer";
import Map from "@components/Map";
import type { NextPage } from "next";
import Podcast from "@components/Podcast";
import { useFilmQuery } from "./films/query";
import { IPrayResponse, usePrayersQuery } from "./prays/query";
import { IMapsResponse, useMapsQuery } from "./maps/query";

const Home: NextPage = () => {
	const { data: filmData } = useFilmQuery();
	const { data: prayData } = usePrayersQuery();
	const { data: mapData } = useMapsQuery();
	return (
		<>
			<Head />
			<Content />
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
				{filmData && filmData.map((film: IFilmProps) => <Film key={film.id} {...film} />)}
				<Film image="" link="" key={1} type="آموزشی" fa_name="تست " id={1} />
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">مداحی / پادکست</h3>
				<Podcast />
				<Podcast />
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">ادعیه و زیارات</h3>
				<div className="flex flex-wrap items-center justify-between">
					{prayData &&
						prayData.map((data: IPrayResponse) => (
							<Prayer key={data.id} link={data.link} text={data.fa_name} />
						))}
				</div>
			</section>
			<section>
				<h3 className="mb-5 font-IRANSans text-base font-medium text-white">نقشه‌ی راه</h3>
				<div className="flex flex-wrap items-center justify-between">
					{mapData &&
						mapData.map((data: IMapsResponse) => (
							<Map key={data.id} link={data.link} text={data.fa_name} />
						))}
				</div>
			</section>
		</>
	);
};

export default Home;
