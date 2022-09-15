/* eslint-disable jsx-a11y/no-static-element-interactions */
import Ad from "@components/Ads/BasicImage";
import { VideoCircle } from "iconsax-react";
import { useState } from "react";
import PlyrComponent from "./index";

const ISFVideoPlayer = ({ image, src }: { image: any; src: string }) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer((prevState) => !prevState);
	};

	return (
		<>
			<div onClick={handleShowPlayer} className=" [&>*]:rounded-lg ">
				{showPlayer ? (
					<PlyrComponent
						className="!aspect-square w-[200%] items-center justify-center"
						image={image}
						src={src}
						style={{ "--plyr-color-main": "#FFCB05" }}
					/>
				) : (
					<>
						<Ad src={image} />

						<VideoCircle
							variant="Bulk"
							className=" absolute top-1/3 left-1/3 h-1/3 w-1/3  text-black [&>path+path]:text-chamedoon"
						/>
					</>
				)}
			</div>
		</>
	);
};

export default ISFVideoPlayer;
