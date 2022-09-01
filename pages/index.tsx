import Content from "@components/content";
import Film, { IFilmProps } from "@components/Film";
import Head from "@components/Head";
import Prayer from "@components/Prayer";
import Map from "@components/Map";
import type { NextPage } from "next";
import Podcast, { IPodcastProps } from "@components/Podcast";
import { useFilmQuery } from "./films/query";
import { IPrayResponse, usePrayersQuery } from "./prays/query";
import { IMapsResponse, useMapsQuery } from "./maps/query";
import { usePodcastQuery } from "./podcasts/query";

const Home: NextPage = () => {
	const { data: filmData } = useFilmQuery();
	const { data: prayData } = usePrayersQuery();
	const { data: mapData } = useMapsQuery();
	const { data: podcastData } = usePodcastQuery();
	return (
		<>
			<Head />
			<Content />
			{filmData && (
				<section>
					<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
					{filmData.map((film: IFilmProps) => (
						<Film key={film.id} {...film} />
					))}
				</section>
			)}
			{podcastData && (
				<section>
					<h3 className="mb-5 font-IRANSans text-base font-medium text-white">مداحی / پادکست</h3>

					{podcastData.map((data: IPodcastProps) => (
						<Podcast key={data.id} {...data} />
					))}
				</section>
			)}
			{prayData && (
				<section>
					<h3 className="mb-5 font-IRANSans text-base font-medium text-white">ادعیه و زیارات</h3>
					<div className="flex flex-wrap items-center justify-between">
						{prayData.map((data: IPrayResponse) => (
							<Prayer key={data.id} link={data.link} text={data.fa_name} />
						))}
					</div>
				</section>
			)}
			{mapData && (
				<section>
					<h3 className="mb-5 font-IRANSans text-base font-medium text-white">نقشه‌ی راه</h3>
					<div className="flex flex-wrap items-center justify-between">
						{mapData.map((data: IMapsResponse) => (
							<Map key={data.id} link={data.link} text={data.fa_name} />
						))}
					</div>
				</section>
			)}
		</>
	);
};

export default Home;
