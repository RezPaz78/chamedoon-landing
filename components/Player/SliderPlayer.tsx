/* eslint-disable jsx-a11y/no-static-element-interactions */
import Ad from "@components/Ads/BasicImage";
import { useState } from "react";
import PlyrComponent from "./index";

const SliderPlayer = ({ image, src }: { image: string; src: string }) => {
	const [showPlayer, setShowPlayer] = useState(false);

	const handleShowPlayer = () => {
		setShowPlayer((prevState) => !prevState);
	};

	return (
		<>
			{showPlayer ? (
				<PlyrComponent image={image} src={src} style={{ "--plyr-color-main": "#FFCB05" }} />
			) : (
				<div
					onClick={handleShowPlayer}
					className={`relative aspect-video w-full justify-center  text-white [&>*]:rounded-xl `}>
					<Ad src={image} />
				</div>
			)}
		</>
	);
};

export default SliderPlayer;
