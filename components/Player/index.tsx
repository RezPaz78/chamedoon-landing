import { useRef } from "react";
import Plyr, { APITypes, PlyrOptions } from "plyr-react";

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

	const plyrVideo = src ? (
		<Plyr
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
			options={options}
		/>
	) : null;

	return <div className={className}>{plyrVideo}</div>;
};

export default PlyrComponent;
