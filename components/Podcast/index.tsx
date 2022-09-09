/* eslint-disable jsx-a11y/no-static-element-interactions */
import AudioPlayer from "@components/AudioPlayer";
import Downloader from "@components/Donwloader";
import Image from "next/image";
import { PlayCircle } from "iconsax-react";
import { useState } from "react";
export interface IPodcastProps {
	id: number;
	fa_name: string;
	image: string;
	singer: string;
	link: string; // for video src
}

const Podcast = ({ image, ...props }: IPodcastProps) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer((prevState) => !prevState);
	};

	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans ">
			<div
				className="relative flex items-center  justify-between pl-4 rounded-t-xl bg-[#0C0C0C] text-center hover:cursor-pointer"
				onClick={handleShowPlayer}>
				<Image src={image} alt={props.fa_name} objectFit="scale-down" height="100%" width="100%" />

				{!showPlayer && <PlayCircle size="30" color="#FFF" />}
			</div>
			{showPlayer ? (
				<AudioPlayer
					style={{ "--plyr-color-main": "#EA3324" }}
					src={props.link}
					options={{ hideControls: true, clickToPlay: true }}
					className="bg-black"
				/>
			) : (
				<></>
			)}
			<Downloader fa_name={props.fa_name} link={props.link} />
		</div>
	);
};

export default Podcast;
