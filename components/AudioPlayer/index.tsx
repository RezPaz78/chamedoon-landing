import { useRef } from "react";
import { APITypes, PlyrOptions } from "plyr-react";
import AdvancedPlayer from "components/Player/AdvancedPlayer";

const PlyrComponent = ({
	src,
	options,
	className,
	style,
}: {
	src: string;
	options?: PlyrOptions;
	className?: string;
	style: { [key: string]: string | number };
}) => {
	const ref = useRef<APITypes>(null);

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
			options={options}
		/>
	) : null;

	return <div className={className}>{plyrVideo}</div>;
};

export default PlyrComponent;
