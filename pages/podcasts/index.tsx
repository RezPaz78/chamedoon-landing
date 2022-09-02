import Head from "@components/Head";
import Podcast, { IPodcastProps } from "@components/Podcast";
import { usePodcastQuery } from "./query";
export interface IPodcastsProps {
	id: number;
	fa_name: string;
	image: string;
	type: string;
	link: string; // for video src
}
const Podcasts = () => {
	const { data } = usePodcastQuery();
	return (
		<>
			<Head title=">مداحی / پادکست" />
			{data && (
				<section>
					<h3 className="mb-5 font-IRANSans text-base font-medium text-white">مداحی / پادکست</h3>

					{data.map((data: IPodcastProps) => (
						<Podcast key={data.id} {...data} />
					))}
				</section>
			)}
		</>
	);
};

export default Podcasts;
