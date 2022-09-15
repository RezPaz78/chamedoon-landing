// import Content from "@components/content";
import Head from "@components/Head";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import dummyFilm from "assets/images/dummyFilm.png";

const Home: NextPage = () => {
	return (
		<>
			<Head title="اصفهان" />
			<section id="top-slider " className="flex items-center justify-center p-5">
				<div className="relative aspect-video w-10/12  justify-center rounded-xl bg-purple-300">
					<Image alt="movies" src={dummyFilm} layout="fill" objectFit="cover" quality={100} />
				</div>
			</section>
			{/* <Content /> */}
		</>
	);
};

export default Home;
