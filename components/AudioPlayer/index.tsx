import { useEffect, useRef, useState } from "react";
import { APITypes, PlyrOptions } from "plyr-react";
import AdvancedPlayer from "components/AudioPlayer/AdvancedAudioPlayer";
import { Next, Play, Previous } from "iconsax-react";

const PlyrComponent = ({
	src,
	options,
	style,
}: {
	src: string;
	options?: PlyrOptions;
	className?: string;
	style: { [key: string]: string | number };
}) => {
	const ref = useRef<APITypes>(null);
	const finalOptions: PlyrOptions = {
		...options,
		iconUrl: "/plyrIcons.svg",
		blankVideo: "/blank.mp4",
		autopause: true,
		controls: ["progress", "current-time", "mute", "volume"],
	};

	const plyrVideo = src ? (
		<AdvancedPlayer
			style={style}
			ref={ref}
			source={{
				type: "audio",
				sources: [
					{
						src: src,
					},
				],
			}}
			options={finalOptions}
			className="w-full"
		/>
	) : null;

	return <div className="w-full">{plyrVideo}</div>;
};

export default PlyrComponent;
