import AudioPlayer from "@components/AudioPlayer";
import Downloader from "@components/Donwloader";

export interface IPodcastProps {
	id: number;
	fa_name: string;
	image: string;
	type: string;
	link: string; // for video src
}
const Podcast = ({ image, ...props }: IPodcastProps) => {
	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans">
			<div
				style={{ backgroundImage: `url(${image})` }}
				className="flex items-center justify-between rounded-xl bg-[#0C0C0C] object-cover  text-center hover:cursor-pointer"></div>
			<AudioPlayer
				style={{ "--plyr-color-main": "#EA3324" }}
				src={props.link}
				options={{ hideControls: true, clickToPlay: true }}
			/>
			<Downloader fa_name={props.fa_name} link={props.link} />
		</div>
	);
};

export default Podcast;
