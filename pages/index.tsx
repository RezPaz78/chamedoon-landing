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
import Forgotten from "@components/forgotten";
import Link from "next/link";
import Image from "next/image";
import filmsPoster from "@assets/images/filmsPoster.png";
import emptyPoster from "@assets/images/emptyPoster.png";
import guidePoster from "@assets/images/guidePoster.png";
import chamedoonPoster from "@assets/images/chamedoonPoster.png";

const Home: NextPage = () => {
	const { data: filmData } = useFilmQuery();
	const { data: prayData } = usePrayersQuery();
	const { data: mapData } = useMapsQuery();
	const { data: podcastData } = usePodcastQuery();

	return (
		<>
			<Head />
			<Content />
			<section>
				<Forgotten />
			</section>
			{filmData && (
				<section>
					<div className="flex justify-between">
						<h3 className="mb-5 font-IRANSans text-base font-medium text-white">فیلم و مستند</h3>
						<Link href={"/films"}>
							<a>
								<h3 className="mb-5 font-IRANSans text-base font-medium text-[#EF3837]">
									مشاهده همه
								</h3>
							</a>
						</Link>
					</div>
					{filmData.slice(0, 3).map((film: IFilmProps) => (
						<Film key={film.id} {...film} />
					))}
				</section>
			)}
			<Link href={"/maps"}>
				<div className="my-5 mb-10 overflow-hidden rounded-xl">
					<Image
						src={guidePoster}
						alt="maps"
						layout="responsive"
						objectFit="contain"
						className=""
					/>
				</div>
			</Link>
			{podcastData && (
				<section>
					<div className="flex justify-between">
						<h3 className="mb-5 font-IRANSans text-base font-medium text-white">مداحی / پادکست</h3>
						<Link href={"/podcasts"}>
							<a>
								<h3 className="mb-5 font-IRANSans text-base font-medium text-[#EF3837]">
									مشاهده همه
								</h3>
							</a>
						</Link>
					</div>
					{podcastData.slice(0, 3).map((data: IPodcastProps) => (
						<Podcast
							key={data.id}
							fa_name={data.fa_name}
							id={data.id}
							image={data.image}
							link={data.link}
							singer={data.singer}
						/>
					))}
				</section>
			)}

			<Link href={"/films"}>
				<div className="my-5 mb-10 overflow-hidden rounded-xl">
					<Image
						src={filmsPoster}
						alt="maps"
						layout="responsive"
						objectFit="contain"
						className=""
					/>
				</div>
			</Link>

			{prayData && (
				<section>
					<div className="flex justify-between">
						<h3 className="mb-5 font-IRANSans text-base font-medium text-white">ادعیه و زیارات</h3>
						<Link href={"/prays"}>
							<a>
								<h3 className="mb-5 font-IRANSans text-base font-medium text-[#EF3837]">
									مشاهده همه
								</h3>
							</a>
						</Link>
					</div>
					<div className={` flex flex-wrap items-center justify-between`}>
						{prayData.map((data: IPrayResponse) => (
							<Prayer key={data.id} link={data.link} image={data.image} text={data.fa_name} />
						))}
					</div>
				</section>
			)}

			<div className="my-5 mb-10 overflow-hidden rounded-xl">
				<Image src={emptyPoster} alt="maps" layout="responsive" objectFit="contain" className="" />
			</div>

			{mapData && (
				<section>
					<div className="flex justify-between">
						<h3 className="mb-5 font-IRANSans text-base font-medium text-white">نقشه‌ی راه</h3>
						<Link href={"/maps"}>
							<a>
								<h3 className="mb-5 font-IRANSans text-base font-medium text-[#EF3837]">
									مشاهده همه
								</h3>
							</a>
						</Link>
					</div>
					<div className={` flex flex-wrap items-center justify-between`}>
						{mapData.map((data: IMapsResponse) => (
							<Map key={data.id} link={data.link} image={data.image} text={data.fa_name} />
						))}
					</div>
				</section>
			)}
			<Link href={"https://chamedoon.me/"}>
				<div className="my-5 mb-10 overflow-hidden rounded-xl">
					<Image
						src={chamedoonPoster}
						alt="maps"
						layout="responsive"
						objectFit="contain"
						className=""
					/>
				</div>
			</Link>
		</>
	);
};

export default Home;
