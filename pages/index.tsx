import Content from "@components/content";
import Head from "@components/Head";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import dummyFilm from "assets/images/dummyFilm.png";
import LatestMovies from "@components/LatestMovies";
import IsfBeauty from "@components/Isfahan/IsfahanBeauty";

const Home: NextPage = () => {
	return (
		<>
			<Head title="اصفهان" />
			<section id="top-slider" className="flex items-center justify-center p-5">
				<div className="relative aspect-video w-full  justify-center rounded-xl ">
					<Image
						placeholder="blur"
						alt="movies"
						src={dummyFilm}
						layout="fill"
						objectFit="cover"
						quality={100}
					/>
				</div>
			</section>
			<Content className="" />
			<section id="movies" className="flex flex-col items-start p-5">
				<LatestMovies />
			</section>
			<section id="Beautiful_Isfahan" className="flex flex-col items-start bg-secondary">
				<IsfBeauty />
			</section>
		</>
	);
};

export default Home;
