/* eslint-disable jsx-a11y/no-static-element-interactions */
import Ad from "@components/Ads/BasicImage";
import { useState } from "react";
import PlyrComponent from "./index";

const LatestMoviesPlayer = ({ image, src }: { image: string; src: string }) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer((prevState) => !prevState);
	};

	return (
		<>
			<div className="relative mt-5 box-border aspect-video w-full  justify-center rounded-xl [&>*]:rounded-lg ">
				{showPlayer ? (
					<PlyrComponent image={image} src={src} style={{ "--plyr-color-main": "#FFCB05" }} />
				) : (
					<div onClick={handleShowPlayer} className="justify-center rounded-xl [&>*]:rounded-lg ">
						<Ad src={image} />
					</div>
				)}
			</div>
		</>
	);
};

export default LatestMoviesPlayer;
