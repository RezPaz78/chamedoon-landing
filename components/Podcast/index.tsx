import AudioPlayer from "@components/AudioPlayer";
import Downloader from "@components/Donwloader";
import Image from "next/image";
import { PlayCircle } from "iconsax-react";
import { useEffect, useState } from "react";
export interface IPodcastProps {
	id: number;
	fa_name: string;
	image: string;
	type: string;
	link: string; // for video src
}

const Podcast = ({ image, ...props }: IPodcastProps) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer((prevState) => !prevState);
	};

	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans">
			<div
				className="relative flex items-center justify-end rounded-xl bg-[#0C0C0C] py-10 pl-3 text-center hover:cursor-pointer"
				style={{
					backgroundImage: `url(${image})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}>
				{/* <Image className="" src={image} alt="film" objectFit="cover" width="100%" height="100%" /> */}

				<PlayCircle onClick={handleShowPlayer} size="30" color="#FFF" />
			</div>
			{showPlayer ? (
				<AudioPlayer
					style={{ "--plyr-color-main": "#EA3324" }}
					src={props.link}
					options={{ hideControls: true, clickToPlay: true }}
				/>
			) : (
				<></>
			)}
			<Downloader fa_name={props.fa_name} link={props.link} />
		</div>
	);
};

export default Podcast;
