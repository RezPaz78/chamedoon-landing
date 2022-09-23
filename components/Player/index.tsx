import { useEffect, useRef } from "react";
import { APITypes, PlyrOptions, usePlyr } from "plyr-react";
import AdvancedPlayer from "./AdvancedPlayer";
const PlyrComponent = ({
	src,
	options,
	className,
	style,
	image,
}: {
	src: string;
	options?: PlyrOptions;
	className?: string;
	style: { [key: string]: string | number };
	image: string;
}) => {
	const ref = useRef<APITypes>(null);

	const finalOptions: PlyrOptions = {
		...options,
		iconUrl: "/plyrIcons.svg",
		blankVideo: "/blank.mp4",
		autopause: true,
		fullscreen: { enabled: true, fallback: true, iosNative: false },
		clickToPlay: true,
		autoplay: true,
	};

	const plyrVideo = src ? (
		<AdvancedPlayer
			style={style}
			ref={ref}
			source={{
				type: "video",
				poster: image,
				sources: [
					{
						src: src,
					},
				],
			}}
			options={finalOptions}
			className={className}
		/>
	) : null;

	return <div className="[&>*]:rounded-xl">{plyrVideo}</div>;
};

export default PlyrComponent;
