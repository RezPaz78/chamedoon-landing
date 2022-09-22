import Content from "@components/content";
import Head from "@components/Head";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import dummyFilm from "assets/images/dummyFilm.png";
import LatestMovies from "@components/LatestMovies";
import Playlists from "@components/Playlists";
import IsfBeauty from "@components/Isfahan/Beauty";
import IsfVoice from "@components/Isfahan/Voice";
import Podcasts from "@components/Podcasts";
import Slider from "@components/Slider";

const Home: NextPage = () => {
	return (
		<>
			<Head title="اصفهان" />
			<section id="top-slider" className="flex items-center justify-center py-5 [&>*]:z-0">
				<Slider />
			</section>
			<Content className="[&>*]:z-0" />
			<section id="movies" className="flex flex-col items-start p-5 [&>*]:z-0">
				<LatestMovies />
			</section>
			<section id="Beautiful_Isfahan" className="flex flex-col items-start bg-secondary [&>*]:z-0">
				<IsfBeauty />
			</section>
			<section id="playlists" className="flex flex-col items-start p-5 pt-12 [&>*]:z-0">
				<Playlists />
			</section>
			<section id="Isfahan_Voice" className="flex flex-col items-start bg-secondary [&>*]:z-0">
				<IsfVoice />
			</section>
			<section id="Podcasts" className="[&>*]:z-02 flex flex-col items-start p-5 pt-1">
				<Podcasts />
			</section>
		</>
	);
};

export default Home;
