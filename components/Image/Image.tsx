import Image from "next/image";
import { ImageProps } from "./Image.types";

const ImageComponent = (props: ImageProps) => {
	return (
		<div className={props.className}>
			<Image src={props.src} alt={props.alt} objectFit={props.objectFit} layout={props.layout} />
		</div>
	);
};

export default ImageComponent;
