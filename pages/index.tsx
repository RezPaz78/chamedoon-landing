import Content from "@components/content";
import Film, { IFilmProps } from "@components/Film";
import Head from "@components/Head";
import Prayer from "@components/Prayer";
import Map from "@components/Map";
import type { NextPage } from "next";
import Podcast, { IPodcastProps } from "@components/Podcast";

import Forgotten from "@components/forgotten";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<>
			<Head />
			<Content />
			<section>
				<Forgotten />
			</section>

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
			</section>
		</>
	);
};

export default Home;
