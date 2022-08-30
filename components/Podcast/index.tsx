import { ArrowDown, PlayCircle } from "iconsax-react";
import Image from "next/image";
import PodcastImage from "@assets/images/podcastCover.png";

const Podcast = () => {
	return (
		<div className="mb-10 w-full rounded-xl font-IRANSans">
			<div className="flex items-center justify-between rounded-xl bg-[#0C0C0C] pl-3 text-center hover:cursor-pointer">
				<Image src={PodcastImage} alt="film" width="164" height="48" />
				<PlayCircle size="30" color="#FFF" />
			</div>
			<div className="flex w-full items-center justify-between rounded-b-xl bg-white px-5 py-3">
				<h4 className="text-sm font-normal text-black">من یک کاتولیک هستم</h4>
				<ArrowDown color="#000" size="20" />
			</div>
		</div>
	);
};

export default Podcast;
