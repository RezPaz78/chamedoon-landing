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
					<p className=" absolute left-4 top-2 flex items-center justify-center rounded-lg bg-chamedoon p-1 px-2 text-center font-IRANSans text-xs font-semibold text-black">
						تبلیغات
					</p>
				</div>
			)}
		</>
	);
};

export default SliderPlayer;
