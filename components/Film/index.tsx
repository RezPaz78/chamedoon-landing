import Player from "@components/Player";
import Downloader from "@components/Donwloader";

export interface IFilmProps {
	id: number;
	fa_name: string;
	image: string;
	type: string;
	link: string; // for video src
}
const Film = (props: IFilmProps) => {
	return (
		<div className="mb-10 ml-5 w-full rounded-xl font-IRANSans ">
			<div className="relative text-center hover:cursor-pointer">
				<Player
					image={props.image}
					style={{ "--plyr-color-main": "#EA3324" }}
					src={props.link}
					options={{ hideControls: true, clickToPlay: true }}
				/>
			</div>
			<Downloader fa_name={props.fa_name} link={props.link} />
		</div>
	);
};

export default Film;
