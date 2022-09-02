import { StaticImageData, ImageProps as props } from "next/image";
export interface ImageProps {
	src: StaticImageData | string;
	layout?: "fixed" | "fill" | "intrinsic" | "responsive";
	objectFit?: props["objectFit"];
	alt: string;
	className?: string;
	// when layout is not set we should set width and height
	width?: string;
	height?: string;
}
